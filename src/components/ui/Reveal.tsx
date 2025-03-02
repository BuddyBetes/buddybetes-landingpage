
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: 1 | 2 | 3 | 4;
  threshold?: number;
}

const Reveal: React.FC<RevealProps> = ({ 
  children, 
  className,
  delay,
  threshold = 0.1
}) => {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.classList.add('active');
        }
      },
      {
        threshold,
      }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);
  
  return (
    <div 
      ref={ref} 
      className={cn(
        'reveal', 
        delay && `reveal-delay-${delay}`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Reveal;
