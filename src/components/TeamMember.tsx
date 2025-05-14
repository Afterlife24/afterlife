import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image, bio }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-72 object-cover object-center"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{role}</p>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{bio}</p>
        <div className="flex space-x-3">
          <a 
            href="#" 
            className="text-gray-400 hover:text-blue-500 transition-colors"
            aria-label={`${name}'s LinkedIn profile`}
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a 
            href="#" 
            className="text-gray-400 hover:text-blue-500 transition-colors"
            aria-label={`${name}'s Twitter profile`}
          >
            <Twitter className="h-5 w-5" />
          </a>
          <a 
            href="#" 
            className="text-gray-400 hover:text-blue-500 transition-colors"
            aria-label={`Email ${name}`}
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;