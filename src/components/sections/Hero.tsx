import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-airalight.jpg";
import logo from "@/assets/airalight-logo.png";
import { Phone, Mail, MapPin, Sparkles } from "lucide-react";
import Reveal from "@/components/animations/Reveal";

const Hero = () => {
  return (
    <header className="relative overflow-hidden">
      <nav className="container flex items-center justify-between py-6">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Airalight Cleaning Services" className="h-12 w-auto" />
        </a>
        <div className="hidden md:flex items-center gap-4 text-sm text-muted-foreground">
          <a href="#services" className="hover:text-foreground transition-colors">Services</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          <a href="tel:+971502015003" className="hover:text-foreground transition-colors">+971 50 201 5003</a>
        </div>
      </nav>

      <div className="container grid lg:grid-cols-2 gap-10 items-center py-12 lg:py-20">
        <div className="space-y-6">
          <Reveal direction="up" duration={800}>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight font-display bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Airalight Cleaning Services in Dubai
            </h1>
          </Reveal>
          
          <Reveal delay={200} direction="up" duration={800}>
            <p className="text-lg text-muted-foreground">
              Premium home and office cleaning. Deep cleaning, move in/out, kitchen & bathroom detailing, floor washing, and sofa & mattress care.
            </p>
          </Reveal>
          
          <Reveal delay={400} direction="scale" duration={600}>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" variant="hero" className="group transition-all duration-300 hover:shadow-xl hover:shadow-primary/25">
                <a href="#contact" aria-label="Get a quote">
                  <Sparkles className="mr-2 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"/>
                  Get a Quote
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="group transition-all duration-300 hover:border-primary/50 hover:bg-primary/5">
                <a href="tel:+971502015003" aria-label="Call Airalight">
                  <Phone className="mr-2 transition-transform duration-300 group-hover:scale-110" /> Call Now
                </a>
              </Button>
            </div>
          </Reveal>
          
          <Reveal delay={600} direction="up" duration={600}>
            <div className="flex flex-wrap gap-6 pt-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-foreground">
                <MapPin className="h-4 w-4 transition-transform duration-300 hover:scale-110"/>Dubai, UAE
              </span>
              <a href="mailto:info@airalight.ae" className="inline-flex items-center gap-2 transition-all duration-300 hover:text-primary hover:scale-105">
                <Mail className="h-4 w-4 transition-transform duration-300 hover:scale-110"/>info@airalight.ae
              </a>
            </div>
          </Reveal>
        </div>
        
        <Reveal delay={300} direction="right" duration={1000} progressive>
          <div className="relative group">
            <img
              src={heroImage}
              alt="Pristine modern living room and kitchen with subtle cleaning accents"
              loading="eager"
              className="w-full rounded-xl shadow-glow object-cover transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-primary/20 group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
          </div>
        </Reveal>
      </div>
    </header>
  );
};

export default Hero;
