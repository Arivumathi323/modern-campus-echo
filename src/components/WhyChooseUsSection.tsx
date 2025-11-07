import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Wrench, Briefcase, Heart } from "lucide-react";

const reasons = [
  {
    title: "Industry-Ready Curriculum",
    description: "Our programs are designed with input from industry leaders to ensure you learn the latest technologies and skills that employers demand.",
    icon: BookOpen,
  },
  {
    title: "Experienced Faculty",
    description: "Learn from PhD-qualified professors and industry experts who bring real-world experience into the classroom.",
    icon: Users,
  },
  {
    title: "Learn by Doing",
    description: "Hands-on labs, live projects, and internships ensure you gain practical experience alongside theoretical knowledge.",
    icon: Wrench,
  },
  {
    title: "Placement Support",
    description: "Dedicated placement cell with 100% assistance, industry partnerships, and career guidance to help you land your dream job.",
    icon: Briefcase,
  },
  {
    title: "Vibrant Community",
    description: "Join a diverse community of tech enthusiasts, participate in hackathons, clubs, and events that foster innovation and collaboration.",
    icon: Heart,
  },
];

const WhyChooseUsSection = () => {
  return (
    <section id="why-choose-us" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Top Reasons to Study at<br />Madras Engineering College
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover what makes us the preferred choice for aspiring engineers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 hover:-translate-y-2 bg-white"
            >
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <reason.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground mb-2">
                  {reason.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
