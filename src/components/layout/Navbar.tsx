
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import Container from '@/components/ui/Container';
import { HeartPulse } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <Container className="flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2 group">
        <img 
                src="/public/favicon.ico" 
                alt="BuddyBetes Logo" 
                className="h-8 w-8" 
          />
          <span className="text-xl font-bold tracking-tight">BuddyBetes</span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Features</a>
          <a href="#team" className="text-sm font-medium hover:text-primary transition-colors">Team</a>
          <a href="#subscribe" className="text-sm font-medium hover:text-primary transition-colors">Subscribe</a>
          <button className="w-full px-4 py-3 bg-primary hover:bg-primary/90 text-white font-medium  rounded-lg shadow-md shadow-primary/20 transition-all duration-200">
            Coming soon
          </button>
        </nav>

        <button className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </Container>
    </header>
  );
};

export default Navbar;
