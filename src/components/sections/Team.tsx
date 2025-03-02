
import React from 'react';
import Container from '@/components/ui/Container';
import TeamMember from '@/components/ui/TeamMember';
import Reveal from '@/components/ui/Reveal';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      bio: 'With over 10 years of experience in healthcare technology, Sarah founded BuddyBetes to revolutionize diabetes care.'
    },
    {
      name: 'Michael Chen',
      role: 'Chief Medical Officer',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      bio: 'As an endocrinologist with a passion for technology, Michael ensures BuddyBetes meets the highest medical standards.'
    },
    {
      name: 'Alex Rivera',
      role: 'Head of Product',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      bio: 'Alex combines user experience expertise with personal experience as a Type 1 diabetic to create intuitive solutions.'
    }
  ];
  
  return (
    <section id="team" className="section-spacing">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <div className="inline-block bg-primary/10 px-3 py-1 rounded-full mb-4">
              <span className="text-sm font-medium text-primary">Our Team</span>
            </div>
          </Reveal>
          
          <Reveal delay={1}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Meet the Experts Behind BuddyBetes</h2>
          </Reveal>
          
          <Reveal delay={2}>
            <p className="text-muted-foreground">
              Our dedicated team combines medical expertise, technical innovation, and personal experience with diabetes to create the most effective management solution.
            </p>
          </Reveal>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Reveal key={index} delay={(index + 1) as 1 | 2 | 3}>
              <TeamMember
                name={member.name}
                role={member.role}
                image={member.image}
                bio={member.bio}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Team;
