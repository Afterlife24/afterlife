import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cloud, Server, Shield, Zap } from 'lucide-react';

const WebHostingPage: React.FC = () => {
  const features = [
    {
      title: "Web Hosting",
      description: "Fast, secure, and reliable AWS-powered hosting to keep your website running smoothly, 24/7.",
      icon: <Server className="h-6 w-6 text-green-500" />
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable, cost-efficient AWS cloud environments tailored to your applications and growth needs.",
      icon: <Cloud className="h-6 w-6 text-green-500" />
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-green-900 via-green-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Cloud Services (AWS)</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Our AWS-powered cloud solutions keep your business online, secure, and ready to scale.
            From reliable Web Hosting to fully managed Cloud Infrastructure, we ensure your digital
            operations run seamlessly, efficiently, and without limits.
          </p>
          <a
            href="https://wa.me/33766720023"
            className="inline-flex items-center px-8 py-3 bg-white text-green-900 rounded-lg font-medium transition-all hover:bg-gray-100"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our AWS-Powered Solutions</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Designed for speed, scalability, and security
          </p>
          <div className="w-20 h-1 bg-green-600 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/40 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose AWS */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Our AWS Solutions</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900/40 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <Shield className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Enterprise-Grade Security</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    AWS-backed security with encryption, firewalls, and compliance to keep your data safe.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900/40 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <Zap className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">High Performance</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    AWS global infrastructure ensures fast loading, low latency, and maximum uptime.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900/40 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <Cloud className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Scalability Without Limits</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Seamlessly scale your resources up or down as your business needs change.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="AWS Cloud Infrastructure"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebHostingPage;
