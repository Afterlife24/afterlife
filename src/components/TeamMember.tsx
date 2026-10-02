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
    <div className="group relative overflow-hidden rounded-2xl border border-gray-700/40" style={{ height: 480 }}>
      {/* Full-bleed photo */}
      <img
        src={image}
        alt={name}
        className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
      />

      {/* Gradient overlay — always dark at bottom, lifts on hover */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background:
            'linear-gradient(to top, rgba(8,8,20,0.98) 0%, rgba(8,8,20,0.75) 45%, rgba(8,8,20,0.1) 100%)',
        }}
      />

      {/* Accent color tint */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(ellipse at 50% 100%, ${accent}22, transparent 65%)`,
        }}
      />

      {/* Content pinned to the bottom */}
      <div className="absolute inset-x-0 bottom-0 p-7 flex flex-col gap-3">
        {/* Role pill */}
        <span
          className="inline-flex w-fit items-center rounded-full px-3 py-1 text-[11px] font-bold tracking-[0.16em] uppercase"
          style={{
            background: `${accent}18`,
            color: accent,
            border: `1px solid ${accent}45`,
          }}
        >
          {role}
        </span>

        <h3 className="text-2xl font-bold text-white leading-tight">{name}</h3>

        {/* Bio slides up on hover */}
        <p className="text-sm leading-relaxed text-gray-300 max-h-0 overflow-hidden opacity-0 transition-all duration-400 group-hover:max-h-24 group-hover:opacity-100">
          {bio}
        </p>

        {/* Social links */}
        <div className="flex items-center gap-2 pt-1">
          {[
            { Icon: Linkedin, label: `${name}'s LinkedIn` },
            { Icon: Twitter, label: `${name}'s Twitter` },
            { Icon: Mail, label: `Email ${name}` },
          ].map(({ Icon, label }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-gray-300 backdrop-blur-sm transition-all hover:bg-white/20 hover:text-white"
            >
              <Icon className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      </div>

      {/* Accent bottom line */}
      <div
        className="absolute bottom-0 left-0 h-[2.5px] w-0 rounded-full transition-all duration-500 group-hover:w-full"
        style={{ background: `linear-gradient(to right, ${accent}, transparent)` }}
      />
    </div>
  );
};

export default TeamMember;
