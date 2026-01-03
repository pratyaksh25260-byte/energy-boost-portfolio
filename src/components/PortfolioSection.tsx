import { ArrowUpRight, Search, Megaphone, FileText, Users, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";

const PortfolioSection = () => {
  const projects = [
    {
      icon: Search,
      category: "SEO Campaign",
      title: "Organic Energy Drink SEO Campaign",
      description: "Successfully optimized website content and product pages for a natural energy drinks brand, targeting health-conscious consumers.",
      results: [
        "Improved organic rankings for 'organic energy drinks' and related terms",
        "Developed comprehensive content strategy",
        "Increased organic traffic significantly",
        "Created blog content comparing traditional vs healthy alternatives"
      ],
      skills: ["SEO", "Content Marketing", "Keyword Research", "Google Analytics"],
      color: "primary"
    },
    {
      icon: Megaphone,
      category: "Product Launch",
      title: "Energy Drink Powder Launch Campaign",
      description: "Managed multi-channel advertising campaign for new energy drink powder product launch.",
      results: [
        "Executed integrated campaigns across Google Ads, Meta Ads, and LinkedIn",
        "Targeted fitness enthusiasts and athletes",
        "Optimized budget allocation based on performance metrics",
        "Developed audience segments for sugar-free products"
      ],
      skills: ["Google Ads", "Meta Ads", "LinkedIn Marketing", "Digital Strategy"],
      color: "accent"
    },
    {
      icon: FileText,
      category: "Content Marketing",
      title: "Health-Focused Content Marketing",
      description: "Developed content marketing strategy for boost energy drink alternative brand.",
      results: [
        "Created SEO-optimized blog posts about healthy energy drinks",
        "Produced comparison content: 'Best Energy Drink for Your Lifestyle'",
        "Developed social media content highlighting organic benefits",
        "Increased brand awareness in the natural energy market"
      ],
      skills: ["Content Marketing", "SEO", "Social Media Marketing"],
      color: "primary"
    },
    {
      icon: Users,
      category: "B2B Lead Generation",
      title: "B2B Lead Generation for Beverage Distributor",
      description: "Designed LinkedIn and Google Ads campaigns for energy drink wholesale distributor.",
      results: [
        "Targeted retailers and gym owners for bulk suppliers",
        "Promoted sugar-free and zero calorie inventory",
        "Implemented conversion tracking for wholesale inquiries",
        "Generated qualified B2B leads"
      ],
      skills: ["LinkedIn Marketing", "Google Ads", "B2B Marketing", "Lead Generation"],
      color: "accent"
    },
    {
      icon: BarChart,
      category: "Market Research",
      title: "Competitor Analysis & Market Positioning",
      description: "Conducted comprehensive digital marketing analysis for emerging energy drink brand.",
      results: [
        "Analyzed major competitor strategies",
        "Identified market gaps in organic and natural segments",
        "Developed positioning strategy for health-conscious consumers",
        "Recommended content strategy around 'best energy drink' searches"
      ],
      skills: ["Market Research", "SEO Analysis", "Digital Strategy"],
      color: "primary"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Portfolio</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Featured Projects &{" "}
            <span className="gradient-text">Campaigns</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real results from strategic digital marketing campaigns in the energy drink industry
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-card rounded-2xl border border-border overflow-hidden card-hover"
            >
              {/* Header */}
              <div className={`p-6 ${project.color === 'accent' ? 'bg-accent/10' : 'bg-primary/10'}`}>
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl ${project.color === 'accent' ? 'bg-accent/20' : 'bg-primary/20'} flex items-center justify-center`}>
                    <project.icon className={`w-6 h-6 ${project.color === 'accent' ? 'text-accent' : 'text-primary'}`} />
                  </div>
                  <span className={`text-xs font-semibold uppercase tracking-wider ${project.color === 'accent' ? 'text-accent' : 'text-primary'}`}>
                    {project.category}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-card-foreground">{project.title}</h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {project.results.slice(0, 3).map((result, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-1">✓</span>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
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
