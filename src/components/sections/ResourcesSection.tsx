import React from 'react';
import { Section } from '../ui/Section';
import { resources } from '../../data/siteData';
import { Heart, Flower, BookOpen, Users } from 'lucide-react';

export function ResourcesSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'heart':
        return <Heart className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'flower':
        return <Flower className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'book-open':
        return <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'users':
        return <Users className="w-5 h-5 sm:w-6 sm:h-6" />;
      default:
        return <Heart className="w-5 h-5 sm:w-6 sm:h-6" />;
    }
  };

  return (
    <Section
      id="resources"
      title="Spiritual Resources"
      subtitle="Discover tools and guidance to deepen your understanding of the afterlife and spiritual dimensions."
      centered
      className="bg-gray-50 dark:bg-gray-900"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {resources.map((resource) => (
          <div 
            key={resource.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-6 transition-transform hover:scale-105 hover:shadow-lg"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-4 text-indigo-600 dark:text-indigo-400">
              {getIcon(resource.icon)}
            </div>
            
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
              {resource.title}
            </h3>
            
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
              {resource.description}
            </p>
            
            <a 
              href="#" 
              className="mt-4 inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 text-sm sm:text-base"
            >
              Learn more
              <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        ))}
      </div>
      
      <div className="mt-10 sm:mt-12 text-center">
        <a 
          href="#" 
          className="inline-flex items-center text-base sm:text-lg font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
        >
          View all resources
          <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </Section>
  );
}