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
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary to-secondary overflow-hidden pt-20">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
            Your Tech Journey Begins<br />
            <span className="text-accent">@ Madras Engineering College.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            India's 1st Engineering College Specialising in IT, Computer Science, Data Science, 
            Artificial Intelligence, Machine Learning, Cybersecurity & Business Systems.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-foreground text-white hover:bg-foreground/90 px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={scrollToContact}
              className="bg-white/10 text-white border-2 border-white hover:bg-white hover:text-primary px-8 py-6 text-lg font-semibold rounded-full backdrop-blur-sm transition-all"
            >
              Apply Now
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-white/80 text-sm md:text-base">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="font-medium"><strong className="text-white">Paid Internship</strong> Opportunities</span>
            </div>
            <div className="w-px h-6 bg-white/30 hidden md:block"></div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="font-medium"><strong className="text-white">Modern Lab</strong> Facilities</span>
            </div>
            <div className="w-px h-6 bg-white/30 hidden md:block"></div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="font-medium"><strong className="text-white">Industry-Ready</strong> Curriculum</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
