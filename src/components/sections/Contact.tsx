import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageSquare, MapPin, Clock, Sparkles, CheckCircle } from "lucide-react";
import Reveal from "@/components/animations/Reveal";

const Contact = () => {
  const services = [
    "Home Cleaning",
    "Office Cleaning",
    "Deep Cleaning",
    "Move In/Out",
    "Kitchen Deep Clean",
    "Bathroom Deep Clean",
    "Floor Washing",
    "Sofa & Mattress Cleaning"
  ];

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container relative grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - CTA */}
        <div className="space-y-8">
          <Reveal direction="up" duration={800}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Get Started Today</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                Ready for a spotless space?
              </span>
            </h2>
          </Reveal>
          
          <Reveal delay={200} direction="up" duration={800}>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Call, email, or WhatsApp us to book your cleaning. We'll confirm your appointment right away and deliver exceptional results.
            </p>
          </Reveal>

          {/* Contact Buttons */}
          <Reveal delay={400} duration={600}>
            <div className="flex flex-col gap-4 pt-4">
              <Button 
                asChild 
                size="lg" 
                className="group w-full sm:w-auto bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300 justify-start text-base h-14"
              >
                <a href="tel:+971502015003">
                  <div className="flex items-center gap-3 w-full">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs opacity-90">Call us now</div>
                      <div className="font-semibold">+971 50 201 5003</div>
                    </div>
                  </div>
                </a>
              </Button>

              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="group w-full sm:w-auto border-2 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 justify-start text-base h-14"
              >
                <a href="mailto:info@airalight.ae">
                  <div className="flex items-center gap-3 w-full">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs text-gray-500">Email us at</div>
                      <div className="font-semibold text-gray-900">info@airalight.ae</div>
                    </div>
                  </div>
                </a>
              </Button>

              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="group w-full sm:w-auto border-2 border-green-500/30 hover:border-green-500 hover:bg-green-50 transition-all duration-300 justify-start text-base h-14"
              >
                <a href="https://wa.me/971502015003" target="_blank" rel="noreferrer">
                  <div className="flex items-center gap-3 w-full">
                    <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-600">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs text-gray-500">Chat on</div>
                      <div className="font-semibold text-gray-900">WhatsApp</div>
                    </div>
                  </div>
                </a>
              </Button>
            </div>
          </Reveal>

          {/* Service Area */}
          <Reveal delay={600} direction="up" duration={600}>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-200 shadow-sm">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900">Service Area</p>
                <p className="text-sm text-gray-600 mt-1">Dubai, UAE and surrounding areas</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Column - Services List */}
        <Reveal delay={400} direction="right" duration={800}>
          <div className="rounded-2xl bg-white p-8 shadow-xl border border-gray-200 space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Our Services</h3>
                <p className="text-sm text-gray-600">Professional cleaning solutions</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group cursor-default"
                >
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-sm font-medium text-gray-700">{service}</span>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="pt-4 border-t border-gray-200 space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Clock className="w-4 h-4 text-primary" />
                <span>Same-day service available</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Certified & insured professionals</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>100% satisfaction guarantee</span>
              </div>
            </div>

            {/* Quote CTA */}
            <div className="pt-4">
              <Button 
                asChild 
                className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300"
                size="lg"
              >
                <a href="#services">
                  <Sparkles className="w-5 h-5 mr-2" />
                  View All Services
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;