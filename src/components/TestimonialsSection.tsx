import { Quote, Star } from "lucide-react";
import { useState } from "react";

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "Pratyaksh's understanding of the energy drink market and digital marketing fundamentals helped us successfully launch our natural energy drink product. His SEO strategy targeting health-conscious consumers delivered excellent results.",
      author: "Fitness Brand Owner",
      role: "Health & Wellness Industry",
      rating: 5
    },
    {
      quote: "Working with Pratyaksh on our sugar-free energy drinks campaign was excellent. His Google Ads expertise and data-driven approach helped us compete effectively against major brands like Monster Energy Drink.",
      author: "Beverage Startup Founder",
      role: "Beverage Industry",
      rating: 5
    },
    {
      quote: "Pratyaksh developed an outstanding content marketing strategy for our organic energy drinks brand. His knowledge of SEO and ability to create compelling content about healthy energy alternatives significantly improved our online visibility.",
      author: "Health & Wellness Company Manager",
      role: "Organic Products",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary-foreground mt-2 mb-4">
            What Clients{" "}
            <span className="gradient-text">Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real feedback from brands I've helped grow in the energy drink industry
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="relative bg-card rounded-3xl p-8 md:p-12 border border-border shadow-lg">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Quote className="w-6 h-6 text-primary-foreground" />
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6 mt-4">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="font-display text-xl md:text-2xl text-card-foreground leading-relaxed mb-8">
              "{testimonials[activeIndex].quote}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <span className="font-display font-bold text-primary text-lg">
                  {testimonials[activeIndex].author.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <div className="font-semibold text-card-foreground">{testimonials[activeIndex].author}</div>
                <div className="text-sm text-muted-foreground">{testimonials[activeIndex].role}</div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-primary w-8' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
