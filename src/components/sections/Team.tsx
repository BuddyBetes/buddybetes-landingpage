
import React from 'react';
import Container from '@/components/ui/Container';
import TeamMember from '@/components/ui/TeamMember';
import Reveal from '@/components/ui/Reveal';
import { Linkedin } from 'lucide-react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Princess Ventures',
      role: 'Solo Founder & CEO',
      image: 'public/lovable-uploads/c27334dc-7117-4559-815d-569658be3dd9.png',
      bio: 'With a passion for healthcare technology innovation, Princess founded BuddyBetes to revolutionize diabetes care and make management more accessible to everyone.',
      linkedin: 'https://www.linkedin.com/in/princessventures/'
    }
  ];
  
  return (
    <section id="team" className="section-spacing">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <div className="inline-block bg-primary/10 px-3 py-1 rounded-full mb-4">
              <span className="text-sm font-medium text-primary">Founder</span>
            </div>
          </Reveal>
          
          <Reveal delay={1}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Meet the Visionary Behind BuddyBetes</h2>
          </Reveal>
          
          <Reveal delay={2}>
            <p className="text-muted-foreground">
              BuddyBetes combines medical expertise, technical innovation, and personal experience with diabetes to create the most effective management solution.
            </p>
          </Reveal>
        </div>
        
        <div className="max-w-xl mx-auto">
          {teamMembers.map((member, index) => (
            <Reveal key={index} delay={(index + 1) as 1 | 2 | 3}>
              <TeamMember
                name={member.name}
                role={member.role}
                image={member.image}
                bio={member.bio}
                linkedin={member.linkedin}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Team;
