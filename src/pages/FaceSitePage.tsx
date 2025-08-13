import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Sparkles, Globe, Zap, Users, Shield } from 'lucide-react';

const FaceSitePage: React.FC = () => {
  const features = [
    {
      title: "AI Avatar Representation",
      description: "Your website is represented by an intelligent AI avatar that interacts with visitors",
      icon: <Bot className="h-6 w-6 text-cyan-500" />
    },
    {
      title: "Natural Conversations",
      description: "Visitors can have natural conversations with your AI avatar about your business",
      icon: <Users className="h-6 w-6 text-cyan-500" />
    },
    {
      title: "Instant Responses",
      description: "24/7 availability with instant, intelligent responses to customer queries",
      icon: <Zap className="h-6 w-6 text-cyan-500" />
    },
    {
      title: "Personalized Experience",
      description: "Each visitor gets a personalized experience based on their interests",
      icon: <Sparkles className="h-6 w-6 text-cyan-500" />
    },
    {
      title: "Multi-Language Support",
      description: "Your AI avatar can communicate in multiple languages",
      icon: <Globe className="h-6 w-6 text-cyan-500" />
    },
    {
      title: "Secure & Private",
      description: "Enterprise-grade security with privacy-first design",
      icon: <Shield className="h-6 w-6 text-cyan-500" />
    }
  ];

  const packages = [
    {
      name: "Basic Avatar",
      price: "€199",
      description: "Essential AI avatar for small businesses",
      features: [
        "Basic AI avatar",
        "Standard responses",
        "Email integration",
        "Basic analytics",
        "1 language support",
        "Email support"
      ]
    },
    {
      name: "Smart Avatar",
      price: "€399",
      description: "Advanced AI with learning capabilities",
      features: [
        "Advanced AI avatar",
        "Learning capabilities",
        "CRM integration",
        "Advanced analytics",
        "3 language support",
        "Priority support",
        "Custom personality"
      ],
      highlighted: true
    },
    {
      name: "Enterprise Avatar",
      price: "€799",
      description: "Full-featured AI for large organizations",
      features: [
        "Enterprise AI avatar",
        "Deep learning",
        "Full system integration",
        "Comprehensive analytics",
        "Unlimited languages",
        "24/7 support",
        "Custom training",
        "White-label solution"
      ]
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-cyan-900 via-cyan-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">FaceSite:</span> Web 4.0 AI Avatar
              </h1>
              <p className="text-xl mb-8">
                The future of web interaction is here. Your website now has an intelligent AI avatar that represents your brand and engages with visitors in real-time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/33766720023" 
                  className="inline-flex items-center px-8 py-3 bg-white text-cyan-900 rounded-lg font-medium transition-all hover:bg-gray-100"
                >
                  Get Your AI Avatar
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <Link 
                  to="#demo" 
                  className="inline-flex items-center px-8 py-3 bg-transparent border border-white text-white hover:bg-white/10 rounded-lg font-medium transition-all"
                >
                  See Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="AI Avatar representing website" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is FaceSite */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What is FaceSite?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
            FaceSite represents the evolution to Web 4.0 - where websites are no longer static pages but intelligent entities. 
            Your AI avatar becomes the face of your digital presence, capable of understanding, learning, and engaging with 
            visitors in meaningful conversations about your business.
          </p>
          <div className="w-20 h-1 bg-cyan-600 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-cyan-100 dark:bg-cyan-900/40 rounded-full flex items-center justify-center mx-auto mb-6">
              <Bot className="h-8 w-8 text-cyan-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Intelligent Avatar</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Your AI avatar understands your business, products, and services to provide accurate information to visitors.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-cyan-100 dark:bg-cyan-900/40 rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles className="h-8 w-8 text-cyan-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Personalized Interactions</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Each visitor receives a unique, personalized experience tailored to their specific needs and interests.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-cyan-100 dark:bg-cyan-900/40 rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe className="h-8 w-8 text-cyan-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Web 4.0 Technology</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Experience the next generation of web technology with AI-powered, intelligent web entities.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 md:px-8 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Revolutionary Features</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Advanced AI capabilities that transform how visitors interact with your website
            </p>
            <div className="w-20 h-1 bg-cyan-600 mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/40 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      
{/* Case Study */}
      <section className="py-16 px-4 md:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why FaceSite Matters</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
              How FaceSite transforms websites from static pages into intelligent, human-like guides for better engagement and conversions.
            </p>
            <div className="w-20 h-1 bg-cyan-600 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Problem & Solution */}
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-cyan-600">The Problem</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Most websites today are static, confusing, and inefficient — especially for students, patients, or customers who just want quick answers. 
                They can’t guide visitors in real-time, provide a human-like experience, or adapt to different user needs without manual intervention.
              </p>
              <h3 className="text-2xl font-semibold mb-4 text-cyan-600">Our Solution</h3>
              <p className="text-gray-600 dark:text-gray-400">
                FaceSite brings Web 4.0 to life — websites that talk, guide, and feel human. It adds an emotionally intelligent AI assistant that interacts in real-time, 
                answers questions, gives directions, provides personalized guidance, and turns a standard website into a conversational experience.
              </p>
            </div>

            {/* Advantages */}
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-cyan-600">Advantages</h3>
              
              <div className="mb-6">
                <h4 className="text-lg font-bold text-gray-700 dark:text-gray-300 mb-2">For Business Owners</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                  <li>Deep personalization at scale without extra staff</li>
                  <li>Higher engagement and conversion rates</li>
                  <li>One-to-one marketing with data-driven insights</li>
                  <li>Stronger brand storytelling with interactive experiences</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold text-gray-700 dark:text-gray-300 mb-2">For Customers</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                  <li>Instant, friendly, human-like assistance 24/7</li>
                  <li>Clear guidance for complex tasks</li>
                  <li>More enjoyable, efficient, and personalized browsing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* How It Works */}
      <section id="demo" className="py-16 px-4 md:px-8 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How FaceSite Works</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Experience the future of web interaction
            </p>
            <div className="w-20 h-1 bg-cyan-600 mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-cyan-100 dark:bg-cyan-900/40 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-cyan-600">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Visitor Arrives</h3>
              <p className="text-gray-600 dark:text-gray-400">
                When someone visits your website, they're greeted by your intelligent AI avatar.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-cyan-100 dark:bg-cyan-900/40 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-cyan-600">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">AI Interaction</h3>
              <p className="text-gray-600 dark:text-gray-400">
                The avatar engages in natural conversation, understanding visitor needs and providing relevant information.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-cyan-100 dark:bg-cyan-900/40 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-cyan-600">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Personalized Experience</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Each visitor receives a tailored experience, increasing engagement and conversion rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Future of Web Interaction</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-cyan-100 dark:bg-cyan-900/40 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <Users className="h-5 w-5 text-cyan-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Higher Engagement</h3>
                  <p className="text-gray-600 dark:text-gray-400">Visitors spend 3x more time on websites with AI avatars, leading to better conversion rates.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-cyan-100 dark:bg-cyan-900/40 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <Zap className="h-5 w-5 text-cyan-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Instant Support</h3>
                  <p className="text-gray-600 dark:text-gray-400">Provide immediate assistance to visitors without human intervention, 24/7.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-cyan-100 dark:bg-cyan-900/40 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <Bot className="h-5 w-5 text-cyan-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Brand Personality</h3>
                  <p className="text-gray-600 dark:text-gray-400">Your AI avatar embodies your brand personality, creating consistent and memorable interactions.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="AI technology visualization" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Packages */}
            


      {/* Use Cases */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Perfect For</h2>
          <div className="w-20 h-1 bg-cyan-600 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "E-commerce", desc: "Product recommendations and customer support" },
            { title: "Healthcare", desc: "Patient information and appointment scheduling" },
            { title: "Education", desc: "Student guidance and course information" },
            { title: "Real Estate", desc: "Property details and virtual tours" }
          ].map((useCase, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center">
              <h3 className="text-lg font-bold mb-3">{useCase.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{useCase.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-8 bg-cyan-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Enter Web 4.0?</h2>
          <p className="text-xl mb-8">
            Transform your website into an intelligent entity with FaceSite AI avatar technology
          </p>
          <a 
            href="https://wa.me/33766720023" 
            className="inline-flex items-center px-8 py-3 bg-white text-cyan-600 rounded-lg font-medium transition-all hover:bg-gray-100"
          >
            Get Your AI Avatar
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default FaceSitePage;