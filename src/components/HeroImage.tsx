import React from 'react';
import heroImage from '../assests/bg.png'; // Ensure the path is correct

const HeroImage: React.FC = () => {
  return (
    <>
      <img 
        src={heroImage} 
        alt="AI Technology Visualization" 
        className="hero-image"
      />
      
      <style jsx>{`
        .hero-image {
          width: 100%;
          max-width: 450px; /* Responsive max width */
          height: auto;
          display: block;
          margin: 0 auto; /* Centers the image */
          animation: upAndDown 3s ease-in-out infinite;
        }

        @keyframes upAndDown {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </>
  );
};

export default HeroImage;
