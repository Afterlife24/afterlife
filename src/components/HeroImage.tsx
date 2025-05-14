import React from 'react';
import heroImage from '../assets/without_bg.png'; // adjust path and extension

const HeroImage: React.FC = () => {
  return (
    <div className="relative w-full max-w-[300px] sm:max-w-[350px] md:max-w-[450px] mx-auto">
      <img 
        src={heroImage} 
        alt="AI Technology Visualization" 
        className="w-full h-auto main-image" // removed rounded-lg and shadow-2xl
        style={{
          background: 'transparent', // ensure no background
        }}
      />
      
      <style jsx>{`
        .main-image {
          animation: upAndDown 3s infinite;
          // Add these if your image has a default background:
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
        }
        
        @keyframes upAndDown {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-30px);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default HeroImage;