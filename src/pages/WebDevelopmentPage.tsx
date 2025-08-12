import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Smartphone, Globe, Zap, Shield, Users, Database } from 'lucide-react';

const WebDevelopmentPage: React.FC = () => {
  const features = [
    {
      title: "Websites (10-Day Delivery)",
      description: "Launch a stunning, responsive website in just 10 days — designed to impress and built to perform.",
      icon: <Code className="h-6 w-6 text-blue-500" />
    },
    {
      title: "Full-Stack Web Applications",
      description: "End-to-end web app development covering frontend, backend, and integrations for a complete solution.",
      icon: <Smartphone className="h-6 w-6 text-blue-500" />
    },
    {
      title: "Database Solutions",
      description: "Design, optimize, and manage databases that keep your business data secure, organized, and accessible.",
      icon: <Database className="h-6 w-6 text-blue-500" />
    },
    {
      title: "High Performance",
      description: "Optimized for speed with caching, performance tuning, and scalable architecture.",
      icon: <Zap className="h-6 w-6 text-blue-500" />
    },
    {
      title: "Secure & Reliable",
      description: "Enterprise-grade security and 99.9% uptime guarantee for peace of mind.",
      icon: <Shield className="h-6 w-6 text-blue-500" />
    },
    {
      title: "User-Focused Design",
      description: "Crafted with your audience in mind to boost engagement and retention.",
      icon: <Users className="h-6 w-6 text-blue-500" />
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Web Services</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            We craft high-performance, user-focused web solutions — fast. From 10-day delivery websites that make a striking first impression, to fully scalable full-stack web applications and robust database solutions, we build the digital foundation your business needs to thrive.
          </p>
          <Link to="/contact" className="inline-flex items-center px-8 py-3 bg-white text-blue-900 rounded-lg font-medium transition-all hover:bg-gray-100">
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Offer</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            From concept to launch, we deliver fast, secure, and scalable solutions tailored to your needs.
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WebDevelopmentPage;
