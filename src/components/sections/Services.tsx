import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Home, Building2, Sparkles, MoveRight, UtensilsCrossed, Bath, Droplets, Sofa, PartyPopper, Waves } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import StaggerReveal from "@/components/animations/StaggerReveal";
import { useState } from "react";

const services = [
  { 
    title: "Home Cleaning", 
    icon: Home, 
    desc: "Regular & reliable cleaning for apartments and villas",
    fullDesc: "Keep your home beautifully clean with our regular Home Cleaning service. We cover all living areas, bedrooms, kitchens, and bathrooms with detailed attention."
  },
  { 
    title: "Office Cleaning", 
    icon: Building2, 
    desc: "Keep workspaces spotless and productive",
    fullDesc: "A clean office is key to a productive workplace. Our Office Cleaning services ensure your business environment is spotless and professional."
  },
  { 
    title: "Deep Cleaning", 
    icon: Sparkles, 
    desc: "Top-to-bottom attention for a fresh start",
    fullDesc: "Our Deep Cleaning service targets hidden dirt and grime in every corner. Ideal for seasonal refreshes, pre-event preparation, or post-construction clean-ups."
  },
  { 
    title: "After Party Cleaning", 
    icon: PartyPopper, 
    desc: "We tidy up so you can relax",
    fullDesc: "Relax after your event – let us handle the After-Party Cleaning! Our team quickly restores order so you can enjoy the memories, not the mess."
  },
  { 
    title: "Move In/Out Cleaning", 
    icon: MoveRight, 
    desc: "Detailed cleaning for smooth transitions",
    fullDesc: "Moving? Get your deposit back and start fresh with our Move In & Move Out Cleaning. We perform a top-to-bottom clean, ensuring every inch is sanitized."
  },
  { 
    title: "Kitchen Deep Clean", 
    icon: UtensilsCrossed, 
    desc: "Grease removal and surface sanitation",
    fullDesc: "Our specialized Kitchen Deep Cleaning tackles grease and buildup to revitalize the heart of your home. A clean kitchen promotes better health."
  },
  { 
    title: "Bathroom Deep Clean", 
    icon: Bath, 
    desc: "Tiles, grout and fixtures shining like new",
    fullDesc: "Step into a sparkling bathroom every time with our Bathroom Deep Cleaning. We eliminate mold, mildew, and soap scum for a hygienic space."
  },
  { 
    title: "Balcony Cleaning", 
    icon: Droplets, 
    desc: "Outdoor spaces, scrubbed and refreshed",
    fullDesc: "Make your outdoor space inviting again with our Balcony Deep Cleaning. We remove accumulated dust, dirt, and stains."
  },
  { 
    title: "Floor Washing", 
    icon: Waves, 
    desc: "Hard floors thoroughly washed and scrubbed",
    fullDesc: "Restore shine and cleanliness to all floor types with our Floor Washing & Scrubbing service. Remove stubborn dirt without damaging surfaces."
  },
  { 
    title: "Sofa & Mattress", 
    icon: Sofa, 
    desc: "Fabric care for hygiene and freshness",
    fullDesc: "Refresh your furniture and bedroom with Sofa and Mattress Cleaning. Professional cleaning extends the life of upholstery."
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <>
      <section id="services" className="py-16 md:py-24 bg-secondary/50">
        <div className="container">
          <Reveal className="text-center mb-12" progressive>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">What are you looking for?</h2>
            <p className="mt-3 text-muted-foreground text-lg">Professional cleaning services for every need</p>
          </Reveal>
          
          <StaggerReveal 
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
            staggerDelay={80}
            direction="up"
          >
            {services.map((service) => {
              const { title, icon: Icon, desc } = service;
              return (
                <Card 
                  key={title} 
                  onClick={() => setSelectedService(service)}
                  className="group cursor-pointer bg-card hover:shadow-lg transition-all duration-300 border-0 rounded-xl overflow-hidden"
                >
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-semibold text-foreground text-sm mb-1">{title}</h3>
                    <p className="text-xs text-muted-foreground line-clamp-2">{desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </StaggerReveal>
        </div>
      </section>

      <Dialog open={!!selectedService} onOpenChange={(open) => !open && setSelectedService(null)}>
        <DialogContent className="sm:max-w-md rounded-2xl">
          {selectedService && (
            <>
              <DialogHeader>
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <selectedService.icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
                </div>
                <DialogTitle className="text-2xl font-bold text-center">{selectedService.title}</DialogTitle>
              </DialogHeader>
              <DialogDescription className="text-base text-center leading-relaxed pt-2">
                {selectedService.fullDesc}
              </DialogDescription>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Services;
