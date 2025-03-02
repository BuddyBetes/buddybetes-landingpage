
import React from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image, bio }) => {
  return (
    <div className="data-card transition-all duration-300 hover:shadow-md">
      <div className="aspect-[3/2] overflow-hidden rounded-xl mb-4">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-diabetes-green font-medium text-sm mb-4">{role}</p>
        <p className="text-diabetes-muted text-sm">{bio}</p>
      </div>
    </div>
  );
};

export default TeamMember;
