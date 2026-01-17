import { Button } from "@/components/ui/button";
import logo from "@/assets/airalight-logo.png";
import { Phone, MapPin, ChevronRight, Star, Shield, Clock } from "lucide-react";
import Reveal from "@/components/animations/Reveal";

const Hero = () => {
  return (
    <header className="relative">
      {/* Navigation */}
      <nav className="container flex items-center justify-between py-4 border-b border-border/50">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Airalight Cleaning Services" className="h-10 w-auto" />
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground">
          <a href="#services" className="hover:text-primary transition-colors">Services</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <a 
            href="tel:+971502015003" 
            className="hidden sm:flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <Phone className="h-4 w-4" />
            +971 50 201 5003
          </a>
          <Button asChild size="sm" className="rounded-full">
            <a href="#contact">Book Now</a>
          </Button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="container py-12 lg:py-20">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <Reveal direction="up" duration={600}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm font-medium text-muted-foreground">
              <Star className="h-4 w-4 text-primary" />
              Trusted by 1000+ homes in Dubai
            </div>
          </Reveal>
          
          <Reveal delay={100} direction="up" duration={600}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-foreground">
              Professional Cleaning Services at Your Doorstep
            </h1>
          </Reveal>
          
          <Reveal delay={200} direction="up" duration={600}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert home and office cleaning services in Dubai. Book in minutes, get spotless spaces.
            </p>
          </Reveal>
          
          <Reveal delay={300} direction="up" duration={600}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button asChild size="lg" className="rounded-full px-8 text-base font-semibold">
                <a href="#contact">
                  Get a Free Quote
                  <ChevronRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 text-base font-semibold">
                <a href="tel:+971502015003">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
            </div>
          </Reveal>
          
          <Reveal delay={400} direction="up" duration={600}>
            <div className="flex flex-wrap items-center justify-center gap-6 pt-8 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Verified Professionals
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Same Day Service
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                All Dubai Areas
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </header>
  );
};

export default Hero;
