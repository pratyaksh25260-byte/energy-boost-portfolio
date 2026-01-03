import { Mail, Linkedin, MapPin, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Digital Marketing Strategy",
    "SEO for Energy Drinks",
    "Content Marketing",
    "Google Ads",
    "Meta Ads",
    "LinkedIn Marketing"
  ];

  const specializations = [
    "Energy Drinks",
    "Healthy Energy Drinks",
    "Natural Energy Drinks",
    "Organic Energy Drinks",
    "Sugar Free Energy Drinks",
    "Zero Calorie Energy Drinks"
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-secondary pt-20 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#" className="font-display text-2xl font-bold inline-block mb-4">
              <span className="gradient-text">Pratyaksh</span>
              <span className="text-secondary-foreground"> Dixit</span>
            </a>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              Digital Marketing Professional specializing in Energy Drink & Beverage Marketing
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

          {/* Core Services */}
          <div>
            <h4 className="font-display font-bold text-secondary-foreground mb-4">Core Services</h4>
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

          {/* Industry Specialization */}
          <div>
            <h4 className="font-display font-bold text-secondary-foreground mb-4">Specialization</h4>
            <ul className="space-y-2">
              {specializations.map((spec) => (
                <li key={spec} className="text-muted-foreground text-sm">
                  {spec}
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
              © {currentYear} Pratyaksh Dixit. All rights reserved.
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
