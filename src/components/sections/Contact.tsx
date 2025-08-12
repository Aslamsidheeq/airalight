import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageSquare } from "lucide-react";
import Reveal from "@/components/animations/Reveal";

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary">
      <div className="container grid lg:grid-cols-2 gap-10 items-center">
        <div className="animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-display font-bold">Ready for a spotless space?</h2>
          <p className="mt-3 text-muted-foreground">Call or email us to book your cleaning. We’ll confirm your slot right away.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg" variant="hero" className="hover-scale">
              <a href="tel:+971502015003"><Phone className="mr-2"/> Call +971 50 201 5003</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="hover-scale">
              <a href="mailto:info@airalight.ae"><Mail className="mr-2"/> Email Us</a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="hover-scale">
              <a href="https://wa.me/971502015003" target="_blank" rel="noreferrer"><MessageSquare className="mr-2"/> WhatsApp</a>
            </Button>
          </div>
        </div>
        <div className="rounded-xl bg-card p-6 shadow-sm animate-scale-in">
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>• Home Cleaning • Office Cleaning • Deep Cleaning</li>
            <li>• Move In/Out • Kitchen Deep Clean • Bathroom Deep Clean</li>
            <li>• Floor Washing & Scrubbing • Sofa & Mattress Cleaning</li>
          </ul>
          <p className="mt-4 text-xs">Service Area: Dubai, UAE</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
