import React, { useRef, useState } from 'react';
import { ExternalLink, Globe, Smartphone, QrCode, Users, Utensils, Car, Heart, Building2, Cpu, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import type { LucideIcon } from 'lucide-react';

// ─── Constants ──────────────────────────────────────────────────────────────────
const TILT_MAX = 9;
const TILT_SPRING = { stiffness: 300, damping: 28 } as const;
const GLOW_SPRING = { stiffness: 180, damping: 22 } as const;

// ─── Types ───────────────────────────────────────────────────────────────────────
interface PortfolioItem {
  icon: LucideIcon;
  name: string;
  description: string;
  color: string;
  url?: string;
  technologies: string[];
  status?: 'live' | 'ongoing';
}

interface PortfolioCategory {
  title: string;
  eyebrow: string;
  items: PortfolioItem[];
}

// ─── Stat Card ───────────────────────────────────────────────────────────────────
interface StatProps {
  value: string;
  label: string;
  color: string;
}

function StatCard({ value, label, color }: StatProps) {
  return (
    <div className="relative flex flex-col items-center gap-1 p-6 rounded-2xl border border-gray-700/50 bg-gray-800/50 overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${color}20, transparent 70%)`,
        }}
      />
      <p className="relative z-10 text-3xl md:text-4xl font-bold" style={{ color }}>
        {value}
      </p>
      <p className="relative z-10 text-sm text-gray-400">{label}</p>
    </div>
  );
}

// ─── Portfolio Card ──────────────────────────────────────────────────────────────
interface CardProps {
  item: PortfolioItem;
  dimmed: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

function PortfolioCard({ item, dimmed, onHoverStart, onHoverEnd }: CardProps) {
  const Icon = item.icon;
  const cardRef = useRef<HTMLDivElement>(null);

  const normX = useMotionValue(0.5);
  const normY = useMotionValue(0.5);

  const rawRotateX = useTransform(normY, [0, 1], [TILT_MAX, -TILT_MAX]);
  const rawRotateY = useTransform(normX, [0, 1], [-TILT_MAX, TILT_MAX]);

  const rotateX = useSpring(rawRotateX, TILT_SPRING);
  const rotateY = useSpring(rawRotateY, TILT_SPRING);
  const glowOpacity = useSpring(0, GLOW_SPRING);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    normX.set((e.clientX - rect.left) / rect.width);
    normY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseEnter = () => {
    glowOpacity.set(1);
    onHoverStart();
  };

  const handleMouseLeave = () => {
    normX.set(0.5);
    normY.set(0.5);
    glowOpacity.set(0);
    onHoverEnd();
  };

  return (
    <motion.div
      ref={cardRef}
      animate={{
        scale: dimmed ? 0.96 : 1,
        opacity: dimmed ? 0.5 : 1,
      }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 900,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      className="group relative flex flex-col gap-5 overflow-hidden rounded-2xl border p-6 border-gray-700/50 bg-gray-800/60 transition-[border-color] duration-300 hover:border-gray-600"
    >
      {/* Static accent tint */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          background: `radial-gradient(ellipse at 20% 20%, ${item.color}18, transparent 65%)`,
        }}
      />

      {/* Hover glow layer */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          opacity: glowOpacity,
          background: `radial-gradient(ellipse at 20% 20%, ${item.color}35, transparent 65%)`,
        }}
      />

      {/* Shimmer sweep */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-[55%] -translate-x-full -skew-x-12 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[280%]"
      />

      {/* Icon badge + status */}
      <div className="relative z-10 flex items-center justify-between">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-xl"
          style={{
            background: `${item.color}20`,
            boxShadow: `inset 0 0 0 1px ${item.color}40`,
          }}
        >
          <Icon size={22} strokeWidth={1.9} style={{ color: item.color }} />
        </div>
        {item.status === 'ongoing' && (
          <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-yellow-500/15 text-yellow-400 border border-yellow-500/30">
            In Progress
          </span>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-2">
        <h3 className="font-semibold text-base text-gray-100 tracking-tight">
          {item.name}
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed">
          {item.description}
        </p>
      </div>

      {/* Tech tags */}
      <div className="relative z-10 flex flex-wrap gap-2 mt-auto pt-2">
        {item.technologies.map((tech, i) => (
          <span
            key={i}
            className="px-2.5 py-1 text-xs font-medium rounded-full"
            style={{
              background: `${item.color}18`,
              color: item.color,
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* View link */}
      {item.url && (
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 inline-flex items-center gap-1.5 text-base font-semibold mt-2 px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105"
          style={{
            color: item.color,
            background: `${item.color}15`,
            border: `1px solid ${item.color}40`,
          }}
        >
          View Project <ExternalLink className="h-3.5 w-3.5" />
        </a>
      )}

      {/* Accent bottom line */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full transition-all duration-500 group-hover:w-full"
        style={{
          background: `linear-gradient(to right, ${item.color}90, transparent)`,
        }}
      />
    </motion.div>
  );
}

// ─── Portfolio Page ──────────────────────────────────────────────────────────────
const PortfolioPage: React.FC = () => {
  const [hoveredName, setHoveredName] = useState<string | null>(null);

  const categories: PortfolioCategory[] = [
    {
      title: "AI Automations",
      eyebrow: "AI & Automation",
      items: [
        {
          icon: Cpu,
          name: "Autonomiq",
          description: "Corporate website for Autonomiq, a UAE-based automation tech company. Professional design reflecting innovation and enterprise solutions.",
          color: "#818cf8",
          url: "https://autonomiq.ae/",
          technologies: ["React", "Modern UI", "Performance"],
        },
      ],
    },
    {
      title: "Web Applications",
      eyebrow: "Web Development",
      items: [
        {
          icon: Utensils,
          name: "Taj Mahal",
          description: "Restaurant website with menu presentation, online ordering integration, and a vibrant brand identity.",
          color: "#e879f9",
          url: "https://www.tajmahal-tajmahal.afterlife.org.in/",
          technologies: ["React", "Tailwind CSS", "Vite"],
        },
        {
          icon: Utensils,
          name: "Royal Bangla",
          description: "Full restaurant website with online presence, menu showcase, and reservation system for a popular Indian restaurant.",
          color: "#f472b6",
          url: "https://www.royalbangla-royalbangla.afterlife.org.in/",
          technologies: ["React", "Tailwind CSS", "Vite"],
        },
        {
          icon: Globe,
          name: "GNI App",
          description: "Modern web application with clean UI and optimized user experience for the GNI platform.",
          color: "#60a5fa",
          url: "https://www.gniapp.com/",
          technologies: ["React", "Web App", "UI/UX"],
        },
        {
          icon: Smartphone,
          name: "SmartphoneCity",
          description: "Website for a smartphone retail business with product showcase and customer engagement features.",
          color: "#38bdf8",
          url: "https://www.smartphonecity.afterlife.org.in/",
          technologies: ["React", "E-commerce", "Responsive"],
        },
        {
          icon: Utensils,
          name: "Route 66",
          description: "Restaurant website with modern design, showcasing menus, ambiance, and building brand presence online.",
          color: "#a78bfa",
          url: "https://www.route66-route66.afterlife.org.in/",
          technologies: ["React", "Tailwind CSS", "Animations"],
        },
        {
          icon: Globe,
          name: "The Way Cardiff",
          description: "Website for The Way Cardiff, a UK-based venue and community space. Designed to engage visitors and showcase events.",
          color: "#fb923c",
          url: "https://thewaycardiff.co.uk/",
          technologies: ["Web Design", "SEO", "Responsive"],
        },
      ],
    },
    {
      title: "ScanMe",
      eyebrow: "Digital Menu Solutions",
      items: [
        {
          icon: QrCode,
          name: "ScanMe - Royal Bangla",
          description: "QR-based digital menu and ordering system for Royal Bangla restaurant. Contactless ordering with real-time analytics.",
          color: "#f59e0b",
          url: "https://www.royalbangla-scanme.afterlife.org.in",
          technologies: ["React", "Node.js", "QR Integration"],
        },
        {
          icon: QrCode,
          name: "ScanMe - Taj Mahal",
          description: "Digital menu solution for Taj Mahal restaurant. Instant QR access, multi-language support, and order tracking.",
          color: "#fbbf24",
          url: "https://www.tajmahal-scanme.afterlife.org.in/",
          technologies: ["React", "Node.js", "QR Integration"],
        },
      ],
    },
    {
      title: "Healthcare",
      eyebrow: "Health & Wellness",
      items: [
        {
          icon: Heart,
          name: "Rehabb Care",
          description: "Healthcare platform connecting patients with rehabilitation services. Accessible, trustworthy design with booking and information systems.",
          color: "#34d399",
          url: "https://rehabb.care/",
          technologies: ["React", "Accessibility", "Healthcare UX"],
        },
      ],
    },
    {
      title: "Ongoing Projects",
      eyebrow: "Currently Building",
      items: [
        {
          icon: Users,
          name: "UpClosets",
          description: "Custom CRM solution for UpClosets. Managing client interactions, project tracking, and business operations in one platform.",
          color: "#38bdf8",
          technologies: ["React", "CRM", "Cloud"],
          status: "ongoing",
        },
        {
          icon: Eye,
          name: "Top Sights",
          description: "CRM platform for Top Sights. Streamlining customer management, bookings, and operational workflows.",
          color: "#a78bfa",
          technologies: ["React", "CRM", "Analytics"],
          status: "ongoing",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col w-full bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section className="relative py-24 px-4 md:px-8 overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900">
        {/* Gradient orb */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px]"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(99,102,241,0.15) 0%, transparent 65%)',
          }}
        />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <p className="font-semibold text-xs text-indigo-400 uppercase tracking-[0.22em] mb-4">
            Our Work
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            Featured Projects
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Services and websites we've built for businesses across multiple industries
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-12 px-4 md:px-8 bg-gray-900 border-y border-gray-700/50">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard value="12+" label="Projects Delivered" color="#60a5fa" />
          <StatCard value="10+" label="Happy Clients" color="#a78bfa" />
          <StatCard value="5+" label="Industries Served" color="#34d399" />
          <StatCard value="100%" label="Client Satisfaction" color="#f59e0b" />
        </div>
      </section>

      {/* Category Sections */}
      {categories.map((category) => (
        <section key={category.title} className="relative py-16 px-4 md:px-8 bg-gray-900 border-b border-gray-800">
          <div className="max-w-7xl mx-auto relative">
            {/* Section Header */}
            <div className="mb-10 flex flex-col gap-1.5">
              <p className="font-semibold text-xs text-indigo-400 uppercase tracking-[0.22em]">
                {category.eyebrow}
              </p>
              <h2 className="font-semibold text-2xl md:text-3xl text-white tracking-tight">
                {category.title}
              </h2>
            </div>

            {/* Card Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {category.items.map((item) => (
                <PortfolioCard
                  key={item.name + category.title}
                  item={item}
                  dimmed={hoveredName !== null && hoveredName !== item.name + category.title}
                  onHoverStart={() => setHoveredName(item.name + category.title)}
                  onHoverEnd={() => setHoveredName(null)}
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="relative py-20 px-4 md:px-8 bg-gray-800/50 border-t border-gray-700/50">
        {/* Gradient orb */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px]"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(99,102,241,0.1) 0%, transparent 70%)',
          }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Want to see your project here?
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Let's build something great together. Get in touch and let's discuss your next project.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center px-8 py-3 rounded-xl font-semibold text-sm text-white bg-indigo-600 hover:bg-indigo-500 transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
