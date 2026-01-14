import { 
  Search, 
  FileText, 
  Target, 
  Share2, 
  Linkedin, 
  BarChart3,
  TrendingUp,
  PenTool,
  Globe
} from "lucide-react";

const SkillsSection = () => {
  const coreSkills = [
    {
      icon: Target,
      title: "Digital Marketing Strategy",
      description: "Comprehensive digital marketing plans tailored for your business goals with measurable results."
    },
    {
      icon: TrendingUp,
      title: "Online Marketing & Brand Growth",
      description: "Building your brand's online presence and driving sustainable growth through strategic marketing."
    },
    {
      icon: PenTool,
      title: "Content Marketing & Copywriting",
      description: "Creating engaging, SEO-optimized content that resonates with your target audience."
    },
    {
      icon: Search,
      title: "Search Engine Optimization (SEO)",
      description: "Expert SEO strategies to improve your Google rankings and drive organic traffic."
    },
    {
      icon: BarChart3,
      title: "Google Ads & Google Marketing",
      description: "Strategic Google Ads campaigns with keyword targeting and bid optimization for maximum ROI."
    },
    {
      icon: Share2,
      title: "Meta Ads (Facebook & Instagram)",
      description: "Targeted advertising campaigns with A/B testing and performance optimization."
    },
    {
      icon: Linkedin,
      title: "LinkedIn Marketing & Lead Generation",
      description: "B2B marketing and lead generation to connect with your ideal business partners."
    },
    {
      icon: Globe,
      title: "Campaign Analysis & Optimization",
      description: "Data-driven analysis and continuous optimization for better campaign performance."
    }
  ];

  const focusAreas = [
    "Quality Traffic",
    "Real Engagement",
    "Conversions",
    "Brand Growth",
    "Data Analysis",
    "ROI Optimization"
  ];

  return (
    <section id="skills" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Skills & Expertise</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary-foreground mt-2 mb-4">
            My Digital Marketing{" "}
            <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I focus on quality traffic, real engagement, and conversions.
          </p>
        </div>

        {/* Core Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {coreSkills.map((skill, index) => (
            <div
              key={skill.title}
              className="group bg-card rounded-2xl p-6 border border-border card-hover cursor-default"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <skill.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold text-card-foreground mb-3">{skill.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>

        {/* Focus Areas */}
        <div className="bg-card rounded-2xl p-8 border border-border">
          <h3 className="font-display text-xl font-bold text-card-foreground mb-6 text-center">My Focus Areas</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {focusAreas.map((area) => (
              <span
                key={area}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-sm font-medium text-card-foreground hover:border-primary/40 transition-colors duration-300"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
