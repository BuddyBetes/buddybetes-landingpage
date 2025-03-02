
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Team from '@/components/sections/Team';
import Partners from '@/components/sections/Partners';
import Newsletter from '@/components/sections/Newsletter';
import { HeartPulse } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Team />
      <Partners />
      <Newsletter />
      
      <footer className="py-12 bg-white border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <img 
                src="/icon.png" 
                alt="BuddyBetes Logo" 
                className="h-8 w-8"
                onError={(e) => {
                  console.log("Footer logo failed to load, using fallback icon");
                  e.currentTarget.style.display = 'none';
                }}
              />
              <HeartPulse className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">BuddyBetes</span>
            </div>
            
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} BuddyBetes. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
