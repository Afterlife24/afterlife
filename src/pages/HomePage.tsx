import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, BarChart3, Server } from 'lucide-react';
import HeroImage from '../components/HeroImage';
import ServiceCard from '../components/ServiceCard';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
              Empowering Institutions and Businesses with Advanced AI
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              Transform your business with cutting-edge AI solutions designed for real-world challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/services" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all flex items-center justify-center">
    Our Services
    <ArrowRight className="ml-2 h-5 w-5" />
  </Link>
  <Link to="/product" className="px-8 py-3 bg-transparent border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600/10 rounded-lg font-medium transition-all flex items-center justify-center">
    Explore ScanMe
    <ArrowRight className="ml-2 h-5 w-5" />
  </Link>
  
</div>

          </div>
          <div className="flex justify-center">
            <HeroImage />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 md:px-8 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission & Vision</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg transform transition-transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Our Mission</h3>
              <p className="text-gray-700 dark:text-gray-300">
                To empower businesses and institutions with accessible AI solutions that drive efficiency, 
                innovation, and growth. We believe in democratizing advanced technology to solve real-world 
                challenges across all industries.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg transform transition-transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4 text-purple-600">Our Vision</h3>
              <p className="text-gray-700 dark:text-gray-300">
                A future where AI seamlessly enhances every aspect of business operations, enabling 
                organizations of all sizes to achieve their full potential through intelligent, 
                ethical, and user-friendly technology solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive AI and web solutions to transform your business
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard 
            title="ScanMe: Digital Menu" 
            description="Revolutionize your restaurant with QR-based digital menus that enhance customer experience and streamline operations."
            icon={<Bot className="w-12 h-12 text-blue-500" />}
            highlighted={true}
            link="/product"
            cta="Learn More"
          />
          
          <ServiceCard 
            title="Web Development" 
            description="Custom web applications and websites built with the latest technologies, optimized for performance and user experience."
            icon={<BarChart3 className="w-12 h-12 text-purple-500" />}
            highlighted={false}
            link="/services"
            cta="Our Solutions"
          />
          
          <ServiceCard 
            title="Web Hosting" 
            description="Reliable, secure, and scalable hosting solutions to ensure your applications run smoothly with maximum uptime."
            icon={<Server className="w-12 h-12 text-green-500" />}
            highlighted={false}
            link="/services"
            cta="Hosting Plans"
          />
        </div>
        
        <div className="text-center mt-12">
          <Link to="/services" className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all">
            View All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 px-4 md:px-8 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Our Company</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Founded in 2025, we've been at the forefront of AI innovation, helping businesses leverage 
                the power of artificial intelligence to solve complex problems and create new opportunities.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                Our team of experts combines deep technical knowledge with industry expertise to deliver 
                solutions that make a real impact on your business.
              </p>
              <Link to="/about" className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all">
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Our team collaborating" 
                className="w-full h-auto object-cover transform transition-transform hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;