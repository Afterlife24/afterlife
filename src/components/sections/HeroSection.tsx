import React from 'react';
import { Button } from '../ui/Button';

export function HeroSection() {
  return (
    <div className="relative bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 pt-24 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-10 dark:opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-28 lg:py-32 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight">
            <span className="block mb-2">Explore the Journey</span>
            <span className="block text-indigo-600 dark:text-indigo-400">Beyond Life</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto">
            Discover spiritual wisdom, find comfort in ancient knowledge, and connect with a community exploring the mysteries of existence.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Button size="lg" className="w-full sm:w-auto">
              Begin Your Journey
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Explore Resources
            </Button>
          </div>
          
          <div className="mt-12 sm:mt-16 flex justify-center">
            <div className="animate-bounce bg-white dark:bg-gray-800 p-2 w-10 h-10 ring-1 ring-gray-200 dark:ring-gray-700 shadow-lg rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white dark:from-gray-800 to-transparent"></div>
    </div>
  );
}