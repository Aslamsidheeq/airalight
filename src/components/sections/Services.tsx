import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Home, Building2, ShowerHead, Sofa, MoveRight, Sparkles, Utensils, Bath, Droplets } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import StaggerReveal from "@/components/animations/StaggerReveal";
import { useState } from "react";

const services = [
  { title: "Home Cleaning", icon: Home, desc: "Regular, reliable cleaning for apartments and villas.", fullDesc: "Keep your home beautifully clean with our regular Home Cleaning service. We cover all living areas, bedrooms, kitchens, and bathrooms with detailed attention. Benefits include improved indoor air quality, a healthier living environment, and more time for you." },
  { title: "Office Cleaning", icon: Building2, desc: "Keep workspaces spotless and productive.", fullDesc: "A clean office is key to a productive workplace. Our Office Cleaning services ensure your business environment is spotless and professional. Studies show employees work more efficiently in a tidy office, and our service helps reduce sick days by eliminating germs." },
  { title: "Deep Cleaning", icon: Sparkles, desc: "Top-to-bottom attention for a fresh start.", fullDesc: "Our Deep Cleaning service targets hidden dirt and grime in every corner. This thorough cleaning is ideal for seasonal refreshes, pre-event preparation, or post-construction clean-ups. Deep cleaning eliminates bacteria, mold, and allergens that regular cleaning often misses, improving hygiene and air quality" },
  { title: "After Party Cleaning", icon: Sparkles, desc: "We tidy up so you can relax.", fullDesc: "Relax after your event – let us handle the After-Party Cleaning! Our team quickly restores order so you can enjoy the memories, not the mess." },
  { title: "Balcony Deep Cleaning", icon: Droplets, desc: "Outdoor spaces, scrubbed and refreshed.", fullDesc: "Make your outdoor space inviting again with our Balcony Deep Cleaning. We remove accumulated dust, dirt, and stains so you can enjoy your balcony or terrace in comfort." },
  { title: "Move In & Move Out Cleaning", icon: MoveRight, desc: "Detailed cleaning for a smooth transition.", fullDesc: "Moving? Get your deposit back and start fresh with our Move In & Move Out Cleaning. We perform a top-to-bottom clean, ensuring every inch of the property is sanitized." },
  { title: "Kitchen Deep Cleaning", icon: Utensils, desc: "Grease removal and surface sanitation.", fullDesc: "Our specialized Kitchen Deep Cleaning tackles grease and buildup to revitalize the heart of your home. A clean kitchen promotes better health and efficiency." },
  { title: "Bathroom Deep Cleaning", icon: Bath, desc: "Tiles, grout and fixtures shining like new.", fullDesc: "Step into a sparkling bathroom every time with our Bathroom Deep Cleaning. We eliminate mold, mildew, and soap scum for a hygienic space." },
  { title: "Floor Washing & Scrubbing", icon: ShowerHead, desc: "Hard floors thoroughly washed and scrubbed.", fullDesc: "Restore shine and cleanliness to all floor types with our Floor Washing & Scrubbing service. Remove stubborn dirt and grime without damaging surfaces." },
  { title: "Sofa & Mattress Cleaning", icon: Sofa, desc: "Fabric care for hygiene and freshness.", fullDesc: "Refresh your furniture and bedroom with Sofa and Mattress Cleaning. Professional cleaning extends the life of upholstery and ensures a healthier home." }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  const serviceCards = services.map((service) => {
    const { title, icon: Icon, desc } = service;
    return (
      <Card 
        key={title} 
        onClick={() => setSelectedService(service)}
        className="group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 cursor-pointer active:scale-95 border-border/50 hover:border-primary/20"
      >
        <CardHeader>
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:rotate-3">
            <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
          </div>
          <CardTitle className="mt-3 font-display text-xl group-hover:text-primary transition-colors duration-300">{title}</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{desc}</CardContent>
      </Card>
    );
  });

  return (
    <>
      <section id="services" className="py-16 md:py-24 overflow-hidden">
        <div className="container">
          <Reveal className="mx-auto max-w-2xl text-center mb-12" progressive>
            <h2 className="text-3xl md:text-4xl font-display font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">Our Cleaning Services</h2>
            <p className="mt-3 text-muted-foreground text-lg">Trusted professionals delivering spotless results across Dubai.</p>
          </Reveal>
          
          <StaggerReveal 
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            staggerDelay={150}
            direction="up"
          >
            {serviceCards}
          </StaggerReveal>
        </div>
      </section>

      <Dialog open={!!selectedService} onOpenChange={(open) => !open && setSelectedService(null)}>
        <DialogContent className="sm:max-w-md animate-in fade-in-0 zoom-in-95 slide-in-from-bottom-4 duration-300">
          {selectedService && (
            <>
              <DialogHeader>
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-4 animate-in zoom-in-50 duration-500">
                  <selectedService.icon className="h-8 w-8" />
                </div>
                <DialogTitle className="text-2xl font-display">{selectedService.title}</DialogTitle>
              </DialogHeader>
              <DialogDescription className="text-base leading-relaxed pt-2">
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
