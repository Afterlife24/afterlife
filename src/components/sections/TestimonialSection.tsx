import React from 'react';
import { Section } from '../ui/Section';
import { testimonials } from '../../data/siteData';

export function TestimonialSection() {
  return (
    <Section
      id="experiences"
      className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">
          Personal Experiences
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Stories from individuals who have found insight and comfort through spiritual understanding.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div 
            key={testimonial.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 relative"
          >
            <div className="absolute -top-4 left-6 text-5xl text-indigo-400 opacity-40 leading-none">
              "
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-6 pt-2 relative z-10">
              {testimonial.quote}
            </p>
            <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
              <p className="font-medium text-gray-900 dark:text-white">
                {testimonial.name}
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {testimonial.location}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a 
          href="#" 
          className="inline-flex items-center text-lg font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
        >
          Read more experiences
          <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </Section>
  );
}