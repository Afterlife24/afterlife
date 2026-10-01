import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Link } from 'react-router-dom';
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from 'motion/react';
import {
  ArrowRight,
  Brain,
  Zap,
  BarChart3,
  Clock,
  DollarSign,
  Users,
  FileText,
  TrendingUp,
  Cpu,
  Database,
  Check,
  MessageCircle,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

import HeroImage from '../components/HeroImage';

/* ─── Data ─────────────────────────────────────────────────────────────────── */
const TYPEWRITER_WORDS = [
  'automate your customer support',
  'eliminate manual data entry',
  'give your sales team superpowers',
  'turn data into real decisions',
  'scale without hiring',
  'build AI into your product',
];

interface ProblemItem {
  icon: LucideIcon;
  industry: string;
  label: string;
  solution: string;
  color: string;
}

const PROBLEMS: ProblemItem[] = [
  {
    icon: Clock,
    industry: 'Operations',
    label: 'Teams drowning in repetitive tasks',
    solution:
      'AI agents handle rule-based work continuously, freeing your team for judgment-heavy decisions.',
    color: '#67e8f9',
  },
  {
    icon: DollarSign,
    industry: 'Finance',
    label: 'Manual data entry eating margins',
    solution:
      'Intelligent document processing reads, validates, and routes data — no human in the loop.',
    color: '#34d399',
  },
  {
    icon: Users,
    industry: 'Sales',
    label: "Reps spending 60% of time on admin",
    solution:
      'AI researches prospects, drafts follow-ups, and keeps CRM updated automatically.',
    color: '#a78bfa',
  },
  {
    icon: BarChart3,
    industry: 'Management',
    label: "No clear view of what's happening",
    solution:
      'Real-time intelligence dashboards that surface anomalies and decisions — not just numbers.',
    color: '#fb923c',
  },
  {
    icon: FileText,
    industry: 'Marketing',
    label: 'Content creation is slow and expensive',
    solution:
      'Brand-trained AI pipelines produce, review, and schedule content at scale.',
    color: '#f472b6',
  },
  {
    icon: TrendingUp,
    industry: 'Customer Success',
    label: "Support team can't scale",
    solution:
      'Conversational AI resolves 70%+ of queries without human involvement, 24/7.',
    color: '#60a5fa',
  },
];

interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  points: string[];
  color: string;
}

const SERVICES: ServiceItem[] = [
  {
    icon: Brain,
    title: 'AI Strategy',
    description:
      'We audit your operations and map exactly where AI creates measurable value. You leave with a concrete roadmap, not a deck.',
    points: ['Process audit', 'ROI mapping', 'Vendor-neutral advice'],
    color: '#a78bfa',
  },
  {
    icon: Zap,
    title: 'Workflow Automation',
    description:
      'End-to-end automation using agents, integrations, and custom logic tailored to your existing systems.',
    points: ['Agent design', 'System integration', 'Monitoring & alerts'],
    color: '#67e8f9',
  },
  {
    icon: Cpu,
    title: 'Custom AI Solutions',
    description:
      'Bespoke AI models and applications built on your data, for your domain — not off-the-shelf tools rebranded.',
    points: ['Fine-tuning', 'RAG systems', 'Embedded AI products'],
    color: '#34d399',
  },
  {
    icon: Database,
    title: 'Data Intelligence',
    description:
      'Transform raw business data into clear, actionable intelligence with AI-powered pipelines and analytics.',
    points: ['Data pipelines', 'Predictive analytics', 'Executive dashboards'],
    color: '#fb923c',
  },
];

const PROCESS = [
  {
    number: '01',
    title: 'Understand',
    description:
      "We spend time inside your business — mapping workflows, understanding pain points, and quantifying where AI creates real, measurable value.",
    color: '#a78bfa',
  },
  {
    number: '02',
    title: 'Design',
    description:
      "We architect the solution: which models, which integrations, which interfaces. No black boxes — you know exactly what we're building.",
    color: '#67e8f9',
  },
  {
    number: '03',
    title: 'Ship',
    description:
      'We build, test, and deploy. Then we iterate until the numbers move. You stay in control at every step.',
    color: '#34d399',
  },
];

const STATS = [
  { value: 9, suffix: '+', label: 'Projects Delivered', color: '#60a5fa' },
  { value: 100, suffix: '%', label: 'Client Satisfaction', color: '#a78bfa' },
  { value: 5, suffix: '+', label: 'Industries Served', color: '#34d399' },
  { value: 60, suffix: '%+', label: 'Avg. Time Saved', color: '#fb923c' },
];

/* ─── useInView ─────────────────────────────────────────────────────────────── */
function useInView(threshold = 0.18) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ob = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold }
    );
    ob.observe(el);
    return () => ob.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ─── useTypewriter ─────────────────────────────────────────────────────────── */
function useTypewriter(
  words: string[],
  typingMs = 70,
  deleteMs = 36,
  pauseMs = 2600
) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[idx];
    if (!deleting) {
      if (text.length < word.length) {
        const t = setTimeout(
          () => setText(word.slice(0, text.length + 1)),
          typingMs
        );
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setDeleting(true), pauseMs);
        return () => clearTimeout(t);
      }
    } else {
      if (text.length > 0) {
        const t = setTimeout(() => setText((s) => s.slice(0, -1)), deleteMs);
        return () => clearTimeout(t);
      } else {
        setDeleting(false);
        setIdx((i) => (i + 1) % words.length);
      }
    }
  }, [text, deleting, idx, words, typingMs, deleteMs, pauseMs]);

  return text;
}

/* ─── AnimatedCounter ───────────────────────────────────────────────────────── */
function AnimatedCounter({
  end,
  suffix = '',
  duration = 1800,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const { ref, visible } = useInView(0.5);

  useEffect(() => {
    if (!visible) return;
    const startTime = performance.now();
    let frame: number;
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.round(eased * end));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [visible, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ─── MagneticButton ────────────────────────────────────────────────────────── */
function MagneticButton({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 280, damping: 28 });
  const sy = useSpring(y, { stiffness: 280, damping: 28 });

  const move = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      x.set((e.clientX - rect.left - rect.width / 2) * 0.32);
      y.set((e.clientY - rect.top - rect.height / 2) * 0.32);
    },
    [x, y]
  );
  const reset = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <motion.div
      style={{ x: sx, y: sy }}
      onMouseMove={move}
      onMouseLeave={reset}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── ServiceCard (tilt) ────────────────────────────────────────────────────── */
const TILT_MAX = 9;
const TILT_CFG = { stiffness: 300, damping: 28 } as const;
const GLOW_CFG = { stiffness: 180, damping: 22 } as const;

function ServiceCard({
  item,
  dimmed,
  onHoverStart,
  onHoverEnd,
}: {
  item: ServiceItem;
  dimmed: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}) {
  const Icon = item.icon;
  const cardRef = useRef<HTMLDivElement>(null);
  const normX = useMotionValue(0.5);
  const normY = useMotionValue(0.5);
  const rawRX = useTransform(normY, [0, 1], [TILT_MAX, -TILT_MAX]);
  const rawRY = useTransform(normX, [0, 1], [-TILT_MAX, TILT_MAX]);
  const rotateX = useSpring(rawRX, TILT_CFG);
  const rotateY = useSpring(rawRY, TILT_CFG);
  const glowOp = useSpring(0, GLOW_CFG);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    normX.set((e.clientX - r.left) / r.width);
    normY.set((e.clientY - r.top) / r.height);
  };
  const onMouseEnter = () => { glowOp.set(1); onHoverStart(); };
  const onMouseLeave = () => {
    normX.set(0.5); normY.set(0.5); glowOp.set(0); onHoverEnd();
  };

  return (
    <motion.div
      ref={cardRef}
      animate={{ scale: dimmed ? 0.96 : 1, opacity: dimmed ? 0.5 : 1 }}
      transition={{ duration: 0.18 }}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border p-6 border-gray-700/50 bg-gray-800/60 hover:border-gray-600 transition-[border-color] duration-300 cursor-default"
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{ background: `radial-gradient(ellipse at 20% 20%, ${item.color}16, transparent 65%)` }} />
      <motion.div className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{ opacity: glowOp, background: `radial-gradient(ellipse at 20% 20%, ${item.color}30, transparent 65%)` }} />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[55%] -translate-x-full -skew-x-12 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent transition-transform duration-700 group-hover:translate-x-[280%]" />

      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl"
        style={{ background: `${item.color}18`, boxShadow: `inset 0 0 0 1px ${item.color}35` }}>
        <Icon className="h-6 w-6" strokeWidth={1.7} style={{ color: item.color }} />
      </div>

      <div className="relative z-10 flex flex-col gap-2">
        <h3 className="text-lg font-semibold tracking-tight text-gray-100">{item.title}</h3>
        <p className="text-sm leading-relaxed text-gray-400">{item.description}</p>
      </div>

      <ul className="relative z-10 mt-auto space-y-1.5">
        {item.points.map((p) => (
          <li key={p} className="flex items-center gap-2 text-xs text-gray-500">
            <Check className="h-3.5 w-3.5 shrink-0" style={{ color: item.color }} strokeWidth={2.5} />
            {p}
          </li>
        ))}
      </ul>

      <div className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full transition-all duration-500 group-hover:w-full"
        style={{ background: `linear-gradient(to right, ${item.color}80, transparent)` }} />
    </motion.div>
  );
}

/* ─── ProblemCard (expand on click) ─────────────────────────────────────────── */
function ProblemCard({
  item,
  active,
  onToggle,
}: {
  item: ProblemItem;
  active: boolean;
  onToggle: () => void;
}) {
  const Icon = item.icon;
  return (
    <motion.div
      layout
      onClick={onToggle}
      className="cursor-pointer rounded-2xl border p-5 transition-colors duration-300 select-none"
      style={{
        borderColor: active ? `${item.color}55` : `${item.color}22`,
        background: active
          ? `linear-gradient(135deg, ${item.color}0d, transparent)`
          : 'rgba(255,255,255,0.022)',
      }}
      whileHover={{ y: active ? 0 : -2 }}
      transition={{ layout: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } }}
    >
      <div className="flex items-start gap-3">
        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
          style={{ background: `${item.color}16`, boxShadow: `inset 0 0 0 1px ${item.color}30` }}>
          <Icon style={{ color: item.color, width: 17, height: 17 }} strokeWidth={1.7} />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-[10px] font-semibold tracking-[0.16em] uppercase"
            style={{ color: `${item.color}bb` }}>
            {item.industry}
          </p>
          <p className="mt-0.5 text-sm font-medium leading-snug text-gray-200">{item.label}</p>
        </div>
        <span className="mt-1 shrink-0 text-gray-600 transition-transform duration-300"
          style={{ transform: active ? 'rotate(45deg)' : 'none' }}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
            <path d="M6 0v12M0 6h12" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </svg>
        </span>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: 'auto', marginTop: 14 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="rounded-xl p-3.5" style={{ background: `${item.color}10` }}>
              <p className="text-[10px] font-bold tracking-[0.14em] uppercase"
                style={{ color: item.color }}>
                AI fixes this:
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-gray-300">{item.solution}</p>
              <a
                href="https://wa.me/33766720023"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-xs font-semibold hover:underline"
                style={{ color: item.color }}
                onClick={(e) => e.stopPropagation()}
              >
                Let&apos;s solve this <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─── Main Page ─────────────────────────────────────────────────────────────── */
const HomePage: React.FC = () => {
  const [cursorPos, setCursorPos] = useState({ x: -1000, y: -1000 });
  const [activeService, setActiveService] = useState<number | null>(null);
  const [activeProblem, setActiveProblem] = useState<number | null>(null);
  const [heroVisible, setHeroVisible] = useState(false);

  const typeText = useTypewriter(TYPEWRITER_WORDS);
  const problemsInView = useInView(0.1);
  const processInView = useInView(0.15);
  const servicesInView = useInView(0.1);
  const statsInView = useInView(0.2);

  /* Hero entrance */
  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 120);
    return () => clearTimeout(t);
  }, []);

  /* Cursor glow */
  useEffect(() => {
    const handler = (e: MouseEvent) =>
      setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handler, { passive: true });
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  return (
    <div className="flex flex-col w-full bg-gray-900 text-gray-100">
      {/* Cursor spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `radial-gradient(600px circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(99,102,241,0.07), transparent 60%)`,
        }}
      />

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(76,60,180,0.18) 0%, transparent 70%)' }} />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-28 md:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            {/* Copy */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: heroVisible ? 1 : 0, y: heroVisible ? 0 : 28 }}
              transition={{ duration: 0.75, ease: [0.4, 0, 0.2, 1] }}
              className="flex flex-col gap-6"
            >
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.2em] text-indigo-300 uppercase">
                AI Consultancy
              </span>

              <h1 className="text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
                We solve real{' '}
                <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  business problems
                </span>{' '}
                with AI
              </h1>

              <div className="flex flex-wrap items-center gap-2 text-lg text-gray-400 min-h-[1.8rem]">
                <span>Help you</span>
                <span className="text-indigo-300 font-medium">
                  {typeText}
                  <span className="animate-pulse text-indigo-400">|</span>
                </span>
              </div>

              <p className="max-w-lg text-base leading-relaxed text-gray-400">
                We work inside your business, map where AI creates measurable
                value, and build the solution. No generic tools, no consultancy
                decks — just results.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <MagneticButton>
                  <a
                    href="https://wa.me/33766720023"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-900/40 transition-colors hover:bg-indigo-500"
                  >
                    Book a free call
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </MagneticButton>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-400 transition-colors hover:text-white"
                >
                  See our work
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>

            {/* Robot image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: heroVisible ? 1 : 0, scale: heroVisible ? 1 : 0.9 }}
              transition={{ duration: 0.95, delay: 0.25, ease: [0.4, 0, 0.2, 1] }}
              className="hidden lg:flex items-center justify-center"
            >
              <HeroImage />
            </motion.div>
          </div>
        </div>

      </section>

      {/* ─── PROBLEMS ─────────────────────────────────────────────────────── */}
      <section ref={problemsInView.ref} className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: problemsInView.visible ? 1 : 0, y: problemsInView.visible ? 0 : 20 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <p className="mb-3 text-xs font-semibold tracking-[0.22em] uppercase text-indigo-400">
              Sound familiar?
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Where does your business lose value?
            </h2>
            <p className="mt-3 text-gray-400 max-w-lg mx-auto text-sm">
              Tap a problem to see how we&apos;d solve it with AI.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PROBLEMS.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: problemsInView.visible ? 1 : 0, y: problemsInView.visible ? 0 : 16 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <ProblemCard
                  item={item}
                  active={activeProblem === i}
                  onToggle={() => setActiveProblem(activeProblem === i ? null : i)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ──────────────────────────────────────────────────────── */}
      <section ref={processInView.ref} className="py-24 px-6 md:px-12 border-y border-gray-800 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: processInView.visible ? 1 : 0, y: processInView.visible ? 0 : 20 }}
            transition={{ duration: 0.6 }}
            className="mb-20 text-center"
          >
            <p className="mb-3 text-xs font-semibold tracking-[0.22em] uppercase text-indigo-400">How it works</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">No fluff. Just the process.</h2>
          </motion.div>

          <div className="relative grid grid-cols-1 gap-6 md:grid-cols-3">
            {PROCESS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: processInView.visible ? 1 : 0, y: processInView.visible ? 0 : 32 }}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.15 }}
                className="group relative overflow-hidden rounded-3xl border border-gray-700/40 bg-gray-800/40 p-8 hover:border-gray-600/60 transition-all duration-300"
              >
                {/* Giant faded number behind the content */}
                <span
                  className="pointer-events-none absolute -right-4 -top-5 font-black leading-none select-none"
                  style={{
                    fontSize: '9rem',
                    color: step.color,
                    opacity: 0.07,
                  }}
                >
                  {step.number}
                </span>

                {/* Top: colored icon badge */}
                <div
                  className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl"
                  style={{
                    background: `${step.color}18`,
                    boxShadow: `inset 0 0 0 1px ${step.color}40`,
                  }}
                >
                  {i === 0 && <Brain style={{ color: step.color, width: 26, height: 26 }} strokeWidth={1.6} />}
                  {i === 1 && <Cpu style={{ color: step.color, width: 26, height: 26 }} strokeWidth={1.6} />}
                  {i === 2 && <Zap style={{ color: step.color, width: 26, height: 26 }} strokeWidth={1.6} />}
                </div>

                {/* Step number pill */}
                <span
                  className="mb-4 inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold tracking-[0.18em]"
                  style={{
                    background: `${step.color}14`,
                    color: step.color,
                    border: `1px solid ${step.color}35`,
                  }}
                >
                  STEP {step.number}
                </span>

                <h3 className="mb-3 text-2xl font-bold text-white">{step.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">{step.description}</p>

                {/* Bottom accent line that grows on hover */}
                <div
                  className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 rounded-full transition-transform duration-500 group-hover:scale-x-100"
                  style={{
                    background: `linear-gradient(to right, ${step.color}90, transparent)`,
                  }}
                />

                {/* Arrow between steps — only on desktop, between card 1→2 and 2→3 */}
                {i < PROCESS.length - 1 && (
                  <div className="pointer-events-none absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 md:flex items-center">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path d="M4 16h20M18 10l6 6-6 6" stroke={step.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─────────────────────────────────────────────────────── */}
      <section ref={servicesInView.ref} className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: servicesInView.visible ? 1 : 0, y: servicesInView.visible ? 0 : 20 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="mb-3 text-xs font-semibold tracking-[0.22em] uppercase text-indigo-400">What we build</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Our services</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {SERVICES.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: servicesInView.visible ? 1 : 0, y: servicesInView.visible ? 0 : 20 }}
                transition={{ duration: 0.5, delay: i * 0.09 }}
              >
                <ServiceCard
                  item={item}
                  dimmed={activeService !== null && activeService !== i}
                  onHoverStart={() => setActiveService(i)}
                  onHoverEnd={() => setActiveService(null)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATS ────────────────────────────────────────────────────────── */}
      <section ref={statsInView.ref} className="py-16 px-6 md:px-12 border-y border-gray-800 bg-gray-800/20">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: statsInView.visible ? 1 : 0, y: statsInView.visible ? 0 : 16 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative flex flex-col items-center gap-1 rounded-2xl border border-gray-700/50 bg-gray-800/50 p-6 text-center overflow-hidden"
            >
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-2xl"
                style={{ background: `radial-gradient(ellipse at 50% 0%, ${s.color}18, transparent 70%)` }} />
              <span className="relative z-10 text-3xl md:text-4xl font-bold" style={{ color: s.color }}>
                <AnimatedCounter end={s.value} suffix={s.suffix} />
              </span>
              <span className="relative z-10 text-sm text-gray-400">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-28 px-6 md:px-12">
        <div aria-hidden="true" className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 65% 65% at 50% 50%, rgba(99,102,241,0.14) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="mb-4 text-xs font-semibold tracking-[0.22em] uppercase text-indigo-400">Ready to start?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-5">
            Tell us the problem.{' '}
            <span className="text-gray-400">We&apos;ll handle the AI.</span>
          </h2>
          <p className="mb-8 text-gray-400 max-w-lg mx-auto text-sm leading-relaxed">
            Book a free 30-minute call. We&apos;ll map one real problem in your
            business and sketch how AI would solve it — no pitch, just substance.
          </p>
          <MagneticButton className="inline-block">
            <a
              href="https://wa.me/33766720023"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 text-sm font-bold text-gray-900 shadow-xl shadow-indigo-900/30 transition-all hover:bg-gray-100"
            >
              <MessageCircle className="h-5 w-5 text-green-500" />
              Book a free call on WhatsApp
            </a>
          </MagneticButton>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
