import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Building2, ShowerHead, Sofa, MoveRight, Sparkles, Utensils, Bath, Droplets } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import StaggerReveal from "@/components/animations/StaggerReveal";

const services = [
  { title: "Home Cleaning", icon: Home, desc: "Regular, reliable cleaning for apartments and villas." },
  { title: "Office Cleaning", icon: Building2, desc: "Keep workspaces spotless and productive." },
  { title: "Deep Cleaning", icon: Sparkles, desc: "Top-to-bottom attention for a fresh start." },
  { title: "After Party Cleaning", icon: Sparkles, desc: "We tidy up so you can relax." },
  { title: "Balcony Deep Cleaning", icon: Droplets, desc: "Outdoor spaces, scrubbed and refreshed." },
  { title: "Move In & Move Out Cleaning", icon: MoveRight, desc: "Detailed cleaning for a smooth transition." },
  { title: "Kitchen Deep Cleaning", icon: Utensils, desc: "Grease removal and surface sanitation." },
  { title: "Bathroom Deep Cleaning", icon: Bath, desc: "Tiles, grout and fixtures shining like new." },
  { title: "Floor Washing & Scrubbing", icon: ShowerHead, desc: "Hard floors thoroughly washed and scrubbed." },
  { title: "Sofa & Mattress Cleaning", icon: Sofa, desc: "Fabric care for hygiene and freshness." }
];

const Services = () => {
  const serviceCards = services.map(({ title, icon: Icon, desc }) => (
    <Card key={title} className="group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 cursor-pointer active:scale-95 border-border/50 hover:border-primary/20">
      <CardHeader>
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:rotate-3">
          <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
        </div>
        <CardTitle className="mt-3 font-display text-xl group-hover:text-primary transition-colors duration-300">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{desc}</CardContent>
    </Card>
  ));

  return (
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
  );
};

export default Services;
