import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Send, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    services: [] as string[],
    projectDetails: ""
  });

  const services = [
    "Digital Marketing Strategy",
    "SEO & Content Marketing",
    "Google Ads Management",
    "Meta Ads (Facebook & Instagram)",
    "LinkedIn Marketing"
  ];

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      services: [],
      projectDetails: ""
    });
    setIsSubmitting(false);
  };

  const specializedServices = [
    { icon: "✓", title: "Digital Marketing Strategy", desc: "Comprehensive plans for growth" },
    { icon: "✓", title: "SEO & Content Marketing", desc: "Better Google rankings" },
    { icon: "✓", title: "Google Ads & Meta Ads", desc: "Leads and sales campaigns" },
    { icon: "✓", title: "LinkedIn Marketing", desc: "B2B growth and leads" },
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Let's{" "}
            <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Looking for a digital marketing professional who understands strategy, execution, and results?
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left Column - Services & Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Specialized Services */}
            <div className="bg-secondary rounded-2xl p-6 border border-border">
              <h3 className="font-display text-lg font-bold text-secondary-foreground mb-4">
                Let's Discuss
              </h3>
              <div className="space-y-3">
                {specializedServices.map((service) => (
                  <div key={service.title} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-secondary-foreground text-sm">{service.title}</div>
                      <div className="text-xs text-muted-foreground">{service.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 border border-primary/20">
              <h3 className="font-display text-lg font-bold text-foreground mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <a href="mailto:contact@pratyakshdixit.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-5 h-5" />
                  <span className="text-sm">contact@pratyakshdixit.com</span>
                </a>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm">Narnaund, Haryana, India</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Clock className="w-5 h-5" />
                  <span className="text-sm">Response within 24 hours</span>
                </div>
              </div>
            </div>

            {/* Value Proposition */}
            <div className="bg-card rounded-2xl p-6 border border-border">
              <p className="text-center text-foreground font-medium">
                👉 Let's grow your business with smart digital marketing.
              </p>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 border border-border shadow-lg">
              <h3 className="font-display text-xl font-bold text-card-foreground mb-6">
                Get Your Free Consultation
              </h3>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Your Name *</label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="bg-muted/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Email Address *</label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@company.com"
                    className="bg-muted/50"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Phone Number</label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="bg-muted/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Company/Brand Name</label>
                  <Input
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Your Brand"
                    className="bg-muted/50"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-card-foreground mb-3">Services Interested In *</label>
                <div className="grid md:grid-cols-2 gap-2">
                  {services.map((service) => (
                    <div key={service} className="flex items-center gap-2">
                      <Checkbox
                        id={service}
                        checked={formData.services.includes(service)}
                        onCheckedChange={() => handleServiceToggle(service)}
                      />
                      <label htmlFor={service} className="text-sm text-muted-foreground cursor-pointer">
                        {service}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-card-foreground mb-2">Tell me about your project *</label>
                <Textarea
                  required
                  value={formData.projectDetails}
                  onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                  placeholder="What are your goals? What challenges are you facing with your marketing?"
                  rows={4}
                  className="bg-muted/50"
                />
              </div>

              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Get Free Consultation
                    <Send className="ml-2 w-5 h-5" />
                  </>
                )}
              </Button>

              <p className="text-center text-xs text-muted-foreground mt-4">
                I typically respond within 24 hours
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
