import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  highlighted?: boolean;
  link: string;
  cta: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon, 
  highlighted = false,
  link,
  cta
}) => {
  return (
    <div 
      className={`
        rounded-xl p-4 sm:p-6 transition-all duration-300
        ${highlighted 
          ? 'bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 border border-blue-100 dark:border-blue-800 shadow-lg hover:shadow-xl' 
          : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow hover:shadow-md'
        }
      `}
    >
      <div className="flex flex-col h-full">
        <div className={`
          w-12 h-12 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center mb-4
          ${highlighted 
            ? 'bg-blue-100 dark:bg-blue-900/50' 
            : 'bg-gray-100 dark:bg-gray-700'
          }
        `}>
          {icon}
        </div>
        
        <h3 className={`
          text-lg sm:text-xl font-bold mb-2
          ${highlighted ? 'text-blue-700 dark:text-blue-400' : ''}
        `}>
          {title}
        </h3>
        
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 flex-grow">
          {description}
        </p>
        
        <Link 
          to={link} 
          className={`
            inline-flex items-center text-sm font-medium
            ${highlighted 
              ? 'text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300' 
              : 'text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100'
            }
          `}
        >
          {cta}
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;