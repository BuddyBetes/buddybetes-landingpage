
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Team from '@/components/sections/Team';
import Newsletter from '@/components/sections/Newsletter';
import { HeartPulse } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Team />
      <Newsletter />
      
      <footer className="py-12 bg-white border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <img 
                src="../public/favicon.ico" 
                alt="BuddyBetes Logo" 
                className="h-8 w-8" 
              />
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
