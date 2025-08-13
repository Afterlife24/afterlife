import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Smartphone, TrendingUp, Clock, DollarSign, QrCode, BarChart3 } from 'lucide-react';

const ScanMeCaseStudy: React.FC = () => {
  const metrics = [
    { label: "Order Processing Time", value: "-60%", icon: <Clock className="h-6 w-6" /> },
    { label: "Customer Satisfaction", value: "+85%", icon: <TrendingUp className="h-6 w-6" /> },
    { label: "Operational Costs", value: "-40%", icon: <DollarSign className="h-6 w-6" /> },
    { label: "Menu Update Speed", value: "Instant", icon: <Smartphone className="h-6 w-6" /> }
  ];

  const challenges = [
    "Paper menus require constant reprinting for updates",
    "No real-time order tracking for customers",
    "Language barriers with international customers",
    "High operational costs for menu management",
    "Limited data insights on customer preferences"
  ];

  const solutions = [
    "QR-based digital menus with instant updates",
    "Real-time order tracking with estimated preparation times",
    "Automatic multi-language support for global customers",
    "Zero printing costs with cloud-based menu management",
    "Comprehensive analytics on ordering patterns and preferences"
  ];

  const results = [
    "60% reduction in order processing time",
    "85% increase in customer satisfaction scores",
    "40% decrease in operational costs",
    "100% elimination of menu printing costs",
    "Real-time insights driving menu optimization"
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="py-12 px-4 md:px-8 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 text-white">
        <div className="max-w-7xl mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center text-purple-200 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-purple-500/20 text-purple-200 px-4 py-2 rounded-full text-sm font-medium mb-4">
                Case Study
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Why ScanMe Matters
              </h1>
              <p className="text-xl text-purple-100 mb-8">
                Revolutionizing restaurant operations with smart QR-based digital menus that enhance customer experience while reducing operational costs and complexity.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Project Overview</h3>
              <div className="space-y-4">
                <div>
                  <span className="text-purple-200 font-medium">Industry:</span>
                  <span className="ml-2">Restaurant Technology</span>
                </div>
                <div>
                  <span className="text-purple-200 font-medium">Solution:</span>
                  <span className="ml-2">QR Digital Menu System</span>
                </div>
                <div>
                  <span className="text-purple-200 font-medium">Timeline:</span>
                  <span className="ml-2">1-2 weeks implementation</span>
                </div>
                <div>
                  <span className="text-purple-200 font-medium">Impact:</span>
                  <span className="ml-2">Complete operational transformation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Impact Metrics</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Measurable results from ScanMe implementation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/40 rounded-lg flex items-center justify-center mx-auto mb-4 text-purple-600">
                {metric.icon}
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-2">{metric.value}</div>
              <div className="text-gray-600 dark:text-gray-400">{metric.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-16 px-4 md:px-8 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Challenge</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                Traditional restaurant operations face numerous inefficiencies: constant menu reprinting costs, 
                language barriers with diverse customers, lack of real-time order tracking, and limited insights 
                into customer preferences. These challenges result in higher operational costs and reduced customer satisfaction.
              </p>
              
              <div className="space-y-4">
                {challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-red-100 dark:bg-red-900/40 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Traditional Restaurant Problems</h3>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-500 mb-2">$2,400</div>
                  <p className="text-gray-600 dark:text-gray-400">Annual menu printing costs per restaurant</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-500 mb-2">15 min</div>
                  <p className="text-gray-600 dark:text-gray-400">Average time to update physical menus</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-500 mb-2">68%</div>
                  <p className="text-gray-600 dark:text-gray-400">Customers frustrated by outdated menu information</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-xl">
            <div className="flex items-center mb-6">
              <QrCode className="h-8 w-8 text-purple-600 mr-3" />
              <h3 className="text-2xl font-bold">ScanMe Digital Menu</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              ScanMe transforms restaurant operations with QR-based digital menus that provide instant access, 
              real-time updates, multi-language support, and comprehensive analytics to optimize business performance.
            </p>
            <div className="flex items-center">
              <BarChart3 className="h-6 w-6 text-purple-600 mr-2" />
              <span className="text-purple-600 font-medium">Smart Restaurant Technology</span>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The ScanMe Solution</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              ScanMe revolutionizes restaurant operations with intelligent QR-based digital menus that eliminate 
              printing costs, provide real-time order tracking, support multiple languages, and deliver actionable 
              insights to optimize menu performance and customer satisfaction.
            </p>
            
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{solution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 px-4 md:px-8 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Results</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Transformative outcomes that prove ScanMe's value
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              {results.map((result, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center mr-4">
                      <TrendingUp className="h-4 w-4 text-green-600" />
                    </div>
                    <p className="text-lg font-medium">{result}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">ScanMe Impact</h3>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-500 mb-2">$0</div>
                  <p className="text-gray-600 dark:text-gray-400">Menu printing costs after implementation</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-500 mb-2">10+</div>
                  <p className="text-gray-600 dark:text-gray-400">Languages supported automatically</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-500 mb-2">24/7</div>
                  <p className="text-gray-600 dark:text-gray-400">Real-time menu updates availability</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why ScanMe Matters</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/40 rounded-full flex items-center justify-center mx-auto mb-6">
              <DollarSign className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Cost Efficiency</h3>
            <p className="text-gray-600 dark:text-gray-400">
              ScanMe eliminates printing costs and reduces operational overhead, directly improving restaurant profitability.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/40 rounded-full flex items-center justify-center mx-auto mb-6">
              <Smartphone className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Customer Experience</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Instant access to menus, real-time order tracking, and multi-language support create superior customer experiences.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/40 rounded-full flex items-center justify-center mx-auto mb-6">
              <BarChart3 className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Data-Driven Insights</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Comprehensive analytics help restaurants optimize menus, pricing, and operations based on real customer data.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-8 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Modernize Your Restaurant?</h2>
          <p className="text-xl mb-8">
            Transform your restaurant operations with ScanMe digital menu technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/product" 
              className="inline-flex items-center px-8 py-3 bg-white text-purple-600 rounded-lg font-medium transition-all hover:bg-gray-100"
            >
              Learn More About ScanMe
            </Link>
            <a 
              href="https://wa.me/33766720023" 
              className="inline-flex items-center px-8 py-3 bg-transparent border border-white text-white hover:bg-white/10 rounded-lg font-medium transition-all"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScanMeCaseStudy;