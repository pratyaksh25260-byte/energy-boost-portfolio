import { MapPin, Briefcase, Target, Zap } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    { icon: MapPin, label: "Based in", value: "Narnaund, Haryana" },
    { icon: Briefcase, label: "Experience", value: "1+ Years" },
    { icon: Target, label: "Focus", value: "Energy Drink Brands" },
    { icon: Zap, label: "Specialty", value: "Growth Marketing" },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image/Visual Side */}
          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-2xl rotate-12" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-2xl -rotate-12" />
              
              {/* Main Image Container */}
              <div className="relative bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-8 backdrop-blur-sm border border-primary/10">
                <div className="aspect-square rounded-2xl bg-secondary flex items-center justify-center overflow-hidden">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <span className="font-display text-4xl font-bold text-primary-foreground">PD</span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-secondary-foreground">Pratyaksh Dixit</h3>
                    <p className="text-muted-foreground text-sm mt-1">Digital Marketing Expert</p>
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -right-4 top-1/4 bg-card rounded-xl shadow-lg p-4 border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">Energy Drinks</div>
                    <div className="text-xs text-muted-foreground">Industry Expert</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Me</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
              Transforming Marketing Challenges Into{" "}
              <span className="gradient-text">Growth Opportunities</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm Pratyaksh Dixit, a passionate digital marketing professional based in Narnaund, Haryana. With hands-on experience in the dynamic world of digital marketing, I've specialized in helping beverage brands, particularly in the energy drink sector, connect with their target audiences through data-driven strategies and creative campaigns.
              </p>
              <p>
                My expertise spans across promoting various product categories including healthy energy drinks, natural energy drinks, sugar-free energy drinks, and organic energy drinks. I understand the unique challenges of marketing in the competitive beverage industry and how to position brands effectively in a health-conscious market.
              </p>
              <p>
                Whether it's optimizing content for search terms like "best energy drink" or crafting compelling campaigns for body fuel drink products, I bring dedication, creativity, and analytical thinking to every project.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {highlights.map((item) => (
                <div key={item.label} className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 border border-border">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">{item.label}</div>
                    <div className="font-semibold text-foreground text-sm">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
