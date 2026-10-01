import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Facebook, Instagram, Mail, MapPin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import logo from '../assests/removed.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-14 pb-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">

          {/* Brand */}
          <div className="md:col-span-4">
            <Link to="/" className="mb-5 flex items-center gap-2.5">
              <img src={logo} alt="AfterLife" className="h-8 w-8 object-contain" />
              <span className="text-xl font-bold text-white">AfterLife</span>
            </Link>
            <p className="mb-6 text-sm leading-relaxed">
              An AI consultancy helping businesses solve real problems — automating
              workflows and building custom AI solutions that actually move the needle.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3">
              {[
                {
                  href: 'https://www.linkedin.com/company/afterlife24/?viewAsMember=true',
                  label: 'LinkedIn',
                  icon: <Linkedin className="h-4 w-4" />,
                },
                {
                  href: 'https://www.facebook.com/people/Pretty-Ai/pfbid02MFqJj5vMHBktZHMUQcbknoiAfStFV3sc3UQgTRaeGo68hJJYbZ28dWtmKqryLqw8l/',
                  label: 'Facebook',
                  icon: <Facebook className="h-4 w-4" />,
                },
                {
                  href: 'https://www.instagram.com/afterlife668?igsh=N29qMXBkNTM0b2ll&utm_source=qr',
                  label: 'Instagram',
                  icon: <Instagram className="h-4 w-4" />,
                },
              ].map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-700/60 bg-gray-800/50 text-gray-500 transition-all hover:border-indigo-500/50 hover:text-indigo-400"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-2">
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-white">
              Company
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'Home', to: '/' },
                { label: 'About', to: '/about' },
                { label: 'Portfolio', to: '/portfolio' },
              ].map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="transition-colors hover:text-indigo-400">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-white">
              Services
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                'AI Strategy',
                'Workflow Automation',
                'Custom AI Solutions',
                'Data Intelligence',
              ].map((s) => (
                <li key={s}>
                  <span className="transition-colors hover:text-indigo-400 cursor-default">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-white">
              Contact
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-indigo-400" />
                <span>Paris, France 75001</span>
              </li>
              <li className="flex items-center gap-3">
                <FaWhatsapp className="h-4 w-4 shrink-0 text-green-400" />
                <a
                  href="https://wa.me/33766720023"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-green-400"
                >
                  +33 766 720 023
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-indigo-400" />
                <a
                  href="mailto:admin@afterlife.org.in"
                  className="transition-colors hover:text-indigo-400"
                >
                  admin@afterlife.org.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 text-xs sm:flex-row">
          <p className="text-gray-600">© 2025 AfterLife. All rights reserved.</p>
          <div className="flex items-center gap-6 text-gray-600">
            <a href="#" className="transition-colors hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-gray-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
