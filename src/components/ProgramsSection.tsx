import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Cpu, Brain, Database, GitBranch, Code, Shield, TrendingUp } from "lucide-react";

const programs = [
  {
    title: "B.E. in Computer Science & Engineering",
    description: "Design, develop, and lead with powerful computing skills to drive innovation in the digital world.",
    icon: Code,
    color: "bg-gradient-to-br from-green-300 to-green-400",
  },
  {
    title: "B.Tech. in Artificial Intelligence & Data Science",
    description: "Master AI, Machine Learning & Big Data to solve real-world problems with intelligent solutions.",
    icon: Brain,
    color: "bg-gradient-to-br from-red-300 to-red-400",
  },
  {
    title: "B.E. in Computer Science & Engineering (AI & ML)",
    description: "Dive deep into AI & Machine Learning technologies to build smart systems & future-ready applications.",
    icon: GitBranch,
    color: "bg-gradient-to-br from-purple-300 to-purple-400",
  },
  {
    title: "B.Tech. in Information Technology (IT)",
    description: "Ace Computing, Programming & System Design to build innovative software & technology solutions.",
    icon: Cpu,
    color: "bg-gradient-to-br from-yellow-300 to-yellow-400",
  },
  {
    title: "B.Tech. in Cyber Security",
    description: "Protect digital assets and networks with cutting-edge cybersecurity skills and ethical hacking expertise.",
    icon: Shield,
    color: "bg-gradient-to-br from-blue-300 to-blue-400",
  },
  {
    title: "B.Tech. in CS & Business Systems",
    description: "Bridge technology and business with skills in software development, analytics, and strategic thinking.",
    icon: TrendingUp,
    color: "bg-gradient-to-br from-pink-300 to-pink-400",
  },
  {
    title: "B.Tech. in Data Science",
    description: "Unlock insights from data using advanced analytics, machine learning, and visualization techniques.",
    icon: Database,
    color: "bg-gradient-to-br from-indigo-300 to-indigo-400",
  },
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Top Programs to Study at<br />Madras Engineering College
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose from our industry-aligned programs designed to make you future-ready
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {programs.map((program, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <div className="h-full">
                  <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 hover:-translate-y-2 h-full">
                    <CardHeader className={`${program.color} rounded-t-lg p-8 flex items-center justify-center`}>
                      <div className="w-24 h-24 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                        <program.icon className="w-12 h-12 text-foreground" />
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <CardTitle className="text-lg font-bold text-foreground mb-3 leading-tight">
                        {program.title}
                      </CardTitle>
                      <CardDescription className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        {program.description}
                      </CardDescription>
                      <Button 
                        variant="default" 
                        className="w-full bg-foreground hover:bg-foreground/90 text-white font-semibold"
                      >
                        Let's Chat
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 md:-left-12" />
          <CarouselNext className="-right-4 md:-right-12" />
        </Carousel>
      </div>
    </section>
  );
};

export default ProgramsSection;
