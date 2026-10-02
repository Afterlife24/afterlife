import React, { useEffect, useRef, useState } from 'react';
import { Award, Users, Briefcase, BookOpen, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import TeamMember from '../components/TeamMember';

import austin from '../assests/WhatsApp Image 2025-06-06 at 21.13.21_bc7f3526.jpg';
import dhanush from '../assests/dhanush.png';

/* ─── useInView ─────────────────────────────────────────────────────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ob = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    ob.observe(el);
    return () => ob.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ─── Data ─────────────────────────────────────────────────────────────────── */
const TEAM = [
  {
    name: 'Austin Kumar',
    role: 'CEO',
    image: austin,
    bio: 'Marketing strategist with a data-driven approach. Passionate about scaling brands through innovative growth strategies.',
  },
  {
    name: 'DhanushVardhan',
    role: 'COO',
    image: dhanush,
    bio: 'Seasoned full-stack developer specialising in web and mobile applications. Leads the technical team in building scalable, high-performance digital solutions.',
  },
];

const VALUES = [
  {
    icon: Award,
    title: 'Excellence',
    description:
      'Not just working AI — AI that creates real, measurable business outcomes. We hold ourselves to that standard on every engagement.',
    color: '#60a5fa',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description:
      'We embed ourselves in your business, understand your constraints, and build with you — not just for you.',
    color: '#a78bfa',
  },
  {
    icon: Briefcase,
    title: 'Innovation',
    description:
      'We stay at the edge of what AI can do so our clients benefit from advances in models, tooling, and methodology as they emerge.',
    color: '#34d399',
  },
  {
    icon: BookOpen,
    title: 'Accessibility',
    description:
      'We make advanced AI accessible to businesses of every size — not just enterprises with dedicated data science teams.',
    color: '#fb923c',
  },
];

/* ─── Page ──────────────────────────────────────────────────────────────────── */
const AboutPage: React.FC = () => {
  const storyInView  = useInView(0.15);
  const valuesInView = useInView(0.1);
  const teamInView   = useInView(0.1);

  return (
    <div className="flex flex-col w-full bg-gray-900 text-gray-100">

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-28 px-6 md:px-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(76,60,180,0.22) 0%, transparent 70%)',
          }}
        />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-semibold tracking-[0.22em] uppercase text-indigo-400">
            Who we are
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            About{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              AfterLife
            </span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-400 max-w-2xl mx-auto">
            An AI consultancy helping businesses solve real problems — not just automate the buzz.
          </p>
        </div>
      </section>

      {/* ─── STORY ────────────────────────────────────────────────────────── */}
      <section ref={storyInView.ref} className="py-20 px-6 md:px-12 border-t border-gray-800">
        <div className="mx-auto max-w-7xl grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: storyInView.visible ? 1 : 0, x: storyInView.visible ? 0 : -24 }}
            transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
          >
            <p className="mb-3 text-xs font-semibold tracking-[0.22em] uppercase text-indigo-400">
              Our story
            </p>
            <h2 className="mb-6 text-3xl md:text-4xl font-bold tracking-tight text-white">
              Built on a conviction, not a trend
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Founded in 2025, AfterLife started from a simple conviction: AI should create
                measurable outcomes for businesses, not just feature in boardroom slides.
              </p>
              <p>
                We work directly inside our clients' operations — mapping workflows, identifying
                where intelligence makes the biggest difference, and building solutions tailored
                to real constraints, not generic templates.
              </p>
              <p>
                From automating repetitive processes to building custom AI products, every
                engagement starts with the same question: what actually moves the needle for you?
              </p>
            </div>
            <a
              href="https://wa.me/33766720023"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              Work with us <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: storyInView.visible ? 1 : 0, x: storyInView.visible ? 0 : 24 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { value: '2025', label: 'Founded' },
              { value: '9+', label: 'Projects delivered' },
              { value: '5+', label: 'Industries served' },
              { value: '100%', label: 'Client satisfaction' },
            ].map((s) => (
              <div
                key={s.label}
                className="flex flex-col gap-1 rounded-2xl border border-gray-700/50 bg-gray-800/50 p-6"
              >
                <span className="text-3xl font-bold text-white">{s.value}</span>
                <span className="text-sm text-gray-500">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── VALUES ───────────────────────────────────────────────────────── */}
      <section ref={valuesInView.ref} className="py-20 px-6 md:px-12 border-t border-gray-800">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: valuesInView.visible ? 1 : 0, y: valuesInView.visible ? 0 : 20 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="mb-3 text-xs font-semibold tracking-[0.22em] uppercase text-indigo-400">
              What drives us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Our core values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: valuesInView.visible ? 1 : 0, y: valuesInView.visible ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-gray-700/50 bg-gray-800/60 p-6 hover:border-gray-600 transition-[border-color] duration-300"
                >
                  {/* Accent tint */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl"
                    style={{ background: `radial-gradient(ellipse at 20% 20%, ${v.color}14, transparent 65%)` }}
                  />
                  {/* Icon */}
                  <div
                    className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{ background: `${v.color}18`, boxShadow: `inset 0 0 0 1px ${v.color}35` }}
                  >
                    <Icon className="h-6 w-6" strokeWidth={1.7} style={{ color: v.color }} />
                  </div>
                  {/* Text */}
                  <div className="relative z-10 flex flex-col gap-2">
                    <h3 className="text-base font-semibold tracking-tight text-gray-100">{v.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-400">{v.description}</p>
                  </div>
                  {/* Bottom accent */}
                  <div
                    className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full transition-all duration-500 group-hover:w-full"
                    style={{ background: `linear-gradient(to right, ${v.color}80, transparent)` }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── TEAM ─────────────────────────────────────────────────────────── */}
      <section ref={teamInView.ref} className="py-20 px-6 md:px-12 border-t border-gray-800">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: teamInView.visible ? 1 : 0, y: teamInView.visible ? 0 : 20 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="mb-3 text-xs font-semibold tracking-[0.22em] uppercase text-indigo-400">
              The team
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Meet AfterLife
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TEAM.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: teamInView.visible ? 1 : 0, y: teamInView.visible ? 0 : 24 }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
              >
                <TeamMember
                  name={member.name}
                  role={member.role}
                  image={member.image}
                  bio={member.bio}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-24 px-6 md:px-12 border-t border-gray-800">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(99,102,241,0.12) 0%, transparent 70%)',
          }}
        />
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Want to work with us?
          </h2>
          <p className="mb-8 text-gray-400 leading-relaxed">
            Tell us the problem. We'll figure out if AI is the right answer — and build it if it is.
          </p>
          <a
            href="https://wa.me/33766720023"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-xl bg-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-900/40 transition-colors hover:bg-indigo-500"
          >
            Book a free call
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
