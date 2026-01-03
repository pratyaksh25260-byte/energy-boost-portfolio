import { 
  Search, 
  FileText, 
  Target, 
  Share2, 
  Linkedin, 
  BarChart3,
  TrendingUp,
  Users,
  Globe,
  Palette,
  Mail,
  Settings
} from "lucide-react";

const SkillsSection = () => {
  const coreSkills = [
    {
      icon: Target,
      title: "Digital Marketing Strategy",
      description: "Comprehensive plans tailored for beverage brands and energy drink companies that drive measurable results."
    },
    {
      icon: Search,
      title: "Search Engine Optimization",
      description: "Expert in optimizing for high-value keywords: energy drinks, healthy alternatives, natural options, and more."
    },
    {
      icon: FileText,
      title: "Content Marketing",
      description: "Creating engaging, SEO-optimized content that resonates with health-conscious consumers."
    },
    {
      icon: Share2,
      title: "Meta Ads (Facebook & Instagram)",
      description: "Targeted campaigns for fitness enthusiasts with A/B testing and performance optimization."
    },
    {
      icon: BarChart3,
      title: "Google Ads",
      description: "Search, display, and shopping campaigns with strategic keyword targeting and bid optimization."
    },
    {
      icon: Linkedin,
      title: "LinkedIn Marketing",
      description: "B2B marketing connecting manufacturers with distributors and retail partners."
    }
  ];

  const technicalSkills = [
    { icon: BarChart3, name: "Google Analytics" },
    { icon: Globe, name: "Google Search Console" },
    { icon: Share2, name: "Meta Business Suite" },
    { icon: TrendingUp, name: "Conversion Rate Optimization" },
    { icon: Settings, name: "Marketing Automation" },
    { icon: Users, name: "Social Media Management" },
    { icon: Mail, name: "Email Marketing" },
    { icon: Palette, name: "Campaign Analysis" }
  ];

  const industrySkills = [
    "Beverage Industry Marketing",
    "Health & Wellness Brand Positioning", 
    "Fitness & Sports Nutrition",
    "Consumer Behavior Analysis",
    "Competitor Analysis",
    "Product Launch Campaigns",
    "Influencer Marketing"
  ];

  return (
    <section id="skills" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Skills & Expertise</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary-foreground mt-2 mb-4">
            Core Digital Marketing{" "}
            <span className="gradient-text">Competencies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Specialized in helping energy drink brands and health-focused businesses amplify their online presence
          </p>
        </div>

        {/* Core Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {coreSkills.map((skill, index) => (
            <div
              key={skill.title}
              className="group bg-card rounded-2xl p-6 border border-border card-hover cursor-default"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <skill.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-card-foreground mb-3">{skill.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>

        {/* Technical & Industry Skills */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Technical Skills */}
          <div className="bg-card rounded-2xl p-8 border border-border">
            <h3 className="font-display text-xl font-bold text-card-foreground mb-6">Technical Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {technicalSkills.map((skill) => (
                <div key={skill.name} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-primary/10 transition-colors duration-300">
                  <skill.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-card-foreground">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Industry Skills */}
          <div className="bg-card rounded-2xl p-8 border border-border">
            <h3 className="font-display text-xl font-bold text-card-foreground mb-6">Industry Expertise</h3>
            <div className="flex flex-wrap gap-3">
              {industrySkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-sm font-medium text-card-foreground hover:border-primary/40 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
