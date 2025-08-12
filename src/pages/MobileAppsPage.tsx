import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Smartphone, Apple, Play, Code, Users, Zap } from 'lucide-react';

const MobileAppsPage: React.FC = () => {
  const features = [
    {
      title: "Native & Cross-Platform",
      description: "iOS, Android, and React Native development expertise",
      icon: <Smartphone className="h-6 w-6 text-purple-500" />
    },
    {
      title: "User-Centric Design",
      description: "Intuitive interfaces that users love to interact with",
      icon: <Users className="h-6 w-6 text-purple-500" />
    },
    {
      title: "High Performance",
      description: "Optimized for speed and smooth user experience",
      icon: <Zap className="h-6 w-6 text-purple-500" />
    },
    {
      title: "Modern Development",
      description: "Latest technologies and development practices",
      icon: <Code className="h-6 w-6 text-purple-500" />
    }
  ];

  

  const process = [
    { step: "1", title: "Strategy", desc: "Define app goals, target audience, and key features" },
    { step: "2", title: "Design", desc: "Create wireframes, UI/UX design, and prototypes" },
    { step: "3", title: "Development", desc: "Build your app with clean, maintainable code" },
    { step: "4", title: "Testing", desc: "Comprehensive testing across devices and scenarios" },
    { step: "5", title: "Launch", desc: "App store submission and launch support" }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Mobile App Development</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Transform your ideas into powerful mobile applications that engage users and drive business growth.
          </p>
          <Link to="/contact" className="inline-flex items-center px-8 py-3 bg-white text-purple-900 rounded-lg font-medium transition-all hover:bg-gray-100">
            Start Your App Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Mobile Development?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We create mobile apps that users love and businesses depend on.
          </p>
          <div className="w-20 h-1 bg-purple-600 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/40 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Packages */}
      

      {/* Process */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Development Process</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            From concept to app store, we follow a proven process.
          </p>
          <div className="w-20 h-1 bg-purple-600 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {process.map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/40 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">{item.step}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-8 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your Mobile App?</h2>
          <p className="text-xl mb-8">
            Let's turn your mobile app idea into reality with our expert development team.
          </p>
          <a 
            href="https://wa.me/33766720023" 
            className="inline-flex items-center px-8 py-3 bg-white text-purple-600 rounded-lg font-medium transition-all hover:bg-gray-100"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default MobileAppsPage;
