import React from 'react';
import { Bot, BarChart3, Server, Code, Smartphone, Database, Cloud, Clock } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';

const ServicesPage: React.FC = () => {
  const testimonials = [
    {
      content: "ScanMe transformed how we operate. Our customers love the digital menu experience, and we've seen a 20% increase in average order value.",
    },
    {
      content: "The web development team delivered a solution that exceeded our expectations. The site is beautiful, fast, and our conversion rates have increased significantly.",
    },
    {
      content: "Their hosting service is reliable and their support team is always available. We've had zero downtime since switching to their platform.",
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive AI and web solutions tailored to your business needs
          </p>
        </div>
      </section>

      {/* All Services */}
      <section className="py-16 px-4 md:px-8 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">All Our Services</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Comprehensive solutions to help your business thrive in the digital age
            </p>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="ScanMe: Digital Menu"
              description="QR-based digital menus with analytics and real-time updates for restaurants."
              icon={<Bot className="w-12 h-12 text-blue-500" />}
              highlighted={false}
              link="/product"
              cta="Learn More"
            />
            <ServiceCard title="Web Development" description="Custom websites and web applications designed for your specific business needs." icon={<Code className="w-12 h-12 text-purple-500" />} highlighted={false} link="#" cta="Our Solutions" />
            <ServiceCard title="Mobile Apps" description="Native and cross-platform mobile applications that engage your customers." icon={<Smartphone className="w-12 h-12 text-indigo-500" />} highlighted={false} link="#" cta="View Apps" />
            <ServiceCard title="Web Hosting" description="Reliable and secure hosting solutions with 99.9% uptime guarantee." icon={<Server className="w-12 h-12 text-green-500" />} highlighted={false} link="#" cta="Hosting Plans" />
            <ServiceCard title="Database Solutions" description="Scalable database design and management for your growing business." icon={<Database className="w-12 h-12 text-orange-500" />} highlighted={false} link="#" cta="Explore" />
            <ServiceCard title="Cloud Infrastructure" description="Optimize your cloud infrastructure for performance, security, and cost efficiency." icon={<Cloud className="w-12 h-12 text-teal-500" />} highlighted={false} link="#" cta="Cloud Services" />
            <ServiceCard title="Business Analytics" description="Data-driven insights to help you make better business decisions." icon={<BarChart3 className="w-12 h-12 text-red-500" />} highlighted={false} link="#" cta="Analytics" />
            <ServiceCard title="24/7 Support" description="Round-the-clock technical support to keep your systems running smoothly." icon={<Clock className="w-12 h-12 text-blue-500" />} highlighted={false} link="#" cta="Support Plans" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Hear from businesses that have transformed with our solutions
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              content={testimonial.content}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
