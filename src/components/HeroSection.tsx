import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-secondary">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/10 to-transparent rounded-full" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Digital Marketing Professional | Online Marketing & Google Marketing Specialist</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-secondary-foreground mb-6 animate-slide-up leading-tight">
            Grow Your Business with{" "}
            <span className="gradient-text">Smart Digital Marketing</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Hi, I'm <span className="text-secondary-foreground font-semibold">Pratyaksh Dixit</span>, a Digital Marketing Professional with 1 year of experience helping businesses grow through online marketing, google marketing, and performance-driven digital marketing strategies.
          </p>

          <p className="text-base text-muted-foreground max-w-xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            I work like a digital marketing agency mindset, but with personal attention and cost-effective solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">
                Let's Build Your Brand
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#portfolio">View My Work</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-muted/20 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold gradient-text">1+</div>
              <div className="text-muted-foreground text-sm mt-1">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold gradient-text">15+</div>
              <div className="text-muted-foreground text-sm mt-1">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold gradient-text">100%</div>
              <div className="text-muted-foreground text-sm mt-1">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
