import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  Brain,
  Handshake,
  Rocket,
  Box,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Menu,
} from 'lucide-react';

/* ────────────────────────────────────────────────────────────────────────────
   The canvas is full-bleed, so its aspect ratio is whatever the viewport gives
   us. Height is pinned to a fixed number of units and the width is derived from
   the measured aspect ratio — that keeps one unit square on both axes, which is
   what lets the hexagon stay a true hexagon at any window size.
   ──────────────────────────────────────────────────────────────────────────── */
const VB_H = 780;

/*
 * Sits slightly below the middle rather than dead centre: the bottom vertex also
 * has to fit a two-line caption underneath it, while the top vertex needs only
 * its own circle. Nudging the centre down evens out the leftover space top and
 * bottom, which lets the hexagon grow taller than a dead-centre layout allows.
 */
const CENTER_Y = 369;
/*
 * Vertical reach of the hexagon (centre to the top/bottom vertex). Both ends have
 * to stay inside the canvas, and at the top the limit is the decoration reach
 * (NODE_DECOR_R), not the circle itself:
 *   top    -> CENTER_Y - NODE_DECOR_R - 5                     = 369 - 84 = 285
 *   bottom -> VB_H - CENTER_Y - NODE_R - caption(22 + 32) - 5 = 655 - 369 = 286
 * Pushing this higher clips the top node's outer ring and arc segments.
 */
const HEX_RY = 285;

/*
 * Horizontal spread. A mathematically regular hexagon is locked to
 * 0.866 x its vertical reach, which on a wide screen leaves huge empty gutters
 * because the size is capped by viewport height. So the side vertices are pushed
 * out to fill the width instead — symmetric, just wider than tall.
 * Set HEX_STRETCH_MAX to 0.866 for a strictly regular hexagon.
 */
const HEX_STRETCH_MIN = Math.sqrt(3) / 2; // 0.866 — the regular ratio
const HEX_STRETCH_MAX = 1.6;
/** Room the widest caption needs beyond a node's outer edge. */
const CAPTION_RESERVE = 200;

const CENTER_R = 116;
const NODE_R = 66;
/** Outermost reach of a node's decoration (the rotating arc segments). */
const NODE_DECOR_R = NODE_R + 13;
const CAPTION_GAP = 26;

/* Vertical room reserved for the nav bar and the scroll cue. */
const CHROME_TOP = 64;
const CHROME_BOTTOM = 56;

type Side = 'left' | 'right' | 'bottom';

interface EcoNodeDef {
  id: string;
  title: string;
  subtitle: string;
  color: string;
  /** Degrees clockwise from the top vertex — 60 deg steps give a true hexagon. */
  angle: number;
  side: Side;
  desc: string[];
  /** Single-sentence version used by the stacked mobile layout. */
  blurb: string;
}

interface EcoNode extends EcoNodeDef {
  x: number;
  y: number;
}

const NODE_DEFS: EcoNodeDef[] = [
  {
    id: 'autonomic',
    title: 'AUTONOMIC',
    subtitle: 'AI SOLUTIONS',
    color: '#67e8f9',
    angle: 0,
    side: 'right',
    desc: ['AI-Powered Solutions', 'Driving Autonomous', 'Innovation'],
    blurb: 'AI-Powered Solutions driving autonomous innovation.',
  },
  {
    id: 'workoaches',
    title: 'WORKOACHES',
    subtitle: 'HR SOLUTIONS',
    color: '#5eead4',
    angle: 60,
    side: 'right',
    desc: ['People. Growth.', 'Performance.', 'Redefined.'],
    blurb: 'People. Growth. Performance. Redefined.',
  },
  {
    id: 'global',
    title: 'GLOBAL',
    subtitle: 'PARTNERSHIPS',
    color: '#60a5fa',
    angle: 120,
    side: 'right',
    desc: ['Strategic Alliances,', 'Global Impact'],
    blurb: 'Strategic alliances, global impact.',
  },
  {
    id: 'future',
    title: 'FUTURE',
    subtitle: 'VENTURES',
    color: '#93c5fd',
    angle: 180,
    side: 'bottom',
    desc: ['Exploring Tomorrow.', 'Building the Future.'],
    blurb: 'Exploring tomorrow. Building the future.',
  },
  {
    id: 'ar',
    title: 'AFTERLIFE AR',
    subtitle: 'AR / XR GAMING',
    color: '#a78bfa',
    angle: 240,
    side: 'left',
    desc: ['Immersive AR Experiences', '& Next-Gen Gaming'],
    blurb: 'Immersive AR experiences & next-gen gaming.',
  },
  {
    id: 'scanme',
    title: 'SCANME',
    subtitle: 'RESTAURANT TECH',
    color: '#fb923c',
    angle: 300,
    side: 'left',
    desc: ['Smart Ordering,', 'Reservations &', 'Restaurant Solutions'],
    blurb: 'Smart ordering, reservations & restaurant solutions.',
  },
];

/** Reading order for the stacked mobile list. */
const MOBILE_ORDER = ['autonomic', 'scanme', 'workoaches', 'ar', 'global', 'future'];
const MOBILE_NODES = MOBILE_ORDER.map(
  (id) => NODE_DEFS.find((n) => n.id === id) as EcoNodeDef
);

/* Edges: spokes from the core, the hexagon rim, and two cross diagonals. */
const RIM: [string, string][] = [
  ['autonomic', 'workoaches'],
  ['workoaches', 'global'],
  ['global', 'future'],
  ['future', 'ar'],
  ['ar', 'scanme'],
  ['scanme', 'autonomic'],
];
const CROSS: [string, string][] = [
  ['scanme', 'global'],
  ['workoaches', 'ar'],
];

/* Shorten a segment so it starts/ends on the circle edges instead of centres. */
function trim(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  r1: number,
  r2: number
) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy) || 1;
  const ux = dx / len;
  const uy = dy / len;
  return {
    x1: x1 + ux * r1,
    y1: y1 + uy * r1,
    x2: x2 - ux * r2,
    y2: y2 - uy * r2,
  };
}

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/* ─── Geometry helpers for the decorative detailing ───────────────────────── */
function polar(cx: number, cy: number, r: number, deg: number) {
  const rad = (deg * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

/** Arc segment, drawn clockwise from startDeg to endDeg (0deg = 3 o'clock). */
function arcPath(
  cx: number,
  cy: number,
  r: number,
  startDeg: number,
  endDeg: number
) {
  const s = polar(cx, cy, r, startDeg);
  const e = polar(cx, cy, r, endDeg);
  const large = Math.abs(endDeg - startDeg) > 180 ? 1 : 0;
  return `M ${s.x} ${s.y} A ${r} ${r} 0 ${large} 1 ${e.x} ${e.y}`;
}

/**
 * Graduated bezel around the core, like a chronograph dial: 72 ticks with every
 * sixth one longer and brighter. Coordinates are relative to the core centre, so
 * the whole set can be dropped in with a single translate.
 */
const CORE_TICKS = Array.from({ length: 72 }, (_, i) => {
  const major = i % 6 === 0;
  const deg = (i / 72) * 360;
  const inner = polar(0, 0, CENTER_R + 7, deg);
  const outer = polar(0, 0, CENTER_R + (major ? 15 : 11), deg);
  return { ...{ x1: inner.x, y1: inner.y, x2: outer.x, y2: outer.y }, major };
});

/** Fine film grain, kept as a data URI so it costs nothing at runtime. */
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)'/%3E%3C/svg%3E\")";

/* Deterministic PRNG so the starfield is stable between renders. */
function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* ─── The AfterLife triangle mark ─────────────────────────────────────────── */
function LogoMark({
  className = '',
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg viewBox="0 0 100 100" className={className} style={style} aria-hidden="true">
      <defs>
        <linearGradient id="alm-left" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#93c5fd" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
        <linearGradient id="alm-right" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#c084fc" />
        </linearGradient>
      </defs>
      <path d="M50 6 L27 94 L6 94 Z" fill="url(#alm-left)" />
      <path d="M50 6 L94 94 L64 94 L50 52 Z" fill="url(#alm-right)" />
      <path d="M50 44 L61 90 L39 90 Z" fill="url(#alm-right)" opacity="0.45" />
    </svg>
  );
}

/* ─── Serving-cloche + QR mark for ScanMe (no exact lucide equivalent) ────── */
function ClocheIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 15a8 8 0 0 1 16 0" />
      <path d="M2.5 15h19" />
      <path d="M12 7V5.5" />
      <circle cx="12" cy="4.4" r="1.1" />
      <rect x="4" y="18" width="3" height="3" rx="0.5" />
      <rect x="9.5" y="18" width="3" height="3" rx="0.5" />
      <rect x="15" y="18" width="3" height="3" rx="0.5" />
    </svg>
  );
}

/* ─── Compact glowing orb used in the mobile hero ─────────────────────────── */
function MobileOrb() {
  const dots = [-72, -14, 46, 118, 196, 254];
  return (
    <div className="relative shrink-0" style={{ width: 178, height: 178 }}>
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <radialGradient id="orb-halo">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.5" />
            <stop offset="58%" stopColor="#4c1d95" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#04040c" stopOpacity="0" />
          </radialGradient>
          <filter id="orb-glow" x="-70%" y="-70%" width="240%" height="240%">
            <feGaussianBlur stdDeviation="2.8" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <circle cx="100" cy="100" r="100" fill="url(#orb-halo)" />

        <g fill="none" stroke="#a5b4fc">
          <circle cx="100" cy="100" r="86" strokeWidth="0.6" opacity="0.16" />
          <circle cx="100" cy="100" r="77" strokeWidth="0.6" opacity="0.11" />
        </g>

        {/* dashed ring + orbiting highlights */}
        <g
          className="animate-spin-slow"
          style={{ transformBox: 'view-box', transformOrigin: '100px 100px' }}
        >
          <circle
            cx="100"
            cy="100"
            r="95"
            fill="none"
            stroke="#a5b4fc"
            strokeWidth="0.7"
            strokeDasharray="2 9"
            opacity="0.38"
          />
          {dots.map((a) => {
            const rad = (a * Math.PI) / 180;
            return (
              <circle
                key={a}
                cx={100 + 95 * Math.cos(rad)}
                cy={100 + 95 * Math.sin(rad)}
                r="2.5"
                fill="#c4b5fd"
                filter="url(#orb-glow)"
              />
            );
          })}
        </g>

        <circle cx="100" cy="100" r="65" fill="#07071a" opacity="0.92" />
        <circle
          cx="100"
          cy="100"
          r="65"
          fill="none"
          stroke="#a5b4fc"
          strokeWidth="1.2"
          opacity="0.6"
          filter="url(#orb-glow)"
        />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <LogoMark className="h-[26px] w-[26px]" />
        <span className="mt-1.5 text-[11px] font-light tracking-[0.16em] text-white">
          AFTERLIFE
        </span>
        <span className="mt-1 max-w-[72px] text-center text-[6.5px] leading-[1.6] tracking-[0.18em] text-white/45">
          BUILDING WHAT&apos;S NEXT
        </span>
      </div>
    </div>
  );
}

/* ─── Icon per node (fills its parent, which is sized in canvas units) ────── */
function NodeIcon({ id, wFontSize }: { id: string; wFontSize: string }) {
  const cls = 'h-full w-full';
  switch (id) {
    case 'autonomic':
      return <Brain className={cls} strokeWidth={1.6} />;
    case 'workoaches':
      return (
        <span
          className="flex h-full w-full items-center justify-center font-bold leading-none"
          style={{ fontSize: wFontSize, letterSpacing: '-0.05em' }}
        >
          W
        </span>
      );
    case 'global':
      return <Handshake className={cls} strokeWidth={1.6} />;
    case 'future':
      return <Rocket className={cls} strokeWidth={1.6} />;
    case 'ar':
      return <Box className={cls} strokeWidth={1.6} />;
    case 'scanme':
      return <ClocheIcon className={cls} />;
    default:
      return null;
  }
}

/* ────────────────────────────────────────────────────────────────────────── */

const EcosystemHero: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [active, setActive] = useState<string | null>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const [aspect, setAspect] = useState(1440 / VB_H);

  /* Track the real aspect ratio of the full-bleed canvas. */
  useEffect(() => {
    const el = boxRef.current;
    if (!el || typeof ResizeObserver === 'undefined') return;

    const ro = new ResizeObserver((entries) => {
      const box = entries[0]?.contentRect;
      if (box && box.width > 0 && box.height > 0) {
        setAspect(box.width / box.height);
      }
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const vbW = Math.round(VB_H * aspect);
  const cx = vbW / 2;

  /* One canvas unit expressed as a container-query width unit, so HTML text and
     icons scale exactly like the SVG geometry. */
  const u = (n: number) => `${((n / vbW) * 100).toFixed(4)}cqw`;

  /* How far the side vertices sit from the centre: as wide as the canvas allows,
     clamped between the regular ratio and the stretch ceiling. */
  const spreadX = Math.max(
    HEX_RY * HEX_STRETCH_MIN,
    Math.min(HEX_RY * HEX_STRETCH_MAX, cx - NODE_R - CAPTION_GAP - CAPTION_RESERVE)
  );

  const nodes = useMemo<EcoNode[]>(
    () =>
      NODE_DEFS.map((d) => {
        const rad = (d.angle * Math.PI) / 180;
        /* sin/cos give the hexagon's unit offsets; normalising sin by 0.866 puts
           the four side vertices at exactly +/- spreadX. */
        return {
          ...d,
          x: cx + (Math.sin(rad) / HEX_STRETCH_MIN) * spreadX,
          y: CENTER_Y - Math.cos(rad) * HEX_RY,
        };
      }),
    [cx, spreadX]
  );

  const edges = useMemo(() => {
    const byId = (id: string) => nodes.find((n) => n.id === id) as EcoNode;
    const out: {
      key: string;
      a: string;
      b: string;
      color: string;
      seg: ReturnType<typeof trim>;
    }[] = [];

    nodes.forEach((n) => {
      out.push({
        key: `spoke-${n.id}`,
        a: 'core',
        b: n.id,
        color: n.color,
        seg: trim(cx, CENTER_Y, n.x, n.y, CENTER_R, NODE_R),
      });
    });

    [...RIM, ...CROSS].forEach(([a, b], i) => {
      const na = byId(a);
      const nb = byId(b);
      out.push({
        key: `link-${i}-${a}-${b}`,
        a,
        b,
        color: na.color,
        seg: trim(na.x, na.y, nb.x, nb.y, NODE_R, NODE_R),
      });
    });

    return out;
  }, [nodes, cx]);

  /* Starfield + faint background web, spread across the full canvas. */
  const { stars, bgPoints, bgLines } = useMemo(() => {
    const rnd = mulberry32(20260727);

    const stars = Array.from(
      { length: Math.round(Math.max(1, (vbW * VB_H) / 3000)) },
      () => ({
        x: rnd() * vbW,
        y: rnd() * VB_H,
        r: 0.35 + rnd() * 1.15,
        o: 0.12 + rnd() * 0.7,
        tw: rnd() > 0.72,
        delay: `${(rnd() * 4).toFixed(2)}s`,
      })
    );

    /* The lattice of small nodes the whole composition floats on. Density is what
       makes it read as a network rather than scattered dust. */
    const bgPoints = Array.from({ length: Math.round(vbW / 9) }, () => ({
      x: rnd() * vbW,
      y: rnd() * VB_H,
      r: 0.75 + rnd() * 1.15,
      o: 0.28 + rnd() * 0.4,
    }));

    const bgLines: { x1: number; y1: number; x2: number; y2: number; o: number }[] = [];
    /* Short reach on purpose: long links produce big empty triangles, whereas a
       tight radius reads as a fine mesh that stays behind the hexagon. */
    const REACH = 108;
    for (let i = 0; i < bgPoints.length; i++) {
      for (let j = i + 1; j < bgPoints.length; j++) {
        const d = Math.hypot(bgPoints[i].x - bgPoints[j].x, bgPoints[i].y - bgPoints[j].y);
        if (d < REACH) {
          bgLines.push({
            x1: bgPoints[i].x,
            y1: bgPoints[i].y,
            x2: bgPoints[j].x,
            y2: bgPoints[j].y,
            o: 0.17 * (1 - d / REACH),
          });
        }
      }
    }

    return { stars, bgPoints, bgLines };
  }, [vbW]);

  /*
   * Only the spoke running into the core lights up. Rim edges and cross
   * diagonals also touch the hovered node, but highlighting those made a single
   * hover look like it pointed at its neighbours too.
   */
  const isLit = (a: string, b: string) =>
    active !== null && a === 'core' && b === active;

  const pct = (v: number, total: number) => `${(v / total) * 100}%`;

  return (
    <section
      className={`relative w-full bg-[#04040c] md:h-screen md:overflow-hidden ${className}`}
    >
      {/* Ambient glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 55% 55% at 50% 50%, rgba(76,60,180,0.22) 0%, transparent 70%), radial-gradient(ellipse 35% 40% at 6% 90%, rgba(88,28,135,0.18) 0%, transparent 70%), radial-gradient(ellipse 35% 40% at 94% 10%, rgba(30,58,138,0.18) 0%, transparent 70%)',
        }}
      />

      {/* ─── Top navigation ─────────────────────────────────────────────── */}
      <nav className="relative z-30 flex items-center justify-between px-5 py-5 md:absolute md:inset-x-0 md:top-0 md:px-12 md:py-5">
        <a href="#" className="flex items-center gap-2.5">
          <LogoMark className="h-7 w-7 md:h-8 md:w-8" />
          <span className="text-lg font-light tracking-[0.28em] text-white md:text-xl">
            AFTERLIFE
          </span>
        </a>
        <ul className="hidden items-center gap-9 text-[11px] font-medium tracking-[0.16em] text-white/55 md:flex">
          {['HOME', 'SOLUTIONS', 'PARTNERSHIPS', 'ABOUT US', 'CONTACT'].map(
            (label, i) => (
              <li key={label}>
                <a
                  href="#"
                  className={`relative transition-colors hover:text-white ${
                    i === 0 ? 'text-white' : ''
                  }`}
                >
                  {label}
                  {i === 0 && (
                    <span className="absolute -bottom-2 left-0 h-[1.5px] w-full bg-indigo-400" />
                  )}
                </a>
              </li>
            )
          )}
        </ul>

        {/* Mobile menu trigger */}
        <button
          type="button"
          aria-label="Open menu"
          className="-mr-1 p-1 text-white/85 transition-colors hover:text-white md:hidden"
        >
          <Menu className="h-7 w-7" strokeWidth={1.8} />
        </button>
      </nav>

      {/* ─── Left progress rail ─────────────────────────────────────────── */}
      <div className="pointer-events-none absolute left-5 top-1/2 z-20 hidden -translate-y-1/2 flex-col items-center gap-3.5 lg:flex">
        {Array.from({ length: 7 }).map((_, i) => (
          <span
            key={i}
            className={
              i === 0
                ? 'h-[7px] w-[7px] rounded-full bg-indigo-400 shadow-[0_0_10px_3px_rgba(129,140,248,0.55)]'
                : 'h-[5px] w-[5px] rounded-full bg-white/25'
            }
          />
        ))}
      </div>

      {/* ─── Right vertical caption ─────────────────────────────────────── */}
      <div
        className="pointer-events-none absolute right-4 top-1/2 z-20 hidden select-none text-[9.5px] tracking-[0.32em] text-white/25 lg:block"
        style={{
          writingMode: 'vertical-rl',
          transform: 'translateY(-50%) rotate(180deg)',
        }}
      >
        SERIES 1 &nbsp;·&nbsp; CONNECTED ECOSYSTEM &nbsp;·&nbsp; 155 POSSIBILITIES
      </div>

      {/* ─── Full-bleed constellation (md and up) ───────────────────────── */}
      <div
        ref={boxRef}
        className="absolute inset-x-0 z-10 hidden md:block"
        style={{
          top: CHROME_TOP,
          bottom: CHROME_BOTTOM,
          containerType: 'inline-size',
        }}
      >
        {/* ---------- SVG layer ---------- */}
        <svg
          viewBox={`0 0 ${vbW} ${VB_H}`}
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          <defs>
            <radialGradient id="core-halo">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.45" />
              <stop offset="55%" stopColor="#4c1d95" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#04040c" stopOpacity="0" />
            </radialGradient>
            {/* Domed interior rather than a flat fill. */}
            <radialGradient id="core-inner" cx="42%" cy="34%" r="78%">
              <stop offset="0%" stopColor="#161335" stopOpacity="0.96" />
              <stop offset="55%" stopColor="#0a0820" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#04040e" stopOpacity="0.97" />
            </radialGradient>
            {NODE_DEFS.map((n) => (
              <radialGradient id={`halo-${n.id}`} key={n.id}>
                <stop offset="0%" stopColor={n.color} stopOpacity="0.30" />
                <stop offset="60%" stopColor={n.color} stopOpacity="0.07" />
                <stop offset="100%" stopColor={n.color} stopOpacity="0" />
              </radialGradient>
            ))}
            <filter id="soft-glow" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="3.4" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* faint background web */}
          <g>
            {bgLines.map((l, i) => (
              <line
                key={`bl-${i}`}
                x1={l.x1}
                y1={l.y1}
                x2={l.x2}
                y2={l.y2}
                stroke="#98a6ff"
                strokeWidth="0.55"
                opacity={l.o}
              />
            ))}
            {bgPoints.map((p, i) => (
              <circle key={`bp-${i}`} cx={p.x} cy={p.y} r={p.r} fill="#dbe4ff" opacity={p.o} />
            ))}
          </g>

          {/* starfield */}
          <g>
            {stars.map((s, i) => (
              <circle
                key={`s-${i}`}
                cx={s.x}
                cy={s.y}
                r={s.r}
                fill="#ffffff"
                opacity={s.o}
                className={s.tw ? 'animate-twinkle' : undefined}
                style={s.tw ? { animationDelay: s.delay } : undefined}
              />
            ))}
          </g>

          {/* horizontal axis, broken around the core */}
          <g stroke="#8b9bff" strokeWidth="0.4" opacity="0.12">
            <line x1={0} y1={CENTER_Y} x2={cx - CENTER_R - 44} y2={CENTER_Y} />
            <line x1={cx + CENTER_R + 44} y1={CENTER_Y} x2={vbW} y2={CENTER_Y} />
          </g>

          {/* core halo */}
          <circle
            cx={cx}
            cy={CENTER_Y}
            r={295}
            fill="url(#core-halo)"
            className="animate-pulse-glow"
          />

          {/* node halos */}
          {nodes.map((n) => (
            <circle
              key={`h-${n.id}`}
              cx={n.x}
              cy={n.y}
              r={145}
              fill={`url(#halo-${n.id})`}
              opacity={active === n.id ? 1 : 0.72}
              style={{ transition: 'opacity 300ms ease' }}
            />
          ))}

          {/* connection lines */}
          <g>
            {edges.map((e) => {
              const lit = isLit(e.a, e.b);
              return (
                <g key={e.key}>
                  <line
                    x1={e.seg.x1}
                    y1={e.seg.y1}
                    x2={e.seg.x2}
                    y2={e.seg.y2}
                    stroke={lit ? e.color : '#9aa7ff'}
                    strokeWidth={lit ? 1.25 : 0.9}
                    opacity={lit ? 0.9 : 0.56}
                    style={{ transition: 'all 300ms ease' }}
                  />
                  {[0.22, 0.5, 0.78].map((t) => (
                    <circle
                      key={t}
                      cx={lerp(e.seg.x1, e.seg.x2, t)}
                      cy={lerp(e.seg.y1, e.seg.y2, t)}
                      r={lit ? 2.5 : 1.95}
                      fill={lit ? e.color : '#e8ecff'}
                      opacity={lit ? 0.95 : 0.82}
                      style={{ transition: 'all 300ms ease' }}
                    />
                  ))}
                </g>
              );
            })}
          </g>

          {/* graduated bezel around the core */}
          <g transform={`translate(${cx} ${CENTER_Y})`} stroke="#a5b4fc">
            {CORE_TICKS.map((t, i) => (
              <line
                key={`tick-${i}`}
                x1={t.x1}
                y1={t.y1}
                x2={t.x2}
                y2={t.y2}
                strokeWidth={t.major ? 0.9 : 0.5}
                opacity={t.major ? 0.32 : 0.13}
              />
            ))}
          </g>

          {/* concentric rings around the core */}
          <g fill="none" stroke="#818cf8">
            <circle cx={cx} cy={CENTER_Y} r={CENTER_R + 13} strokeWidth="0.6" opacity="0.20" />
            <circle cx={cx} cy={CENTER_Y} r={CENTER_R + 28} strokeWidth="0.5" opacity="0.14" />
            <circle cx={cx} cy={CENTER_Y} r={CENTER_R + 46} strokeWidth="0.5" opacity="0.09" />
            <circle cx={cx} cy={CENTER_Y} r={CENTER_R + 66} strokeWidth="0.5" opacity="0.06" />
          </g>

          {/* rotating dashed rings */}
          <g
            className="animate-spin-slow"
            style={{ transformBox: 'view-box', transformOrigin: `${cx}px ${CENTER_Y}px` }}
          >
            <circle
              cx={cx}
              cy={CENTER_Y}
              r={CENTER_R + 20}
              fill="none"
              stroke="#a5b4fc"
              strokeWidth="0.7"
              strokeDasharray="2 10"
              opacity="0.4"
            />
          </g>
          <g
            className="animate-spin-reverse"
            style={{ transformBox: 'view-box', transformOrigin: `${cx}px ${CENTER_Y}px` }}
          >
            <circle
              cx={cx}
              cy={CENTER_Y}
              r={CENTER_R + 38}
              fill="none"
              stroke="#c4b5fd"
              strokeWidth="0.6"
              strokeDasharray="1 14"
              opacity="0.3"
            />
          </g>

          {/* orbiting marker riding the outer ring */}
          <g
            className="animate-orbit"
            style={{ transformBox: 'view-box', transformOrigin: `${cx}px ${CENTER_Y}px` }}
          >
            <circle
              cx={cx + CENTER_R + 28}
              cy={CENTER_Y}
              r="2.6"
              fill="#e0e7ff"
              filter="url(#soft-glow)"
              opacity="0.9"
            />
          </g>
          <g
            className="animate-orbit-slow"
            style={{ transformBox: 'view-box', transformOrigin: `${cx}px ${CENTER_Y}px` }}
          >
            <circle
              cx={cx - CENTER_R - 46}
              cy={CENTER_Y}
              r="1.8"
              fill="#c4b5fd"
              filter="url(#soft-glow)"
              opacity="0.7"
            />
          </g>

          {/* core disc */}
          <circle cx={cx} cy={CENTER_Y} r={CENTER_R} fill="url(#core-inner)" />
          <circle
            cx={cx}
            cy={CENTER_Y}
            r={CENTER_R}
            fill="none"
            stroke="#a5b4fc"
            strokeWidth="1.1"
            opacity="0.55"
            filter="url(#soft-glow)"
          />
          {/* light catching the top of the glass */}
          <path
            d={arcPath(cx, CENTER_Y, CENTER_R, -128, -52)}
            fill="none"
            stroke="#e0e7ff"
            strokeWidth="1.7"
            opacity="0.55"
            strokeLinecap="round"
            filter="url(#soft-glow)"
          />
          <path
            d={arcPath(cx, CENTER_Y, CENTER_R, 58, 122)}
            fill="none"
            stroke="#a78bfa"
            strokeWidth="1.3"
            opacity="0.3"
            strokeLinecap="round"
          />

          {/* node discs */}
          {nodes.map((n, i) => {
            const on = active === n.id;
            const idx = polar(n.x, n.y, NODE_DECOR_R, 218);
            return (
              <g key={`d-${n.id}`}>
                <circle cx={n.x} cy={n.y} r={NODE_R} fill="url(#core-inner)" />
                <circle
                  cx={n.x}
                  cy={n.y}
                  r={NODE_R}
                  fill="none"
                  stroke={n.color}
                  strokeWidth={on ? 1.5 : 1}
                  opacity={on ? 0.95 : 0.6}
                  filter="url(#soft-glow)"
                  style={{ transition: 'all 300ms ease' }}
                />
                <circle
                  cx={n.x}
                  cy={n.y}
                  r={NODE_R + 7}
                  fill="none"
                  stroke={n.color}
                  strokeWidth="0.5"
                  opacity={on ? 0.4 : 0.16}
                  style={{ transition: 'all 300ms ease' }}
                />

                {/* opposing arc segments, slowly rotating */}
                <g
                  className={on ? 'animate-orbit' : 'animate-orbit-slow'}
                  style={{ transformBox: 'view-box', transformOrigin: `${n.x}px ${n.y}px` }}
                >
                  <path
                    d={arcPath(n.x, n.y, NODE_DECOR_R, 200, 268)}
                    fill="none"
                    stroke={n.color}
                    strokeWidth={on ? 1.3 : 0.9}
                    strokeLinecap="round"
                    opacity={on ? 0.75 : 0.32}
                    style={{ transition: 'all 300ms ease' }}
                  />
                  <path
                    d={arcPath(n.x, n.y, NODE_DECOR_R, 20, 88)}
                    fill="none"
                    stroke={n.color}
                    strokeWidth={on ? 1.3 : 0.9}
                    strokeLinecap="round"
                    opacity={on ? 0.75 : 0.32}
                    style={{ transition: 'all 300ms ease' }}
                  />
                </g>

                {/* highlight arc on the node ring */}
                <path
                  d={arcPath(n.x, n.y, NODE_R, -122, -58)}
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  opacity={on ? 0.5 : 0.22}
                  style={{ transition: 'opacity 300ms ease' }}
                />

                {/* index numeral */}
                <text
                  x={idx.x}
                  y={idx.y}
                  fill={n.color}
                  fontSize="11"
                  letterSpacing="1.6"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  opacity={on ? 0.9 : 0.42}
                  style={{ fontFamily: 'inherit', transition: 'opacity 300ms ease' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </text>
              </g>
            );
          })}

          {/* framing brackets at the canvas corners */}
          <g stroke="#a5b4fc" strokeWidth="0.9" opacity="0.2" fill="none" strokeLinecap="round">
            <path d={`M 16 46 L 16 16 L 46 16`} />
            <path d={`M ${vbW - 46} 16 L ${vbW - 16} 16 L ${vbW - 16} 46`} />
            <path d={`M ${vbW - 16} ${VB_H - 46} L ${vbW - 16} ${VB_H - 16} L ${vbW - 46} ${VB_H - 16}`} />
            <path d={`M 46 ${VB_H - 16} L 16 ${VB_H - 16} L 16 ${VB_H - 46}`} />
          </g>
        </svg>

        {/* depth vignette */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 85% 80% at 50% 50%, transparent 58%, rgba(4,4,12,0.42) 100%)',
          }}
        />

        {/* film grain */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 mix-blend-overlay"
          style={{ backgroundImage: GRAIN, opacity: 0.045 }}
        />

        {/* ---------- Core copy ---------- */}
        <div
          className="absolute flex flex-col items-center"
          style={{
            left: pct(cx, vbW),
            top: pct(CENTER_Y, VB_H),
            transform: 'translate(-50%, -50%)',
          }}
        >
          <LogoMark style={{ width: u(47), height: u(47), marginBottom: u(9.5) }} />
          <span
            className="font-light tracking-[0.2em] text-white"
            style={{ fontSize: u(21) }}
          >
            AFTERLIFE
          </span>
          <span
            aria-hidden="true"
            className="block"
            style={{
              width: u(78),
              height: 1,
              marginTop: u(6),
              background:
                'linear-gradient(to right, transparent, rgba(199,210,254,0.55), transparent)',
            }}
          />
          <span
            className="tracking-[0.26em] text-white/45"
            style={{ fontSize: u(7), marginTop: u(5) }}
          >
            BUILDING WHAT&apos;S NEXT
          </span>
        </div>

        {/* ---------- Node contents ---------- */}
        {nodes.map((n) => (
          <div
            key={`n-${n.id}`}
            className="absolute flex cursor-pointer flex-col items-center text-center"
            style={{
              left: pct(n.x, vbW),
              top: pct(n.y, VB_H),
              width: u(200),
              transform: `translate(-50%, -50%) scale(${active === n.id ? 1.06 : 1})`,
              transition: 'transform 300ms ease',
            }}
            onMouseEnter={() => setActive(n.id)}
            onMouseLeave={() => setActive(null)}
          >
            <span
              className="flex items-center justify-center"
              style={{
                width: u(34),
                height: u(34),
                marginBottom: u(9),
                color: n.color,
              }}
            >
              <NodeIcon id={n.id} wFontSize={u(28)} />
            </span>
            <span
              className="font-medium tracking-[0.1em]"
              style={{ fontSize: u(15), color: n.color }}
            >
              {n.title}
            </span>
            <span
              className="tracking-[0.2em] text-white/45"
              style={{ fontSize: u(8.4), marginTop: u(3.5) }}
            >
              {n.subtitle}
            </span>
          </div>
        ))}

        {/* ---------- Outer captions ---------- */}
        {nodes.map((n) => {
          const pos: React.CSSProperties = { fontSize: u(10.2), lineHeight: 1.55 };
          if (n.side === 'right') {
            pos.left = pct(n.x + NODE_R + CAPTION_GAP, vbW);
            pos.top = pct(n.y, VB_H);
            pos.transform = 'translateY(-50%)';
            pos.textAlign = 'left';
          } else if (n.side === 'left') {
            pos.right = pct(vbW - (n.x - NODE_R - CAPTION_GAP), vbW);
            pos.top = pct(n.y, VB_H);
            pos.transform = 'translateY(-50%)';
            pos.textAlign = 'right';
          } else {
            pos.left = pct(n.x, vbW);
            pos.top = pct(n.y + NODE_R + 22, VB_H);
            pos.transform = 'translateX(-50%)';
            pos.textAlign = 'center';
          }
          return (
            <p
              key={`t-${n.id}`}
              className="pointer-events-none absolute select-none transition-colors duration-300"
              style={{
                ...pos,
                color: active === n.id ? n.color : 'rgba(255,255,255,0.52)',
              }}
            >
              {n.desc.map((line) => (
                <span key={line} className="block whitespace-nowrap">
                  {line}
                </span>
              ))}
            </p>
          );
        })}
      </div>

      {/* ─── Scroll cue ─────────────────────────────────────────────────── */}
      <div className="absolute inset-x-0 bottom-5 z-20 hidden flex-col items-center gap-1 md:flex">
        <span className="text-[10px] tracking-[0.3em] text-white/40">
          SCROLL TO EXPLORE
        </span>
        <ChevronDown className="h-4 w-4 animate-bounce text-white/40" />
      </div>

      {/* ─── Mobile layout ──────────────────────────────────────────────── */}
      <div className="relative z-10 pb-10 md:hidden">
        {/* Hero: copy on the left, orb bleeding off the right edge */}
        <div className="flex items-center gap-2 pl-5 pr-0 pt-3">
          <div className="min-w-0 flex-1">
            <h1 className="text-[27px] font-light leading-none tracking-[0.16em] text-white">
              AFTERLIFE
            </h1>
            <p className="mt-2.5 text-[10.5px] tracking-[0.2em] text-white/55">
              BUILDING WHAT&apos;S NEXT
            </p>
            <span className="mt-4 block h-[2px] w-9 rounded-full bg-indigo-400/80" />
            <p className="mt-4 text-[12.5px] leading-relaxed text-white/60">
              AI-powered solutions and ventures shaping a smarter, connected
              tomorrow.
            </p>
            <a
              href="#mobile-ecosystem"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-indigo-400/45 bg-indigo-500/10 px-4 py-2.5 text-[10px] font-semibold tracking-[0.14em] text-white"
            >
              EXPLORE ECOSYSTEM
              <ArrowRight className="h-3.5 w-3.5 text-indigo-300" />
            </a>
          </div>
          <div className="-mr-5 shrink-0">
            <MobileOrb />
          </div>
        </div>

        {/* Section divider */}
        <div id="mobile-ecosystem" className="mt-11 px-5">
          <div className="flex items-center gap-3">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-white/20" />
            <span className="text-[11px] tracking-[0.3em] text-white/75">
              OUR ECOSYSTEM
            </span>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-white/20" />
          </div>
          <span className="mx-auto mt-2.5 block h-[3px] w-[3px] rounded-full bg-indigo-400" />
        </div>

        {/* Timeline list */}
        <ol className="relative mt-6 space-y-3 pl-9 pr-4">
          {/* the rail the dots sit on */}
          <span
            aria-hidden="true"
            className="absolute bottom-4 top-4 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent"
            style={{ left: 14 }}
          />

          {MOBILE_NODES.map((n) => (
            <li key={n.id} className="relative">
              <span
                aria-hidden="true"
                className="absolute top-1/2 h-[9px] w-[9px] -translate-y-1/2 rounded-full"
                style={{
                  left: -26.5,
                  background: n.color,
                  boxShadow: `0 0 9px 2px ${n.color}59`,
                }}
              />
              <a
                href="#"
                className="flex items-center gap-3.5 rounded-2xl border p-3.5 transition-colors active:bg-white/[0.05]"
                style={{
                  borderColor: `${n.color}33`,
                  background: 'rgba(255,255,255,0.022)',
                }}
              >
                <span
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border"
                  style={{
                    borderColor: `${n.color}59`,
                    background: `${n.color}12`,
                    color: n.color,
                    boxShadow: `0 0 18px ${n.color}24, inset 0 0 14px ${n.color}14`,
                  }}
                >
                  <MobileIcon id={n.id} color={n.color} />
                </span>

                <span className="min-w-0 flex-1">
                  <span
                    className="block text-[15px] font-semibold tracking-[0.04em]"
                    style={{ color: n.color }}
                  >
                    {n.title}
                  </span>
                  <span className="mt-1 block text-[9.5px] font-medium tracking-[0.16em] text-white/55">
                    {n.subtitle}
                  </span>
                  <span className="mt-2 block text-[11.5px] leading-snug text-white/45">
                    {n.blurb}
                  </span>
                </span>

                <ChevronRight className="h-4 w-4 shrink-0 text-white/30" />
              </a>
            </li>
          ))}
        </ol>

        {/* Scroll cue */}
        <div className="mt-9 flex flex-col items-center gap-1">
          <span className="text-[9.5px] tracking-[0.3em] text-white/40">
            SCROLL TO EXPLORE
          </span>
          <ChevronDown className="h-4 w-4 animate-bounce text-white/40" />
        </div>
      </div>
    </section>
  );
};

/* Mobile icons use plain px sizing (no container queries needed). */
function MobileIcon({ id, color }: { id: string; color: string }) {
  const common = { size: 26, strokeWidth: 1.6, color } as const;
  switch (id) {
    case 'autonomic':
      return <Brain {...common} />;
    case 'workoaches':
      return <span className="text-[26px] font-bold leading-none">W</span>;
    case 'global':
      return <Handshake {...common} />;
    case 'future':
      return <Rocket {...common} />;
    case 'ar':
      return <Box {...common} />;
    case 'scanme':
      return <ClocheIcon className="h-[26px] w-[26px]" />;
    default:
      return null;
  }
}

export default EcosystemHero;
