
import React, { useState } from 'react';
import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // We'll use the form's native submission to Mailchimp, but we need to manually submit it
    try {
      const form = document.getElementById('mc-embedded-subscribe-form') as HTMLFormElement;
      if (form) {
        // Submit the form to Mailchimp
        form.submit();
        
        // Show toast message
        toast({
          title: "Thank you for subscribing!",
          description: "You'll receive our newsletter updates soon.",
        });
      }
    } catch (error) {
      toast({
        title: "Subscription error",
        description: "There was a problem with your subscription. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="subscribe" className="section-spacing bg-gradient-to-b from-white to-green-50">
      <Container className="max-w-5xl">
        <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-lg">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 -right-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 -left-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          </div>
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <Reveal>
              <div className="inline-block bg-primary/10 px-3 py-1 rounded-full mb-4">
                <span className="text-sm font-medium text-primary">Stay Connected</span>
              </div>
            </Reveal>
            
            <Reveal delay={1}>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            </Reveal>
            
            <Reveal delay={2}>
              <p className="text-muted-foreground">
                Get the latest updates, tips on diabetes management, and exclusive BuddyBetes content delivered right to your inbox.
              </p>
            </Reveal>
          </div>
          
          <Reveal delay={3}>
            <div className="max-w-xl mx-auto bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100">
              {/* This is the visible form users interact with */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">
                    <span className="text-diabetes-orange">*</span> indicates required
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email Address <span className="text-diabetes-orange">*</span>
                  </Label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-sm font-medium">
                    First Name <span className="text-diabetes-orange">*</span>
                  </Label>
                  <Input 
                    id="firstName" 
                    type="text" 
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    required 
                  />
                </div>
                
                <div className="w-full pt-2">
                  <button 
                    type="submit" 
                    className="w-full px-6 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg shadow-md shadow-primary/20 transition-all duration-200"
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Subscribing...
                      </span>
                    ) : (
                      "Subscribe"
                    )}
                  </button>
                </div>
              </form>
              
              {/* Hidden Mailchimp form that gets submitted programmatically */}
              <form 
                id="mc-embedded-subscribe-form" 
                action="https://buddybetes.us22.list-manage.com/subscribe/post?u=cfbc83a07a3542e2559bace72&amp;id=c81e3803c2&amp;f_id=0001cfe1f0" 
                method="post" 
                name="mc-embedded-subscribe-form" 
                className="validate hidden" 
                target="_blank"
                noValidate
              >
                <input type="email" name="EMAIL" id="mce-EMAIL" value={email} readOnly />
                <input type="text" name="FNAME" id="mce-FNAME" value={firstName} readOnly />
                
                {/* Hidden field for bot protection - do not remove */}
                <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                  <input type="text" name="b_cfbc83a07a3542e2559bace72_c81e3803c2" tabIndex={-1} />
                </div>
                
                <div id="mce-responses" className="clear foot">
                  <div className="response hidden" id="mce-error-response"></div>
                  <div className="response hidden" id="mce-success-response"></div>
                </div>
                
                <button 
                  type="submit" 
                  name="subscribe" 
                  id="mc-embedded-subscribe" 
                  className="hidden"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
};

export default Newsletter;
