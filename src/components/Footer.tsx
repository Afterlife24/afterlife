import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Twitter, Linkedin, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';


const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto pt-12 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <Bot className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-white">AI Solutions</span>
            </div>
            <p className="mb-4">
              Empowering institutions and businesses with advanced AI solutions since 2025.
            </p>
            <div className="flex space-x-4">
              
              <a href="https://www.linkedin.com/company/afterlife24/?viewAsMember=true" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/people/Pretty-Ai/pfbid02MFqJj5vMHBktZHMUQcbknoiAfStFV3sc3UQgTRaeGo68hJJYbZ28dWtmKqryLqw8l/" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/afterlife668?igsh=N29qMXBkNTM0b2ll&utm_source=qr" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-blue-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-500 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/facesite" className="hover:text-blue-500 transition-colors">FaceSite</Link>
              </li>
              <li>
                <Link to="/product" className="hover:text-blue-500 transition-colors">ScanMe</Link>
              </li>
              
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/facesite" className="hover:text-blue-500 transition-colors">FaceSite: AI Avatar</Link>
              </li>
              <li>
                <Link to="/product" className="hover:text-blue-500 transition-colors">ScanMe: Digital Menu</Link>
              </li>
              <li>
                <Link to="/business-analytics" className="hover:text-blue-500 transition-colors">AI Services</Link>
              </li>
              <li>
                <Link to="/web-development" className="hover:text-blue-500 transition-colors">Web Development</Link>
              </li>
              <li>
                <Link to="/web-hosting" className="hover:text-blue-500 transition-colors">Web Hosting</Link>
              </li>
              <li>
                <Link to="/mobile-apps" className="hover:text-blue-500 transition-colors">Mobile Apps</Link>
              </li>
              
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                <span>Paris 70123</span>
              </li>
              <li className="flex items-center">
  <FaWhatsapp className="h-5 w-5 text-green-500 mr-2" />
  <a
    href="https://wa.me/33766720023"
    className="hover:text-green-500 transition-colors"
    target="_blank"
    rel="noopener noreferrer"
  >
    +33 (766) 720-023
  </a>
</li>

              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-500 mr-2" />
                <a href="mailto:info@aisolutions.com" className="hover:text-blue-500 transition-colors">
                  admin@afterlife.org.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2025 AI Solutions. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;