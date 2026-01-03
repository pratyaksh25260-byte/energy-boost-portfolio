import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Update page title and meta description for SEO
    document.title = "Pratyaksh Dixit - Energy Drink Digital Marketing Expert | SEO & Ads Specialist";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Digital marketing specialist for energy drink brands. Expert in SEO, Google Ads, Meta Ads for healthy, natural & organic energy drinks. 1 year experience.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Digital marketing specialist for energy drink brands. Expert in SEO, Google Ads, Meta Ads for healthy, natural & organic energy drinks. 1 year experience.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
