import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, BarChart3, Server, Code, Smartphone } from 'lucide-react';
import Hero from '../components/HeroImage';
import ServiceCard from '../components/ServiceCard';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      
      <section className="pt-10 lg:pt-20 pb-16 lg:pb-24 px-4 md:px-8 max-w-7xl mx-auto relative overflow-hidden">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

    {/* Left Content */}
    <div className="z-10 max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
      <h1 className="font-bold leading-snug md:leading-tight mb-6">
        <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 animate-fadeIn">
          Build. Automate. Scale.
        </span>
        <span className="block mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 animate-fadeIn delay-200">
          AfterLife Makes It Happen
        </span>
      </h1>

      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0">
        Accelerate your journey from idea to market with fast delivery, smart automation, 
        and scalable cloud systems.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
        <Link 
          to="/facesite" 
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all flex items-center justify-center shadow-lg"
        >
          Explore our new Product - FaceSite
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>

    {/* Right Image */}
    <div className="flex justify-center lg:justify-end">
      <div className="w-full max-w-lg">
        <Hero/>
      </div>
    </div>

  </div>
</section>


      {/* Mission & Vision */}
<section className="py-16 px-4 md:px-8 bg-gray-100 dark:bg-gray-800">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
      <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

      {/* FaceSite Card */}
      <Link 
        to="/facesite" 
        className="block bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl"
      >
        <h3 className="text-2xl font-bold mb-4 text-blue-600">FaceSite</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          A Web 4.0 platform that transforms websites into human-like, interactive experiences. 
          FaceSite uses emotionally intelligent AI assistants to talk, guide, and personalize 
          every visitor’s journey — helping businesses, universities, and hospitals deliver 
          instant, friendly, and data-driven support without human bottlenecks.
        </p>
        <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
          Learn More
        </button>
      </Link>

      {/* ScanMe Card */}
      <Link 
        to="/product" 
        className="block bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl"
      >
        <h3 className="text-2xl font-bold mb-4 text-purple-600">ScanMe</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
    A smart QR-based digital menu and order tracking system for restaurants. 
    Customers can scan a QR to view menus instantly, place orders, and see 
    estimated preparation times — whether ordering online or at the table. 
    Online orders trigger email notifications with ready-time updates, 
    while owners get real-time analytics, multi-language support, and 
    instant menu updates without printing costs.
  </p>
        <button className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all">
          Learn More
        </button>
      </Link>

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">

          <ServiceCard 
            title="AI Services" 
            description="Cutting-edge AI solutions that understand, respond, and adapt — transforming how you connect, automate, and innovate."
            icon={<Bot className="w-12 h-12 text-orange-500" />}
            highlighted={true}
            link="/business-analytics"
            cta="Learn More"
          />
          <ServiceCard 
            title="Web Development" 
            description="Custom web applications and websites built with the latest technologies, optimized for performance and user experience."
            icon={<Code  className="w-12 h-12 text-blue-500" />}
            highlighted={true}
            link="/web-development"
            cta="Learn More"
          />
          
          <ServiceCard 
            title="Cloud Services" 
            description="Reliable, secure, and scalable hosting solutions to ensure your applications run smoothly with maximum uptime."
            icon={<Server className="w-12 h-12 text-purple-500" />}
            highlighted={true}
            link="/web-hosting"
            cta="Hosting Plans"
          />
          
          <ServiceCard 
            title="Mobile Apps" 
            description="Native and cross-platform mobile applications that engage your customers and drive business growth."
            icon={<Smartphone className="w-12 h-12 text-green-500" />}
            highlighted={true}
            link="/mobile-apps"
            cta="Learn More"
          />
          
          
        </div>
        
        <div className="text-center mt-12">
          <Link to="/facesite" className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all">
            Discover FaceSite - Web 4.0
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
