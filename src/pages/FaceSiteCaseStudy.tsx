import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, TrendingUp, Clock, Globe, Bot, Sparkles } from 'lucide-react';

const FaceSiteCaseStudy: React.FC = () => {
  const metrics = [
    { label: "Visitor Engagement", value: "+300%", icon: <Users className="h-6 w-6" /> },
    { label: "Conversion Rate", value: "+150%", icon: <TrendingUp className="h-6 w-6" /> },
    { label: "Response Time", value: "< 2 sec", icon: <Clock className="h-6 w-6" /> },
    { label: "Languages Supported", value: "25+", icon: <Globe className="h-6 w-6" /> }
  ];

  const challenges = [
    "Static websites provide no real-time interaction",
    "Visitors struggle to find information quickly",
    "No personalized experience for different user types",
    "Limited engagement leads to high bounce rates",
    "No 24/7 customer support availability"
  ];

  const solutions = [
    "AI avatar provides instant, human-like interactions",
    "Intelligent conversation guides users to relevant information",
    "Personalized experiences based on visitor intent",
    "Engaging conversations reduce bounce rates significantly",
    "24/7 availability with consistent brand personality"
  ];

  const results = [
    "300% increase in visitor engagement time",
    "150% improvement in conversion rates",
    "85% reduction in support ticket volume",
    "Real-time multilingual support for global audiences",
    "Consistent brand experience across all interactions"
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="py-12 px-4 md:px-8 bg-gradient-to-br from-cyan-900 via-cyan-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center text-cyan-200 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-cyan-500/20 text-cyan-200 px-4 py-2 rounded-full text-sm font-medium mb-4">
                Case Study
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Why FaceSite Matters
              </h1>
              <p className="text-xl text-cyan-100 mb-8">
                Transforming static websites into intelligent, human-like entities that engage, guide, and convert visitors through personalized AI interactions.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Project Overview</h3>
              <div className="space-y-4">
                <div>
                  <span className="text-cyan-200 font-medium">Industry:</span>
                  <span className="ml-2">Web 4.0 Technology</span>
                </div>
                <div>
                  <span className="text-cyan-200 font-medium">Solution:</span>
                  <span className="ml-2">AI Avatar Integration</span>
                </div>
                <div>
                  <span className="text-cyan-200 font-medium">Timeline:</span>
                  <span className="ml-2">2-4 weeks implementation</span>
                </div>
                <div>
                  <span className="text-cyan-200 font-medium">Impact:</span>
                  <span className="ml-2">Revolutionary user experience</span>
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
            Measurable results from FaceSite implementation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center">
              <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/40 rounded-lg flex items-center justify-center mx-auto mb-4 text-cyan-600">
                {metric.icon}
              </div>
              <div className="text-3xl font-bold text-cyan-600 mb-2">{metric.value}</div>
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
                Traditional websites are static, impersonal, and fail to engage modern users who expect interactive, 
                personalized experiences. Businesses struggle with high bounce rates, low engagement, and the inability 
                to provide instant, human-like support to their visitors.
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
              <h3 className="text-2xl font-bold mb-6 text-center">Traditional Website Problems</h3>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-500 mb-2">73%</div>
                  <p className="text-gray-600 dark:text-gray-400">Average bounce rate for static websites</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-500 mb-2">15 sec</div>
                  <p className="text-gray-600 dark:text-gray-400">Average time visitors spend on static pages</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-500 mb-2">2.3%</div>
                  <p className="text-gray-600 dark:text-gray-400">Typical conversion rate without personalization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-8 rounded-xl">
            <div className="flex items-center mb-6">
              <Bot className="h-8 w-8 text-cyan-600 mr-3" />
              <h3 className="text-2xl font-bold">FaceSite AI Avatar</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              FaceSite transforms websites into intelligent entities with AI avatars that understand, engage, 
              and guide visitors through personalized conversations, creating human-like interactions at scale.
            </p>
            <div className="flex items-center">
              <Sparkles className="h-6 w-6 text-cyan-600 mr-2" />
              <span className="text-cyan-600 font-medium">Web 4.0 Technology</span>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The FaceSite Solution</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              FaceSite introduces Web 4.0 technology that transforms static websites into intelligent, 
              conversational entities. Our AI avatars provide instant, personalized interactions that 
              guide visitors, answer questions, and create memorable experiences.
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
              Transformative outcomes that prove FaceSite's value
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
              <h3 className="text-2xl font-bold mb-6 text-center">FaceSite Impact</h3>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-500 mb-2">24/7</div>
                  <p className="text-gray-600 dark:text-gray-400">Intelligent customer support availability</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-500 mb-2">25+</div>
                  <p className="text-gray-600 dark:text-gray-400">Languages supported automatically</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-500 mb-2">∞</div>
                  <p className="text-gray-600 dark:text-gray-400">Scalable conversations simultaneously</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why FaceSite Matters</h2>
          <div className="w-20 h-1 bg-cyan-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-cyan-100 dark:bg-cyan-900/40 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-cyan-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Human-Centric Design</h3>
            <p className="text-gray-600 dark:text-gray-400">
              FaceSite puts human interaction at the center of web experiences, making technology feel natural and approachable.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-cyan-100 dark:bg-cyan-900/40 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="h-8 w-8 text-cyan-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Business Growth</h3>
            <p className="text-gray-600 dark:text-gray-400">
              By dramatically improving engagement and conversion rates, FaceSite directly impacts business growth and revenue.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-cyan-100 dark:bg-cyan-900/40 rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe className="h-8 w-8 text-cyan-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Future-Ready</h3>
            <p className="text-gray-600 dark:text-gray-400">
              FaceSite represents the evolution to Web 4.0, preparing businesses for the future of digital interaction.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-8 bg-cyan-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Website?</h2>
          <p className="text-xl mb-8">
            Join the Web 4.0 revolution with FaceSite AI avatar technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/facesite" 
              className="inline-flex items-center px-8 py-3 bg-white text-cyan-600 rounded-lg font-medium transition-all hover:bg-gray-100"
            >
              Learn More About FaceSite
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

export default FaceSiteCaseStudy;