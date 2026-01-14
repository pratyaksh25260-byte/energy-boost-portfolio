import { ArrowUpRight, Search, Megaphone, FileText, Users, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const PortfolioSection = () => {
  const services = [
    {
      icon: Search,
      title: "SEO-optimized content for better Google ranking"
    },
    {
      icon: Megaphone,
      title: "Google Ads & Meta Ads for leads and sales"
    },
    {
      icon: Users,
      title: "LinkedIn marketing for B2B growth"
    },
    {
      icon: FileText,
      title: "Content marketing that builds trust"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">My Work</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            How I Help Businesses{" "}
            <span className="gradient-text">Grow Online</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I design customized digital strategies based on business goals and audience intent.
          </p>
        </div>

        {/* Services Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group bg-card rounded-2xl p-6 border border-border card-hover flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-card-foreground font-medium">{service.title}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Value Proposition */}
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20 text-center">
            <p className="text-lg text-foreground leading-relaxed">
              If you're looking for a <span className="font-semibold text-primary">digital marketing agency approach</span> with a freelancer's flexibility, you're in the right place.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="#contact">
              Discuss Your Project
              <ArrowUpRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
