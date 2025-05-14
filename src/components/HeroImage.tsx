import React from 'react';

const HeroImage: React.FC = () => {
  return (
    <div className="relative w-full max-w-[300px] sm:max-w-[350px] md:max-w-[450px] mx-auto">
      <img 
        src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
        alt="AI Technology Visualization" 
        className="w-full h-auto rounded-lg shadow-2xl main-image"
      />
      
      <style jsx>{`
        .main-image {
          animation: upAndDown 3s infinite;
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