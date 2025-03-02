
import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

const Container: React.FC<ContainerProps> = ({ 
  children, 
  className, 
  as: Component = 'div',
  ...props 
}) => {
  return (
    <Component 
      className={cn("w-full max-w-6xl mx-auto px-4 sm:px-6", className)}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Container;
