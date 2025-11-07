import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Wrench, Briefcase, Heart } from "lucide-react";
import studentImg from "@/assets/student.jpg";

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
    <section id="why-choose-us" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Top Reasons to Study at MEC
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-12">
          <div className="flex items-center justify-center">
            <img 
              src={studentImg} 
              alt="MEC Student" 
              className="rounded-3xl shadow-2xl w-full max-w-md object-cover"
            />
          </div>

          <div className="grid grid-cols-1 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-foreground/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <reason.icon className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
