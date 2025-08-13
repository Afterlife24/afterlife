import React from 'react';
import { Smartphone, BarChart3, Users, Globe } from 'lucide-react';
import FAQItem from '../components/FAQItem';

// Import local images
import DigitalMenuImg from '../assests/scanme1.jpg';
import RestaurantDemoImg from '../assests/scanme2.jpg';

const ProductPage: React.FC = () => {
  const features = [
    {
      title: "Mobile-Optimized Menus",
      description: "Beautiful, responsive digital menus that look amazing on any device.",
      icon: <Smartphone className="h-6 w-6 text-blue-500" />
    },
    {
      title: "Detailed Analytics",
      description: "Track order patterns, popular items, and customer preferences.",
      icon: <BarChart3 className="h-6 w-6 text-blue-500" />
    },
    {
      title: "Multi-language Support",
      description: "Reach international customers with automatic menu translations.",
      icon: <Globe className="h-6 w-6 text-blue-500" />
    },
    {
      title: "Customer Engagement",
      description: "Collect feedback and build customer relationships through digital interactions.",
      icon: <Users className="h-6 w-6 text-blue-500" />
    }
  ];

  const plans = [
    {
      name: "Starter",
      price: 29,
      description: "Perfect for small cafes and food trucks",
      features: [
        { name: "QR digital menu", included: true },
        { name: "Up to 50 menu items", included: true },
        { name: "Basic analytics", included: true },
        { name: "Email support", included: true },
        { name: "Menu translation (2 languages)", included: true },
        { name: "Custom branding", included: false },
        { name: "Advanced analytics", included: false },
        { name: "Priority support", included: false }
      ]
    },
    {
      name: "Professional",
      price: 79,
      description: "Ideal for established restaurants",
      highlighted: true,
      features: [
        { name: "QR digital menu", included: true },
        { name: "Unlimited menu items", included: true },
        { name: "Advanced analytics", included: true },
        { name: "Email & phone support", included: true },
        { name: "Menu translation (5 languages)", included: true },
        { name: "Custom branding", included: true },
        { name: "Seasonal menu planning", included: true },
        { name: "Priority support", included: false }
      ]
    },
    {
      name: "Enterprise",
      price: 199,
      description: "For restaurant chains and franchises",
      features: [
        { name: "QR digital menu", included: true },
        { name: "Unlimited menu items", included: true },
        { name: "Advanced analytics with AI insights", included: true },
        { name: "24/7 Priority support", included: true },
        { name: "Menu translation (10+ languages)", included: true },
        { name: "Custom branding", included: true },
        { name: "Seasonal menu planning", included: true },
        { name: "Multi-location management", included: true }
      ]
    }
  ];

  const faqs = [
    {
      question: "How does ScanMe digital menu work?",
      answer: "ScanMe works by generating unique QR codes for your restaurant tables. Customers scan these codes with their smartphones, which opens your digital menu in their browser. No app download required!"
    },
    {
      question: "Can I update my menu in real-time?",
      answer: "Yes! You can update your menu items, prices, descriptions, and availability in real-time through our easy-to-use dashboard. Changes appear instantly on your customers' devices."
    },
    {
      question: "Is ScanMe compatible with my existing POS system?",
      answer: "ScanMe integrates with most popular POS systems including Square, Toast, Clover, and more. Our team can help you set up the integration during onboarding."
    },
    {
      question: "How do I handle customers who don't have smartphones?",
      answer: "We recommend keeping a few physical menus on hand for customers without smartphones. Alternatively, you can provide tablets at tables or a QR code display at the entrance."
    },
    {
      question: "What analytics does ScanMe provide?",
      answer: "ScanMe offers insights like most viewed and ordered items, peak viewing times, average time spent on menu sections, language preferences, and more to help optimize your menu and operations."
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">ScanMe:</span> Digital Menu for Modern Restaurants
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Transform your restaurant's dining experience with QR-based digital menus that delight customers and boost your bottom line.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#how-it-works" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all flex items-center justify-center">
                Get Started
              </a>
              <a href="#demo" className="px-8 py-3 bg-transparent border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600/10 rounded-lg font-medium transition-all flex items-center justify-center">
                Request Demo
              </a>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src={DigitalMenuImg}
              alt="ScanMe digital menu on smartphone" 
              className="w-full h-auto object-cover max-h-80"
            />
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section className="py-16 px-4 md:px-8 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Everything you need to revolutionize your restaurant experience
            </p>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
<section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">Why ScanMe Matters</h2>
    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
      How we solve real problems for restaurants and their customers
    </p>
    <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Problem */}
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
      <h3 className="text-xl font-bold mb-4 text-blue-600">The Problem</h3>
      <ul className="space-y-2 text-gray-600 dark:text-gray-400 list-disc list-inside">
        <li>Paper menus require constant reprinting for updates.</li>
        <li>No easy multi-language support for diverse customers.</li>
        <li>No data insights on customer preferences and ordering patterns.</li>
        <li>Longer wait times due to staff manually updating customers.</li>
        <li>Online orders lack accurate ready-time updates.</li>
      </ul>
    </div>

    {/* Solution */}
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
      <h3 className="text-xl font-bold mb-4 text-green-600">Our Solution</h3>
      <ul className="space-y-2 text-gray-600 dark:text-gray-400 list-disc list-inside">
        <li>QR code instantly opens a mobile-optimized digital menu.</li>
        <li>Real-time menu updates without reprinting.</li>
        <li>Live order tracking with estimated preparation time.</li>
        <li>Email notifications for online orders with ready-time estimates.</li>
        <li>Multi-language support with automatic translation.</li>
        <li>POS integration for seamless syncing.</li>
      </ul>
    </div>

    {/* Benefits */}
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
      <h3 className="text-xl font-bold mb-4 text-purple-600">Benefits</h3>
      <p className="text-gray-600 dark:text-gray-400 font-semibold mb-2">For Business Owners:</p>
      <ul className="mb-4 space-y-1 text-gray-600 dark:text-gray-400 list-disc list-inside">
        <li>Cost savings — no printing costs.</li>
        <li>Reduced staff load with automated updates.</li>
        <li>Data-driven menu & order optimization.</li>
        <li>Brand-customizable digital menus.</li>
      </ul>
      <p className="text-gray-600 dark:text-gray-400 font-semibold mb-2">For Customers:</p>
      <ul className="space-y-1 text-gray-600 dark:text-gray-400 list-disc list-inside">
        <li>Instant access to menus with QR scan.</li>
        <li>Accurate order time estimates.</li>
        <li>Email notifications for online orders.</li>
        <li>Multi-language viewing options.</li>
      </ul>
    </div>
  </div>
</section>

      
      {/* How It Works */}
      <section id="how-it-works" className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How ScanMe Works</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Simple implementation, powerful results
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-blue-600">1</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Setup Your Menu</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Upload your menu items, descriptions, prices, and images to our intuitive dashboard.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-blue-600">2</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Place QR Codes</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Generate and print QR codes for your tables, display them on table tents or stickers.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-blue-600">3</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Customers Scan & Order</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Customers scan the QR code with their smartphone to view your beautiful digital menu.
            </p>
          </div>
        </div>
      </section>
      
      {/* Demo Request */}
      <section id="demo" className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src={RestaurantDemoImg}
              alt="Restaurant using ScanMe" 
              className="w-full h-auto object-cover max-h-80"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Request a Demo</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              See how ScanMe can transform your restaurant's dining experience. Fill out the form and 
              our team will contact you to schedule a personalized demo.
            </p>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700" />
              </div>
              <div>
                <label htmlFor="restaurant" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Restaurant Name</label>
                <input type="text" id="restaurant" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">How can we help?</label>
                <textarea id="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-all">
                  Request Demo
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      
      {/* FAQs */}
      <section className="py-16 px-4 md:px-8 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Still have questions?
            </p>
            <a href="#" className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all">
              Contact Our Support Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
