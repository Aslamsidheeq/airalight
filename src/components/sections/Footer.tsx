import logo from "@/assets/airalight-logo.png";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <img src={logo} alt="Airalight" className="h-10 w-auto brightness-0 invert mb-4" />
            <p className="text-background/70 text-sm max-w-sm">
              Professional cleaning services in Dubai. Trusted by thousands of homes and offices.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2 text-sm text-background/70">
              <a href="#services" className="block hover:text-background transition-colors">Services</a>
              <a href="#contact" className="block hover:text-background transition-colors">Contact</a>
            </nav>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2 text-sm text-background/70">
              <a href="tel:+971502015003" className="flex items-center gap-2 hover:text-background transition-colors">
                <Phone className="h-4 w-4" />
                +971 50 201 5003
              </a>
              <a href="mailto:info@airalight.ae" className="flex items-center gap-2 hover:text-background transition-colors">
                <Mail className="h-4 w-4" />
                info@airalight.ae
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Dubai, UAE
              </span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/10 mt-8 pt-8 text-center text-sm text-background/50">
          <p>&copy; {new Date().getFullYear()} Airalight Cleaning Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
