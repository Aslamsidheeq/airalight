import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-gradient-to-b from-white to-gray-50">
      {/* Main Footer Content */}
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900">Airalight Cleaning</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Dubai's premier cleaning service delivering spotless results for homes and offices since 2014.
            </p>
            <div className="flex gap-3 pt-2">
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <a href="#services" className="text-sm text-gray-600 hover:text-primary transition-colors duration-200">
                Our Services
              </a>
              <a href="#contact" className="text-sm text-gray-600 hover:text-primary transition-colors duration-200">
                Contact Us
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors duration-200">
                About Us
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors duration-200">
                Get a Quote
              </a>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900">Popular Services</h3>
            <nav className="flex flex-col gap-2">
              <a href="#services" className="text-sm text-gray-600 hover:text-primary transition-colors duration-200">
                Home Cleaning
              </a>
              <a href="#services" className="text-sm text-gray-600 hover:text-primary transition-colors duration-200">
                Deep Cleaning
              </a>
              <a href="#services" className="text-sm text-gray-600 hover:text-primary transition-colors duration-200">
                Office Cleaning
              </a>
              <a href="#services" className="text-sm text-gray-600 hover:text-primary transition-colors duration-200">
                Move In/Out
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900">Contact Info</h3>
            <div className="space-y-3">
              <a 
                href="tel:+971502015003" 
                className="flex items-center gap-3 text-sm text-gray-600 hover:text-primary transition-colors duration-200 group"
              >
                <div className="w-8 h-8 rounded-lg bg-gray-100 group-hover:bg-primary/10 flex items-center justify-center transition-colors duration-200">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+971 50 201 5003</span>
              </a>
              <a 
                href="mailto:info@airalight.ae" 
                className="flex items-center gap-3 text-sm text-gray-600 hover:text-primary transition-colors duration-200 group"
              >
                <div className="w-8 h-8 rounded-lg bg-gray-100 group-hover:bg-primary/10 flex items-center justify-center transition-colors duration-200">
                  <Mail className="w-4 h-4" />
                </div>
                <span>info@airalight.ae</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Dubai, UAE</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-white">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
            <p>
              © {currentYear} Airalight Cleaning Services. All rights reserved.
            </p>
            <nav className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-200">
                Terms of Service
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;