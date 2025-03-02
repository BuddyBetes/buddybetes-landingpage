
import React from 'react';
import Container from '@/components/ui/Container';
import FeatureCard from '@/components/ui/FeatureCard';
import Reveal from '@/components/ui/Reveal';
import { ActivitySquare, PieChart, Calendar, Users, Bell, BarChart4 } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: ActivitySquare,
      title: 'Blood Glucose Tracking',
      description: 'Easily log and monitor your blood glucose levels with intuitive graphs and trends visualization.'
    },
    {
      icon: PieChart,
      title: 'Nutrition Management',
      description: 'Track your meals and understand how different foods affect your glucose levels over time.'
    },
    {
      icon: Calendar,
      title: 'Medication Reminders',
      description: 'Never miss a dose with customizable medication and insulin reminders.'
    },
    {
      icon: Users,
      title: 'Caregiver Sharing',
      description: 'Share your data with family members or healthcare providers to better manage your care.'
    },
    {
      icon: Bell,
      title: 'Smart Alerts',
      description: 'Receive notifications for high or low glucose levels and other important health events.'
    },
    {
      icon: BarChart4,
      title: 'Comprehensive Reports',
      description: 'Generate detailed reports to share with your healthcare team for improved treatment decisions.'
    }
  ];
  
  return (
    <section id="features" className="section-spacing overflow-hidden bg-secondary/50">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <div className="inline-block bg-primary/10 px-3 py-1 rounded-full mb-4">
              <span className="text-sm font-medium text-primary">Features</span>
            </div>
          </Reveal>
          
          <Reveal delay={1}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Simplify Your Diabetes Management</h2>
          </Reveal>
          
          <Reveal delay={2}>
            <p className="text-muted-foreground">
              BuddyBetes provides all the tools you need to take control of your health and manage your diabetes with confidence.
            </p>
          </Reveal>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Reveal key={index} delay={(index % 3 + 1) as 1 | 2 | 3 | 4}>
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;
