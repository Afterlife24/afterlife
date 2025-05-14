import React from 'react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';

export function AboutSection() {
  return (
    <Section 
      id="about" 
      className="bg-white dark:bg-gray-800"
    >
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="relative order-2 md:order-1">
          <div className="aspect-square overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.pexels.com/photos/268941/pexels-photo-268941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Spiritual journey" 
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" 
            />
          </div>
          <div className="absolute -bottom-8 -right-8 w-48 sm:w-56 h-48 sm:h-56 hidden md:block">
            <div className="w-full h-full rounded-full bg-purple-100 dark:bg-purple-900/20 opacity-80"></div>
            <div className="absolute inset-0 flex items-center justify-center text-center p-6">
              <p className="text-base sm:text-lg font-serif text-purple-800 dark:text-purple-200">
                "The journey of the soul continues beyond physical existence"
              </p>
            </div>
          </div>
        </div>
        
        <div className="order-1 md:order-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Our Mission & Vision
          </h2>
          
          <div className="space-y-3 sm:space-y-4 text-gray-700 dark:text-gray-300">
            <p className="text-base sm:text-lg">
              Founded in 2010, Afterlife is dedicated to exploring and understanding the profound journey of consciousness beyond physical existence. We bring together ancient wisdom and modern perspectives on spirituality, consciousness, and the afterlife.
            </p>
            
            <p className="text-base sm:text-lg">
              Our vision is to create a compassionate space where individuals can explore spiritual dimensions, find comfort in understanding, and connect with a community of seekers. We respect all religious and spiritual traditions while fostering an inclusive approach to afterlife concepts.
            </p>
            
            <p className="text-base sm:text-lg">
              Through education, meditation practices, and community support, we help people navigate questions about mortality, consciousness, and spiritual growth with wisdom and grace.
            </p>
          </div>
          
          <div className="mt-6 sm:mt-8">
            <Button className="w-full sm:w-auto">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}