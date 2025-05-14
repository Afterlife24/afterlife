import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface NotificationBarProps {
  notifications: string[];
}

const NotificationBar: React.FC<NotificationBarProps> = ({ notifications }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const nextNotification = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % notifications.length);
  };

  const prevNotification = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? notifications.length - 1 : prevIndex - 1
    );
  };

  const startCarousel = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = window.setInterval(() => {
      if (!isPaused) {
        nextNotification();
      }
    }, 5000);
  };

  useEffect(() => {
    startCarousel();
    
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, notifications]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const dismissNotification = () => {
    setIsDismissed(true);
  };

  if (isDismissed || notifications.length === 0) {
    return null;
  }

  return (
    <div 
      className="bg-blue-600 text-white py-2 relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <button 
          onClick={prevNotification} 
          className="text-white/80 hover:text-white focus:outline-none"
          aria-label="Previous notification"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        
        <div className="overflow-hidden flex-1 mx-4">
          <div 
            className="whitespace-nowrap text-center transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {notifications.map((notification, index) => (
              <div
                key={index}
                className={`inline-block w-full text-center transition-opacity duration-500 ${
                  index === activeIndex ? 'opacity-100' : 'opacity-0 absolute'
                }`}
              >
                {notification}
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex items-center">
          <button 
            onClick={nextNotification} 
            className="text-white/80 hover:text-white focus:outline-none mr-2"
            aria-label="Next notification"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          
          <button 
            onClick={dismissNotification} 
            className="text-white/80 hover:text-white focus:outline-none"
            aria-label="Dismiss notifications"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      {/* Progress indicators */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-1 pb-1">
        {notifications.map((_, index) => (
          <div 
            key={index}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === activeIndex 
                ? 'w-4 bg-white' 
                : 'w-2 bg-white/40'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default NotificationBar;