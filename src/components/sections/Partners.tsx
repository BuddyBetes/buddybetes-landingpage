
import React from 'react';
import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';

const Partners: React.FC = () => {
  // Correct partner data with absolute paths
  const partners = [
    {
      name: 'QBO Innovation Hub',
      image: '/qbo.png',
      alt: 'QBO Innovation Hub logo'
    },
    {
      name: 'Make Sense Asia',
      image: '/makesense.png',
      alt: 'Make Sense Asia logo'
    },
    {
      name: 'Startup Competition QC',
      image: '/startupqc.png',
      alt: 'Startup Competition QC logo'
    },
    {
      name: 'Leave a Nest Philippines',
      image: '/leaveanest.png',
      alt: 'Leave a Nest Philippines logo'
    },
    {
      name: 'Ateneo Blue Nest',
      image: '/bluenest.png',
      alt: 'Ateneo Blue Nest logo'
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
                className="h-32 md:h-40 w-full flex items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <img 
                  src={partner.image} 
                  alt={partner.alt} 
                  className="max-h-full max-w-full object-contain"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    e.currentTarget.src = "/placeholder.svg";
                    console.log(`Image for ${partner.name} failed to load, using placeholder`);
                  }}
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
