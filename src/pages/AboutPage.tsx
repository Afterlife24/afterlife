import React from 'react';
import { Award, Users, Briefcase, BookOpen } from 'lucide-react';
import TeamMember from '../components/TeamMember';
const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.pexels.com/photos/5439153/pexels-photo-5439153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Former AI research lead with 15+ years of industry experience. Passionate about making AI accessible to businesses of all sizes."
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "AI engineer with extensive experience in machine learning and natural language processing. Led development of our core AI framework."
    },
    {
      name: "Elena Rodriguez",
      role: "Lead Designer",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "UX/UI expert specialized in creating intuitive interfaces for complex systems. Ensures our technology is accessible to everyone."
    },
    {
      name: "David Okafor",
      role: "Head of Business Development",
      image: "https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
      bio: "Former restaurant owner turned tech enthusiast. Brings real-world experience to help shape our restaurant technology solutions."
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About Our Company</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We're on a mission to transform businesses through intelligent AI solutions
          </p>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Founded in 2025, our company emerged from a simple observation: despite the 
              tremendous advances in AI technology, many businesses still struggle to implement 
              these solutions in meaningful ways.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              We started with a focus on the restaurant industry, creating ScanMe to solve 
              real challenges faced by restaurant owners. From there, we expanded our services 
              to help businesses across all industries leverage the power of AI and modern web 
              technologies.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Today, we're proud to serve clients ranging from small local businesses to 
              large enterprises, all with the same commitment to excellence and innovation.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Company founding team" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
      
      {/* Company Values */}
      <section className="py-16 px-4 md:px-8 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 mb-6">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We strive for excellence in every solution we deliver, setting high standards and constantly raising the bar.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900 mb-6">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Collaboration</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We believe in working closely with our clients, understanding their needs, and creating solutions together.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 mb-6">
                <Briefcase className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We embrace new ideas and technologies, constantly seeking better ways to solve problems and create value.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-900 mb-6">
                <BookOpen className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Accessibility</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We're committed to making advanced technology accessible and usable for businesses of all sizes.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            The talented people behind our success
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember 
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
              bio={member.bio}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
