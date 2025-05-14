import React from 'react';
import { Check, X } from 'lucide-react';

interface PricingFeature {
  name: string;
  included: boolean;
}

interface PricingCardProps {
  name: string;
  price: number;
  description: string;
  features: PricingFeature[];
  highlighted?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ 
  name, 
  price, 
  description, 
  features,
  highlighted = false
}) => {
  return (
    <div className={`
      rounded-lg overflow-hidden border shadow-lg transform transition-all duration-300 hover:scale-105
      ${highlighted 
        ? 'bg-white dark:bg-gray-900 border-blue-500 shadow-blue-100 dark:shadow-blue-900/10 relative' 
        : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
      }
    `}>
      {highlighted && (
        <div className="absolute top-0 left-0 right-0 bg-blue-500 text-white text-center py-1 text-xs sm:text-sm font-medium">
          Most Popular
        </div>
      )}
      
      <div className={`p-4 sm:p-6 ${highlighted ? 'pt-8 sm:pt-10' : ''}`}>
        <h3 className="text-xl sm:text-2xl font-bold mb-1">{name}</h3>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        
        <div className="flex items-baseline mb-4 sm:mb-6">
          <span className="text-3xl sm:text-4xl font-bold">${price}</span>
          <span className="text-gray-500 dark:text-gray-400 ml-1">/month</span>
        </div>
        
        <a 
          href="#" 
          className={`block w-full py-2 px-4 rounded-md text-center text-sm sm:text-base font-medium transition-colors mb-4 sm:mb-6 ${
            highlighted 
              ? 'bg-blue-600 hover:bg-blue-700 text-white' 
              : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200'
          }`}
        >
          Get Started
        </a>
        
        <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                {feature.included ? (
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                ) : (
                  <div className="w-5 h-5 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <X className="w-3 h-3 text-gray-500 dark:text-gray-400" />
                  </div>
                )}
              </div>
              <span className={`ml-3 ${feature.included ? 'text-gray-800 dark:text-gray-200' : 'text-gray-500 dark:text-gray-400'}`}>
                {feature.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingCard;