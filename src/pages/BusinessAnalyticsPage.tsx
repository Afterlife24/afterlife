import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mic, MessageSquare, Video, Brain, Activity, Target } from 'lucide-react';

const BusinessAnalyticsPage: React.FC = () => {
  const features = [
    {
      title: "Voice Agents",
      description: "Enable natural, human-like conversations over phone or voice interfaces with intelligent telephony, speech input, and output capabilities.",
      icon: <Mic className="h-6 w-6 text-orange-500" />
    },
    {
      title: "RAG-Based Chatbots",
      description: "Deliver highly accurate, context-aware answers by combining Retrieval-Augmented Generation (RAG) with AI-powered conversational flows.",
      icon: <MessageSquare className="h-6 w-6 text-orange-500" />
    },
    {
      title: "Avatar RAG Agents",
      description: "Engage with lifelike AI avatars that can see, hear, and respond — holding natural conversations while executing commands.",
      icon: <Video className="h-6 w-6 text-orange-500" />
    },
    {
      title: "Contextual Understanding",
      description: "Deep context-awareness across voice, text, and video channels to keep conversations coherent and helpful.",
      icon: <Brain className="h-6 w-6 text-orange-500" />
    },
    {
      title: "Real-Time Orchestration",
      description: "Orchestrate multi-modal interactions in real time for smooth user experiences and immediate actions.",
      icon: <Activity className="h-6 w-6 text-orange-500" />
    },
    {
      title: "Accuracy & Safety",
      description: "Robust prompt engineering, retrieval controls, and safeguards to ensure reliable, safe, and compliant responses.",
      icon: <Target className="h-6 w-6 text-orange-500" />
    }
  ];

 

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-orange-900 via-orange-800 to-red-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">AI Services</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Our AI solutions bring human-like intelligence to every interaction — voice, text, and video. From Voice Agents to RAG Chatbots and Avatar RAG Agents, we build adaptable systems for real-world engagement.
          </p>
          <a 
            href="https://wa.me/33766720023" 
            className="inline-flex items-center px-8 py-3 bg-white text-orange-900 rounded-lg font-medium transition-all hover:bg-gray-100"
          >
            Talk to an AI Expert
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Capabilities</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Build conversational, multimodal experiences that understand context, act in real time, and stay safe.
          </p>
          <div className="w-20 h-1 bg-orange-600 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/40 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AI Solutions */}
      

      {/* Benefits */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="AI agents" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Bring AI into your products</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/40 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <Activity className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Real-Time Interaction</h3>
                  <p className="text-gray-600 dark:text-gray-400">Deliver immediate, context-aware responses across voice, chat, and video channels.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/40 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <Target className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Accurate & Contextual</h3>
                  <p className="text-gray-600 dark:text-gray-400">Use RAG and domain knowledge to provide precise answers and reduce hallucinations.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/40 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <Brain className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Adaptable & Secure</h3>
                  <p className="text-gray-600 dark:text-gray-400">Customizable personas, policies, and integrations that respect privacy and compliance needs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-8 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to build with AI?</h2>
          <p className="text-xl mb-8">
            Let’s design an AI solution that matches your product, customers, and compliance needs.
          </p>
          <a 
            href="https://wa.me/33766720023" 
            className="inline-flex items-center px-8 py-3 bg-white text-orange-600 rounded-lg font-medium transition-all hover:bg-gray-100"
          >
            Book an AI Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default BusinessAnalyticsPage;
