import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Home, Building2, ShowerHead, Sofa, MoveRight, Sparkles, Utensils, Bath, Droplets, ArrowRight, Check } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import StaggerReveal from "@/components/animations/StaggerReveal";
import { useState } from "react";

// Custom SVG Icons
const CleaningIcons = {
  HomeCleaning: () => (
    <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
      <rect x="25" y="50" width="70" height="50" rx="2" fill="currentColor" opacity="0.1"/>
      <path d="M30 50L60 25L90 50" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <rect x="45" y="75" width="15" height="25" fill="currentColor" opacity="0.3"/>
      <circle cx="40" cy="62" r="3" fill="currentColor" opacity="0.5"/>
      <circle cx="70" cy="62" r="3" fill="currentColor" opacity="0.5"/>
      <path d="M75 80Q80 75 85 80" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.4"/>
      <path d="M65 65L70 70L80 60" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  OfficeCleaning: () => (
    <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
      <rect x="20" y="30" width="80" height="60" rx="3" fill="currentColor" opacity="0.1"/>
      <rect x="30" y="40" width="25" height="20" fill="currentColor" opacity="0.2"/>
      <rect x="65" y="40" width="25" height="20" fill="currentColor" opacity="0.2"/>
      <rect x="30" y="65" width="60" height="3" fill="currentColor" opacity="0.3"/>
      <circle cx="75" cy="75" r="12" fill="currentColor" opacity="0.15"/>
      <path d="M75 70L77 73L81 68" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  DeepCleaning: () => (
    <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
      <circle cx="60" cy="60" r="35" fill="currentColor" opacity="0.1"/>
      <path d="M40 60Q50 45 60 60T80 60" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.3"/>
      <circle cx="45" cy="50" r="3" fill="currentColor"/>
      <circle cx="55" cy="48" r="2" fill="currentColor" opacity="0.7"/>
      <circle cx="65" cy="48" r="2" fill="currentColor" opacity="0.7"/>
      <circle cx="75" cy="50" r="3" fill="currentColor"/>
      <path d="M50 70L55 75L70 60" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Kitchen: () => (
    <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
      <rect x="30" y="35" width="60" height="50" rx="3" fill="currentColor" opacity="0.1"/>
      <circle cx="50" cy="55" r="8" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
      <circle cx="70" cy="55" r="8" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
      <rect x="40" y="70" width="40" height="10" rx="1" fill="currentColor" opacity="0.2"/>
      <path d="M55 45L60 40L65 45" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  ),
  Bathroom: () => (
    <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
      <ellipse cx="60" cy="65" rx="30" ry="15" fill="currentColor" opacity="0.1"/>
      <rect x="50" y="50" width="20" height="30" rx="2" fill="currentColor" opacity="0.2"/>
      <circle cx="45" cy="40" r="8" fill="currentColor" opacity="0.15"/>
      <circle cx="75" cy="40" r="8" fill="currentColor" opacity="0.15"/>
      <path d="M40 55Q60 45 80 55" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.4"/>
    </svg>
  ),
  Sofa: () => (
    <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
      <rect x="25" y="50" width="70" height="30" rx="4" fill="currentColor" opacity="0.1"/>
      <rect x="20" y="55" width="10" height="20" rx="2" fill="currentColor" opacity="0.2"/>
      <rect x="90" y="55" width="10" height="20" rx="2" fill="currentColor" opacity="0.2"/>
      <rect x="30" y="45" width="60" height="8" rx="2" fill="currentColor" opacity="0.25"/>
      <circle cx="60" cy="60" r="15" fill="currentColor" opacity="0.08"/>
    </svg>
  )
};

const services = [
  { 
    title: "Home Cleaning", 
    icon: CleaningIcons.HomeCleaning,
    desc: "Regular, reliable cleaning for apartments and villas", 
    fullDesc: "Keep your home beautifully clean with our regular Home Cleaning service. We cover all living areas, bedrooms, kitchens, and bathrooms with detailed attention. Benefits include improved indoor air quality, a healthier living environment, and more time for you.",
    color: "from-blue-500/10 to-cyan-500/10",
    accentColor: "text-blue-600",
    benefits: ["All rooms cleaned", "Dust & vacuum", "Surface sanitization", "Weekly or bi-weekly"]
  },
  { 
    title: "Office Cleaning", 
    icon: CleaningIcons.OfficeCleaning,
    desc: "Keep workspaces spotless and productive", 
    fullDesc: "A clean office is key to a productive workplace. Our Office Cleaning services ensure your business environment is spotless and professional. Studies show employees work more efficiently in a tidy office, and our service helps reduce sick days by eliminating germs.",
    color: "from-purple-500/10 to-pink-500/10",
    accentColor: "text-purple-600",
    benefits: ["Desk sanitization", "Common area cleaning", "Restroom maintenance", "Flexible scheduling"]
  },
  { 
    title: "Deep Cleaning", 
    icon: CleaningIcons.DeepCleaning,
    desc: "Top-to-bottom attention for a fresh start", 
    fullDesc: "Our Deep Cleaning service targets hidden dirt and grime in every corner. This thorough cleaning is ideal for seasonal refreshes, pre-event preparation, or post-construction clean-ups. Deep cleaning eliminates bacteria, mold, and allergens that regular cleaning often misses, improving hygiene and air quality",
    color: "from-emerald-500/10 to-teal-500/10",
    accentColor: "text-emerald-600",
    benefits: ["Behind furniture", "Inside cabinets", "Detailed scrubbing", "Allergen removal"]
  },
  { 
    title: "After Party Cleaning", 
    icon: Sparkles,
    desc: "We tidy up so you can relax", 
    fullDesc: "Relax after your event – let us handle the After-Party Cleaning! Our team quickly restores order so you can enjoy the memories, not the mess.",
    color: "from-orange-500/10 to-red-500/10",
    accentColor: "text-orange-600",
    benefits: ["Quick turnaround", "Trash removal", "Surface cleaning", "Stain treatment"]
  },
  { 
    title: "Balcony Deep Cleaning", 
    icon: Droplets,
    desc: "Outdoor spaces, scrubbed and refreshed", 
    fullDesc: "Make your outdoor space inviting again with our Balcony Deep Cleaning. We remove accumulated dust, dirt, and stains so you can enjoy your balcony or terrace in comfort.",
    color: "from-sky-500/10 to-blue-500/10",
    accentColor: "text-sky-600",
    benefits: ["Pressure washing", "Railing cleaning", "Floor scrubbing", "Glass cleaning"]
  },
  { 
    title: "Move In & Move Out", 
    icon: MoveRight,
    desc: "Detailed cleaning for a smooth transition", 
    fullDesc: "Moving? Get your deposit back and start fresh with our Move In & Move Out Cleaning. We perform a top-to-bottom clean, ensuring every inch of the property is sanitized.",
    color: "from-violet-500/10 to-purple-500/10",
    accentColor: "text-violet-600",
    benefits: ["Entire property", "Appliance cleaning", "Deposit guaranteed", "Same-day service"]
  },
  { 
    title: "Kitchen Deep Clean", 
    icon: CleaningIcons.Kitchen,
    desc: "Grease removal and surface sanitation", 
    fullDesc: "Our specialized Kitchen Deep Cleaning tackles grease and buildup to revitalize the heart of your home. A clean kitchen promotes better health and efficiency.",
    color: "from-amber-500/10 to-yellow-500/10",
    accentColor: "text-amber-600",
    benefits: ["Degreasing", "Appliance detailing", "Cabinet cleaning", "Tile & grout"]
  },
  { 
    title: "Bathroom Deep Clean", 
    icon: CleaningIcons.Bathroom,
    desc: "Tiles, grout and fixtures shining like new", 
    fullDesc: "Step into a sparkling bathroom every time with our Bathroom Deep Cleaning. We eliminate mold, mildew, and soap scum for a hygienic space.",
    color: "from-cyan-500/10 to-blue-500/10",
    accentColor: "text-cyan-600",
    benefits: ["Mold removal", "Grout cleaning", "Fixture polishing", "Odor elimination"]
  },
  { 
    title: "Floor Washing", 
    icon: ShowerHead,
    desc: "Hard floors thoroughly washed and scrubbed", 
    fullDesc: "Restore shine and cleanliness to all floor types with our Floor Washing & Scrubbing service. Remove stubborn dirt and grime without damaging surfaces.",
    color: "from-slate-500/10 to-gray-500/10",
    accentColor: "text-slate-600",
    benefits: ["All floor types", "Machine scrubbing", "Stain removal", "Polishing"]
  },
  { 
    title: "Sofa & Mattress", 
    icon: CleaningIcons.Sofa,
    desc: "Fabric care for hygiene and freshness", 
    fullDesc: "Refresh your furniture and bedroom with Sofa and Mattress Cleaning. Professional cleaning extends the life of upholstery and ensures a healthier home.",
    color: "from-rose-500/10 to-pink-500/10",
    accentColor: "text-rose-600",
    benefits: ["Deep extraction", "Stain treatment", "Odor removal", "Quick drying"]
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  const serviceCards = services.map((service, index) => {
    const IconComponent = service.icon;
    const isCustomSVG = typeof IconComponent !== 'function' || service.title.includes("Home") || service.title.includes("Office") || service.title.includes("Deep") || service.title.includes("Kitchen") || service.title.includes("Bathroom") || service.title.includes("Sofa");
    
    return (
      <div
        key={service.title}
        onClick={() => setSelectedService(service)}
        className="group cursor-pointer"
      >
        <div className={`relative h-full rounded-2xl bg-gradient-to-br ${service.color} p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-3 border border-transparent hover:border-primary/20 overflow-hidden`}>
          {/* Background decoration */}
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-white/40 to-transparent blur-2xl transition-transform duration-700 group-hover:scale-150" />
          
          {/* Icon */}
          <div className="relative mb-6">
            <div className={`w-20 h-20 rounded-2xl bg-white/80 backdrop-blur-sm flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg ${service.accentColor}`}>
              {isCustomSVG ? (
                <div className="w-12 h-12">
                  <IconComponent />
                </div>
              ) : (
                <IconComponent className="w-10 h-10" />
              )}
            </div>
          </div>
          
          {/* Content */}
          <div className="relative space-y-3">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {service.desc}
            </p>
            
            {/* Learn more link */}
            <div className="flex items-center gap-2 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 pt-2">
              <span>Learn more</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <section id="services" className="py-20 md:py-32 overflow-hidden bg-gradient-to-b from-white via-gray-50/50 to-white">
        <div className="container">
          {/* Header */}
          <Reveal className="mx-auto max-w-3xl text-center mb-16" progressive>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Premium Cleaning Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight">
              What are you looking for?
            </h2>
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Trusted professionals delivering spotless results across Dubai. Choose from our comprehensive range of cleaning services.
            </p>
          </Reveal>
          
          {/* Services Grid */}
          <StaggerReveal 
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto"
            staggerDelay={100}
            direction="up"
          >
            {serviceCards}
          </StaggerReveal>

          {/* CTA Section */}
          <Reveal className="mt-20 text-center" delay={400}>
            <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
              <Button asChild size="lg" className="group bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300">
                <a href="#contact">
                  <span>Get a Free Quote</span>
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="group">
                <a href="tel:+971502015003">
                  <span>Call +971 50 201 5003</span>
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Enhanced Dialog */}
      <Dialog open={!!selectedService} onOpenChange={(open) => !open && setSelectedService(null)}>
        <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto animate-in fade-in-0 zoom-in-95 slide-in-from-bottom-4 duration-300 p-0">
          {selectedService && (
            <>
              {/* Header with gradient */}
              <div className={`relative bg-gradient-to-br ${selectedService.color} p-6`}>
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/30 blur-2xl" />
                <DialogHeader className="relative">
                  <div className={`inline-flex h-16 w-16 items-center justify-center rounded-xl bg-white/90 backdrop-blur-sm ${selectedService.accentColor} mb-4 shadow-lg`}>
                    {typeof selectedService.icon === 'function' ? (
                      selectedService.title.includes("Home") || 
                      selectedService.title.includes("Office") || 
                      selectedService.title.includes("Deep") || 
                      selectedService.title.includes("Kitchen") || 
                      selectedService.title.includes("Bathroom") || 
                      selectedService.title.includes("Sofa") ? (
                        <div className="w-10 h-10">
                          <selectedService.icon />
                        </div>
                      ) : (
                        <selectedService.icon className="w-8 h-8" />
                      )
                    ) : (
                      <selectedService.icon className="w-8 h-8" />
                    )}
                  </div>
                  <DialogTitle className="text-2xl font-bold text-gray-900">
                    {selectedService.title}
                  </DialogTitle>
                </DialogHeader>
              </div>

              {/* Content */}
              <div className="p-6 space-y-5">
                <DialogDescription className="text-sm leading-relaxed text-gray-700">
                  {selectedService.fullDesc}
                </DialogDescription>

                {/* Benefits */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2 text-sm">
                    <Sparkles className="w-4 h-4 text-primary" />
                    What's Included
                  </h4>
                  <ul className="grid gap-2">
                    {selectedService.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="flex flex-col gap-2 pt-3">
                  <Button asChild className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary">
                    <a href="#contact">Book This Service</a>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <a href="tel:+971502015003">Call Now</a>
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Services;