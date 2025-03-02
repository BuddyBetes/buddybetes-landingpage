
import React from 'react';
import { Linkedin } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image, bio, linkedin }) => {
  return (
    <div className="data-card transition-all duration-300 hover:shadow-md">
      <div className="aspect-square overflow-hidden rounded-xl mb-6">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>
      <div>
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-2xl font-semibold">{name}</h3>
          {linkedin && (
            <a 
              href={linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-diabetes-green hover:text-diabetes-green-dark transition-colors"
              aria-label={`${name}'s LinkedIn`}
            >
              <Linkedin className="h-5 w-5" />
            </a>
          )}
        </div>
        <p className="text-diabetes-green font-medium text-sm mb-4">{role}</p>
        <p className="text-diabetes-muted text-sm">{bio}</p>
      </div>
    </div>
  );
};

export default TeamMember;
