import React from 'react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { Mail, MessageSquare, User, Send } from 'lucide-react';

export function ContactSection() {
  return (
    <Section
      id="contact"
      className="bg-white dark:bg-gray-800"
    >
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-6">
            Connect With Us
          </h2>
          
          <p className="text-gray-700 dark:text-gray-300 mb-8">
            Have questions about spiritual understanding or want to join our community? Reach out to us and begin your journey of exploration and growth.
          </p>
          
          <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Spiritual Guidance Hours
            </h3>
            
            <div className="space-y-2 text-gray-700 dark:text-gray-300">
              <p className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>10:00 AM - 6:00 PM</span>
              </p>
              <p className="flex justify-between">
                <span>Saturday:</span>
                <span>10:00 AM - 2:00 PM</span>
              </p>
              <p className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="bg-indigo-100 dark:bg-indigo-900/30 rounded-full p-3 text-indigo-600 dark:text-indigo-400">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                  Email Us
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  connect@afterlife.org
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="bg-indigo-100 dark:bg-indigo-900/30 rounded-full p-3 text-indigo-600 dark:text-indigo-400">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                  Call Us
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  +91 98765 43210
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 md:p-8 shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Send Us a Message
          </h3>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Your Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="name"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your full name"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Your Message
              </label>
              <div className="relative">
                <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                  <MessageSquare className="h-5 w-5 text-gray-400" />
                </div>
                <textarea
                  id="message"
                  rows={4}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your message or question..."
                ></textarea>
              </div>
            </div>
            
            <Button className="w-full flex items-center justify-center" type="submit">
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );
}