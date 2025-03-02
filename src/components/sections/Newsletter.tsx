
import React from 'react';
import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';

const Newsletter: React.FC = () => {
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
            <div className="max-w-xl mx-auto bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <form action="https://buddybetes.us22.list-manage.com/subscribe/post?u=cfbc83a07a3542e2559bace72&amp;id=c81e3803c2&amp;f_id=0001cfe1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate space-y-6" target="_blank">
                <div className="space-y-4">
                  <p className="text-xs text-right text-diabetes-muted">
                    <span className="text-diabetes-orange">*</span> indicates required
                  </p>
                  
                  <div className="space-y-2">
                    <label htmlFor="mce-EMAIL" className="block text-sm font-medium">
                      Email Address <span className="text-diabetes-orange">*</span>
                    </label>
                    <input 
                      type="email" 
                      name="EMAIL" 
                      id="mce-EMAIL" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200" 
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="mce-FNAME" className="block text-sm font-medium">
                      First Name <span className="text-diabetes-orange">*</span>
                    </label>
                    <input 
                      type="text" 
                      name="FNAME" 
                      id="mce-FNAME" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200" 
                      required 
                    />
                  </div>
                  
                  <div id="mce-responses">
                    <div className="response hidden" id="mce-error-response"></div>
                    <div className="response hidden" id="mce-success-response"></div>
                  </div>
                  
                  {/* Hidden field for bot protection - do not remove */}
                  <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                    <input type="text" name="b_cfbc83a07a3542e2559bace72_c81e3803c2" tabIndex={-1} />
                  </div>
                </div>
                
                <div className="pt-2 text-left">
                  <button 
                    type="submit" 
                    name="subscribe" 
                    id="mc-embedded-subscribe" 
                    className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-lg shadow-md shadow-primary/20 transition-all duration-200 w-full sm:w-auto"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
};

export default Newsletter;
