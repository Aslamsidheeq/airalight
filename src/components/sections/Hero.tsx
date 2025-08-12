import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-airalight.jpg";
import { Phone, Mail, MapPin, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <header className="relative overflow-hidden">
      <nav className="container flex items-center justify-between py-6">
        <a href="#" className="flex items-center gap-2 font-display text-xl">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-secondary text-primary">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="sr-only">Airalight</span>
          <span aria-hidden>Airalight</span>
        </a>
        <div className="hidden md:flex items-center gap-4 text-sm text-muted-foreground">
          <a href="#services" className="hover:text-foreground transition-colors">Services</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          <a href="tel:+971502015003" className="hover:text-foreground transition-colors">+971 50 201 5003</a>
        </div>
      </nav>

      <div className="container grid lg:grid-cols-2 gap-10 items-center py-12 lg:py-20">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight font-display">
            Airalight Cleaning Services in Dubai
          </h1>
          <p className="text-lg text-muted-foreground">
            Premium home and office cleaning. Deep cleaning, move in/out, kitchen & bathroom detailing, floor washing, and sofa & mattress care.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" variant="hero">
              <a href="#contact" aria-label="Get a quote">
                Get a Quote
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="tel:+971502015003" aria-label="Call Airalight">
                <Phone className="mr-2" /> Call Now
              </a>
            </Button>
          </div>
          <div className="flex flex-wrap gap-6 pt-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4"/>Dubai, UAE</span>
            <a href="mailto:info@airalight.ae" className="inline-flex items-center gap-2 hover:underline"><Mail className="h-4 w-4"/>info@airalight.ae</a>
          </div>
        </div>
        <div className="relative">
          <img
            src={heroImage}
            alt="Pristine modern living room and kitchen with subtle cleaning accents"
            loading="eager"
            className="w-full rounded-xl shadow-glow object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;
