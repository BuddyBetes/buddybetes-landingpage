
import React from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image, bio }) => {
  return (
    <div className="glass-card rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="aspect-[3/2] overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-primary font-medium text-sm mb-4">{role}</p>
        <p className="text-muted-foreground text-sm">{bio}</p>
      </div>
    </div>
  );
};

export default TeamMember;
