import React from 'react';
import { Section } from '../ui/Section';
import { events } from '../../data/siteData';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { Button } from '../ui/Button';

export function EventsSection() {
  return (
    <Section
      id="events"
      title="Upcoming Events"
      subtitle="Join our community for workshops, retreats, and gatherings focused on spiritual growth."
      centered
      className="bg-gray-50 dark:bg-gray-900"
    >
      <div className="space-y-6">
        {events.map((event) => (
          <div 
            key={event.id}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="md:flex items-start justify-between">
              <div className="md:flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {event.title}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Calendar className="w-5 h-5 mr-2 text-indigo-500 dark:text-indigo-400" />
                    {event.date}
                  </div>
                  
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Clock className="w-5 h-5 mr-2 text-indigo-500 dark:text-indigo-400" />
                    {event.time}
                  </div>
                  
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <MapPin className="w-5 h-5 mr-2 text-indigo-500 dark:text-indigo-400" />
                    {event.location}
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300">
                  {event.description}
                </p>
              </div>
              
              <div className="mt-4 md:mt-0 md:ml-6 flex-shrink-0">
                <Button>Register Now</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <a 
          href="#" 
          className="inline-flex items-center text-lg font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
        >
          View full events calendar
          <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </Section>
  );
}