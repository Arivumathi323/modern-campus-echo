import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight animate-fade-in">
            Your Tech Journey Begins<br />
            <span className="text-foreground">@ Madras Engineering College.</span>
          </h1>
          
          <p className="text-base md:text-lg text-foreground/80 mb-8 max-w-4xl mx-auto leading-relaxed">
            India's 1st Engineering College Specialising in IT, Computer Science, Data Science, 
            Artificial Intelligence, Machine Learning, Cybersecurity & Business Systems.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-transparent text-foreground border-2 border-foreground hover:bg-foreground hover:text-white px-10 py-6 text-base font-medium rounded-full transition-all"
            >
              Get in Touch
            </Button>
          </div>

          <div className="border-t border-border pt-8">
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-foreground/70 text-sm md:text-base">
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-foreground">Paid Internship</span>
                <span>Opportunities</span>
              </div>
              <div className="w-px h-6 bg-border hidden md:block"></div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-foreground">Modern Lab</span>
                <span>Facilities</span>
              </div>
              <div className="w-px h-6 bg-border hidden md:block"></div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-foreground">Industry-Ready</span>
                <span>Curriculum</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
