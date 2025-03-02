
import React from 'react';
import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';

const Newsletter: React.FC = () => {
  return (
    <section id="subscribe" className="section-spacing bg-gradient-to-b from-white to-blue-50">
      <Container className="max-w-5xl">
        <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 -right-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 -left-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          </div>
          
          <div className="text-center max-w-3xl mx-auto mb-8">
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
            <div 
              id="mc_embed_shell" 
              className="max-w-2xl mx-auto"
              dangerouslySetInnerHTML={{ 
                __html: `
                <div id="mc_embed_signup">
                  <form action="https://buddybetes.us22.list-manage.com/subscribe/post?u=cfbc83a07a3542e2559bace72&amp;id=c81e3803c2&amp;f_id=0001cfe1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
                    <div id="mc_embed_signup_scroll">
                      <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
                      <div class="mc-field-group">
                        <label for="mce-EMAIL">Email Address <span class="asterisk">*</span></label>
                        <input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required="" value="">
                      </div>
                      <div class="mc-field-group">
                        <label for="mce-FNAME">First Name <span class="asterisk">*</span></label>
                        <input type="text" name="FNAME" class="required text" id="mce-FNAME" required="" value="">
                      </div>
                      <div id="mce-responses" class="clear foot">
                        <div class="response" id="mce-error-response" style="display: none;"></div>
                        <div class="response" id="mce-success-response" style="display: none;"></div>
                      </div>
                      <div aria-hidden="true" style="position: absolute; left: -5000px;">
                        <input type="text" name="b_cfbc83a07a3542e2559bace72_c81e3803c2" tabindex="-1" value="">
                      </div>
                      <div class="optionalParent">
                        <div class="clear foot">
                          <input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button" value="Subscribe">
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script>
                <script type="text/javascript">(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
                `
              }}
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
};

export default Newsletter;
