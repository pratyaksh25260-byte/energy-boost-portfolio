import { Mail, Linkedin, MapPin, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Digital Marketing",
    "Online Marketing",
    "Google Marketing",
    "SEO",
    "Paid Ads",
    "Content Marketing"
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "My Work", href: "#portfolio" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-secondary pt-20 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Brand Column */}
          <div>
            <a href="#" className="font-display text-2xl font-bold inline-block mb-4">
              <span className="gradient-text">Pratyaksh</span>
              <span className="text-secondary-foreground"> Dixit</span>
            </a>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              Digital Marketing Professional
            </p>
            <div className="space-y-3">
              <a href="mailto:contact@pratyakshdixit.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm">
                <Mail className="w-4 h-4" />
                contact@pratyakshdixit.com
              </a>
              <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm">
                <Linkedin className="w-4 h-4" />
                LinkedIn Profile
              </a>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4" />
                Narnaund, Haryana, India
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-secondary-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-secondary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Pratyaksh Dixit. Digital Marketing Professional.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
