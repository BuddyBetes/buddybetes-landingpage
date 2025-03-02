
import React from 'react';
import Container from '@/components/ui/Container';
import { HeartPulse } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 overflow-hidden">
      <Container className="relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 -right-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -left-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <Reveal>
              <div className="inline-flex items-center space-x-2 bg-primary/10 px-3 py-1 rounded-full mb-6">
                <HeartPulse className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Diabetes Management, Simplified</span>
              </div>
            </Reveal>
            
            <Reveal delay={1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6 text-balance">
                Manage Your Diabetes <br /> With Confidence
              </h1>
            </Reveal>
            
            <Reveal delay={2}>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
                BuddyBetes helps you effortlessly track your blood glucose levels, diet, and other key health data, making diabetes management easier and more intuitive.
              </p>
            </Reveal>
            
            <Reveal delay={3}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <a 
                  href="#features" 
                  className="inline-flex items-center justify-center space-x-2 hover:text-primary transition-colors w-full sm:w-auto"
                >
                  <span>Learn More</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>
            </Reveal>
          </div>
          
          <div className="relative">
            <Reveal delay={2}>
              <div className="relative mx-auto w-full max-w-md">
                <div className="aspect-[4/5] bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-xl shadow-primary/10 overflow-hidden border border-white/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-30" />
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                    alt="BuddyBetes App" 
                    className="w-full h-full object-cover mix-blend-overlay"
                    loading="lazy"
                  />
                  
                  {/* Enhanced Glucose Tracking card with hover effect and pulse animation */}
                  <div 
                    className="absolute top-8 left-1/2 -translate-x-1/2 w-48 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/30 
                    hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer animate-float"
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-3 h-3 rounded-full bg-primary animate-pulse-subtle" />
                      <span className="text-sm font-medium">Glucose Tracking</span>
                    </div>
                    <div className="h-10 bg-blue-50 rounded-md flex items-center justify-center text-xs text-gray-500">
                      Latest: 120 mg/dL
                    </div>
                  </div>
                  
                  {/* Enhanced Daily Progress card with hover effect and different animation */}
                  <div 
                    className="absolute bottom-8 right-4 w-44 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/30 
                    hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:translate-x-1 cursor-pointer animate-float delay-300"
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse-subtle" />
                      <span className="text-sm font-medium">Daily Progress</span>
                    </div>
                    <div className="h-10 bg-blue-50 rounded-md flex items-center justify-center text-xs text-gray-500">
                      <div className="w-full px-3">
                        <div className="w-3/4 h-2 bg-primary rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
