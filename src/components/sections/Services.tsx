import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Building2, ShowerHead, Sofa, MoveRight, Sparkles, Utensils, Bath, Droplets } from "lucide-react";

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
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold">Our Cleaning Services</h2>
          <p className="mt-3 text-muted-foreground">Trusted professionals delivering spotless results across Dubai.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ title, icon: Icon, desc }) => (
            <Card key={title} className="hover:shadow-glow transition-shadow">
              <CardHeader>
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-secondary text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <CardTitle className="mt-2 font-display text-xl">{title}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">{desc}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
