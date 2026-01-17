import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageCircle, MapPin, Clock, CheckCircle } from "lucide-react";
import Reveal from "@/components/animations/Reveal";

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Ready for a spotless space?</h2>
            <p className="mt-3 text-muted-foreground text-lg">Book your cleaning service in minutes</p>
          </Reveal>
          
          <Reveal delay={200} className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Options */}
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground text-lg mb-6">Get in touch</h3>
                
                <Button asChild size="lg" className="w-full rounded-xl justify-start text-left h-14">
                  <a href="tel:+971502015003">
                    <Phone className="mr-3 h-5 w-5" />
                    <div>
                      <div className="font-semibold">Call Us</div>
                      <div className="text-xs opacity-80">+971 50 201 5003</div>
                    </div>
                  </a>
                </Button>
                
                <Button asChild size="lg" variant="outline" className="w-full rounded-xl justify-start text-left h-14">
                  <a href="https://wa.me/971502015003" target="_blank" rel="noreferrer">
                    <MessageCircle className="mr-3 h-5 w-5 text-green-600" />
                    <div>
                      <div className="font-semibold">WhatsApp</div>
                      <div className="text-xs text-muted-foreground">Quick response</div>
                    </div>
                  </a>
                </Button>
                
                <Button asChild size="lg" variant="outline" className="w-full rounded-xl justify-start text-left h-14">
                  <a href="mailto:info@airalight.ae">
                    <Mail className="mr-3 h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold">Email Us</div>
                      <div className="text-xs text-muted-foreground">info@airalight.ae</div>
                    </div>
                  </a>
                </Button>
              </div>
              
              {/* Info */}
              <div className="space-y-6">
                <h3 className="font-semibold text-foreground text-lg mb-6">Why choose us?</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium text-foreground">Verified Professionals</div>
                      <div className="text-sm text-muted-foreground">Background-checked & trained staff</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium text-foreground">Flexible Scheduling</div>
                      <div className="text-sm text-muted-foreground">Book at your convenience</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium text-foreground">All Dubai Areas</div>
                      <div className="text-sm text-muted-foreground">We cover the entire city</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
