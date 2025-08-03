import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Twitter, Linkedin, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

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
              
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
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
                <Link to="/services" className="hover:text-blue-500 transition-colors">Services</Link>
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
                ScanMe: Digital Menu
              </li>
              <li>
                Web Development
              </li>
              <li>
                Web Hosting
              </li>
              <li>
                Mobile Apps
              </li>
              <li>
                Business Analytics
              </li>
              <li>
                Cloud Solutions
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
                <Phone className="h-5 w-5 text-blue-500 mr-2" />
                <span>+33 (766) 720-023</span>
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