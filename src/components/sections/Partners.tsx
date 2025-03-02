
import React from 'react';
import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';

const Partners: React.FC = () => {
  const partners = [
    {
      name: 'QBO Innovation Hub',
      image: '/lovable-uploads/df530e00-6155-41f1-989b-ff8ca36be594.png'
    },
    {
      name: 'Make Sense Asia',
      image: '/lovable-uploads/1560c097-a806-4c07-b90f-b5760f88e719.png'
    },
    {
      name: 'Startup Competition QC',
      image: '/lovable-uploads/20c9a57b-be2b-4901-9d28-1e29380a478a.png'
    },
    {
      name: 'Leave a Nest Philippines',
      image: '/lovable-uploads/ef656306-7025-4770-92f1-9562f59531a3.png'
    },
    {
      name: 'Ateneo Blue Nest',
      image: '/lovable-uploads/3734c5ef-771b-4722-bcf3-53c207024491.png'
    }
  ];

  return (
    <section id="partners" className="section-spacing bg-gray-50">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Reveal>
            <div className="inline-block bg-primary/10 px-3 py-1 rounded-full mb-4">
              <span className="text-sm font-medium text-primary">Our Partners</span>
            </div>
          </Reveal>
          
          <Reveal delay={1}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Proudly Supported By</h2>
          </Reveal>
          
          <Reveal delay={2}>
            <p className="text-muted-foreground">
              We're grateful to work with organizations committed to improving health outcomes for people with diabetes.
            </p>
          </Reveal>
        </div>
        
        <Reveal delay={3}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="h-24 flex items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <img 
                  src={partner.image} 
                  alt={partner.name} 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
};

export default Partners;
