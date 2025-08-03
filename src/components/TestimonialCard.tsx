import React from 'react';

interface TestimonialCardProps {
  content: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ content }) => {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md text-gray-800 dark:text-gray-200">
      <p className="text-lg italic">"{content}"</p>
    </div>
  );
};

export default TestimonialCard;
