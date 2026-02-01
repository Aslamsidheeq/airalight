import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-airalight.jpg";
import logo from "@/assets/airalight-logo.png";
import { Phone, Mail, MapPin, Sparkles, Star, Award, Clock } from "lucide-react";
import Reveal from "@/components/animations/Reveal";

const Hero = () => {
  const features = [
    { icon: Star, text: "5-Star Rated Service" },
    { icon: Award, text: "Certified Professionals" },
    { icon: Clock, text: "Same-Day Available" }
  ];

  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50/30 to-white">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      {/* Navigation */}
      <nav className="container relative flex items-center justify-between py-6 z-10">
        <a href="#" className="flex items-center gap-2 group">
          <img 
            src={logo} 
            alt="Airalight Cleaning Services" 
            className="h-12 w-auto transition-transform duration-300 group-hover:scale-105" 
          />
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#services" className="text-gray-600 hover:text-primary transition-colors duration-200">Services</a>
          <a href="#contact" className="text-gray-600 hover:text-primary transition-colors duration-200">Contact</a>
          <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
            <a href="tel:+971502015003">+971 50 201 5003</a>
          </Button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="container relative grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
        {/* Left Column - Text Content */}
        <div className="space-y-8">
          <Reveal direction="up" duration={800}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Dubai's Premier Cleaning Service</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                Home services at your doorstep
              </span>
            </h1>
          </Reveal>
          
          <Reveal delay={200} direction="up" duration={800}>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
              Premium home and office cleaning services in Dubai. From deep cleaning to maintenance, we deliver spotless results with certified professionals.
            </p>
          </Reveal>

          {/* Feature Pills */}
          <Reveal delay={300} direction="up" duration={600}>
            <div className="flex flex-wrap gap-3">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <feature.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-gray-700">{feature.text}</span>
                </div>
              ))}
            </div>
          </Reveal>
          
          {/* CTA Buttons */}
          <Reveal delay={400} duration={600}>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                asChild 
                size="lg" 
                className="group bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-xl hover:shadow-2xl transition-all duration-300 text-base px-8"
              >
                <a href="#contact">
                  <Sparkles className="mr-2 w-5 h-5 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"/>
                  Get a Free Quote
                </a>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="group border-2 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-base px-8"
              >
                <a href="tel:+971502015003">
                  <Phone className="mr-2 w-5 h-5 transition-transform duration-300 group-hover:scale-110" /> 
                  Call Now
                </a>
              </Button>
            </div>
          </Reveal>
          
          {/* Contact Info */}
          <Reveal delay={600} direction="up" duration={600}>
            <div className="flex flex-wrap gap-6 pt-6 text-sm border-t border-gray-200 mt-8">
              <span className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors duration-300">
                <MapPin className="h-4 w-4"/>
                Dubai, UAE
              </span>
              <a 
                href="mailto:info@airalight.ae" 
                className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors duration-300"
              >
                <Mail className="h-4 w-4"/>
                info@airalight.ae
              </a>
            </div>
          </Reveal>
        </div>
        
        {/* Right Column - Image */}
        <Reveal delay={300} direction="right" duration={1000} progressive>
          <div className="relative group">
            {/* Decorative background */}
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* <img
                src={heroImage}
                alt="Professional cleaning service in a modern Dubai home"
                loading="eager"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              /> */}
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Trusted by 1000+ homes</p>
                    <p className="text-xs text-gray-600 mt-1">Across Dubai & surrounding areas</p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Additional decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-2xl" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-500/30 to-transparent rounded-full blur-xl" />
          </div>
        </Reveal>
      </div>

      {/* Stats Section */}
      <div className="container relative pb-16">
        <Reveal delay={800} direction="up" duration={600}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-2xl bg-white border border-gray-200 shadow-lg">
            {[
              { number: "1000+", label: "Happy Clients" },
              { number: "10+", label: "Years Experience" },
              { number: "15+", label: "Services Offered" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <div key={index} className="text-center group cursor-default">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </header>
  );
};

export default Hero;