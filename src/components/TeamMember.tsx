import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  color?: string;
}

const ROLE_COLORS: Record<string, string> = {
  CEO: '#67e8f9',
  CTO: '#a78bfa',
  COO: '#34d399',
};

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image, bio, color }) => {
  const accent = color ?? ROLE_COLORS[role] ?? '#60a5fa';

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-700/50 bg-gray-800/60 transition-all duration-300 hover:border-gray-600 hover:-translate-y-1">
      {/* Accent tint */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{ background: `radial-gradient(ellipse at 50% 0%, ${accent}12, transparent 65%)` }}
      />

      {/* Photo */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        {/* Bottom fade into card */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-gray-800/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-3 p-6">
        <div>
          <h3 className="text-xl font-bold text-gray-100">{name}</h3>
          <span
            className="mt-1 inline-block text-sm font-semibold tracking-[0.08em]"
            style={{ color: accent }}
          >
            {role}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-gray-400">{bio}</p>

        {/* Social links */}
        <div className="mt-2 flex items-center gap-3">
          {[
            { Icon: Linkedin, label: `${name}'s LinkedIn` },
            { Icon: Twitter, label: `${name}'s Twitter` },
            { Icon: Mail, label: `Email ${name}` },
          ].map(({ Icon, label }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-700/50 bg-gray-900/50 text-gray-500 transition-all hover:border-gray-500 hover:text-gray-200"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full transition-all duration-500 group-hover:w-full"
        style={{ background: `linear-gradient(to right, ${accent}80, transparent)` }}
      />
    </div>
  );
};

export default TeamMember;
