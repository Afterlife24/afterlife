import React from 'react';
import { Section } from '../ui/Section';
import { articles } from '../../data/siteData';

export function ArticlesSection() {
  return (
    <Section
      id="articles"
      title="Latest Articles"
      subtitle="Explore our collection of articles on spiritual understanding, consciousness, and afterlife concepts."
      centered
      className="bg-white dark:bg-gray-800"
    >
      <div className="grid md:grid-cols-3 gap-8">
        {articles.map((article) => (
          <div 
            key={article.id}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="aspect-video relative overflow-hidden">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" 
              />
              <div className="absolute top-4 left-4 bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded">
                {article.category}
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                {article.date}
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {article.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {article.excerpt}
              </p>
              
              <a 
                href="#" 
                className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium"
              >
                Read more
                <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <a 
          href="#" 
          className="inline-flex items-center text-lg font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
        >
          View all articles
          <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </Section>
  );
}