
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon: Icon, 
  title, 
  description,
  className
}) => {
  return (
    <div className={cn(
      "data-card transition-all duration-300 hover:shadow-md group",
      className
    )}>
      <div className="w-12 h-12 mb-4 bg-diabetes-green-light rounded-full flex items-center justify-center group-hover:bg-diabetes-green/10 transition-colors">
        <Icon className="h-6 w-6 text-diabetes-green" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-diabetes-muted">{description}</p>
    </div>
  );
};

export default FeatureCard;
