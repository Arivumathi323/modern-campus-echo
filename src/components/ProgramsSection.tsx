import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Cpu, Brain, Database, GitBranch, Code, Shield, TrendingUp } from "lucide-react";

// Import images
import facultyImg from '../assets/facality.jpg';
import companyImg from '../assets/company members.jpg';
import studentImg from '../assets/student.jpg';
import logoImg from '../assets/logo.png';

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
    <section id="programs" className="py-20 bg-[#F3E5F5]">
      {/* College Header Section - Matching Android Layout */}
      <div className="container mx-auto px-4 mb-16">
        <div className="flex flex-col items-center justify-center">
          <img
            src={logoImg}
            alt="College Logo"
            className="w-[180px] h-[180px] mb-6 object-contain"
          />
          <h1 className="text-[#6A1B9A] text-4xl md:text-5xl lg:text-6xl font-black text-center mb-4">
            MADRAS ENGINEERING COLLEGE
          </h1>
          <p className="text-[#8E24AA] text-xl md:text-2xl font-normal text-center">
            Premier Tech Education in Chennai
          </p>
        </div>
      </div>

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
      {/* Faculty and Company Members Section */}
      <div className="mt-24 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Our Faculty & Industry Partners
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Learn from experienced faculty and industry leaders who shape the future of technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Industry Partners */}
          <Card className="group hover:shadow-xl transition-all duration-300">
            <CardHeader className="p-0">
              <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
                <img
                  src={companyImg}
                  alt="Industry Partner"
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle className="text-xl font-bold mb-2">Industry Leaders</CardTitle>
              <CardDescription>
                Learn directly from industry experts who bring real-world experience and insights
              </CardDescription>
            </CardContent>
          </Card>

          {/* Faculty */}
          <Card className="group hover:shadow-xl transition-all duration-300">
            <CardHeader className="p-0">
              <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
                <img
                  src={facultyImg}
                  alt="Faculty"
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle className="text-xl font-bold mb-2">Expert Faculty</CardTitle>
              <CardDescription>
                Our distinguished faculty combines academic excellence with practical expertise
              </CardDescription>
            </CardContent>
          </Card>

          {/* Student Success */}
          <Card className="group hover:shadow-xl transition-all duration-300">
            <CardHeader className="p-0">
              <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
                <img
                  src={studentImg}
                  alt="Student Success"
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle className="text-xl font-bold mb-2">Student Success</CardTitle>
              <CardDescription>
                Our graduates excel in leading tech companies and innovative startups
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Percentage Calculator Section */}
      <div className="mt-24 container mx-auto px-4 max-w-xl">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-[#6A1B9A] text-2xl md:text-3xl font-black text-center mb-8">
            Percentage Calculator
          </h2>

          <div className="space-y-6">
            {/* Mathematics Input */}
            <div className="space-y-2">
              <label htmlFor="math" className="text-[#6A1B9A] font-semibold block">
                Mathematics Marks
              </label>
              <input
                type="number"
                id="math"
                placeholder="Enter Mathematics marks (out of 100)"
                className="w-full px-4 py-3 rounded-lg border-2 border-[#6A1B9A]/20 focus:border-[#6A1B9A] focus:outline-none transition-colors"
                min="0"
                max="100"
              />
            </div>

            {/* Physics Input */}
            <div className="space-y-2">
              <label htmlFor="physics" className="text-[#6A1B9A] font-semibold block">
                Physics Marks
              </label>
              <input
                type="number"
                id="physics"
                placeholder="Enter Physics marks (out of 100)"
                className="w-full px-4 py-3 rounded-lg border-2 border-[#6A1B9A]/20 focus:border-[#6A1B9A] focus:outline-none transition-colors"
                min="0"
                max="100"
              />
            </div>

            {/* Chemistry Input */}
            <div className="space-y-2">
              <label htmlFor="chemistry" className="text-[#6A1B9A] font-semibold block">
                Chemistry Marks
              </label>
              <input
                type="number"
                id="chemistry"
                placeholder="Enter Chemistry marks (out of 100)"
                className="w-full px-4 py-3 rounded-lg border-2 border-[#6A1B9A]/20 focus:border-[#6A1B9A] focus:outline-none transition-colors"
                min="0"
                max="100"
              />
            </div>

            {/* Calculate Button */}
            <button
              className="w-full bg-[#6A1B9A] text-white font-bold py-4 rounded-lg hover:bg-[#6A1B9A]/90 transition-colors mt-8"
              onClick={() => {
                const mathInput = document.getElementById('math') as HTMLInputElement;
                const physicsInput = document.getElementById('physics') as HTMLInputElement;
                const chemistryInput = document.getElementById('chemistry') as HTMLInputElement;
                
                const mathMarks = Number(mathInput?.value || 0);
                const physicsMarks = Number(physicsInput?.value || 0);
                const chemistryMarks = Number(chemistryInput?.value || 0);
                
                const totalMarks = mathMarks + physicsMarks + chemistryMarks;
                const percentage = (totalMarks / 300) * 100;
                
                const resultElement = document.getElementById('percentage-result');
                if (resultElement) {
                  resultElement.textContent = `Your Percentage: ${percentage.toFixed(2)}%`;
                }
              }}
            >
              Calculate Percentage
            </button>

            {/* Result Text */}
            <p id="percentage-result" className="text-[#4A148C] text-xl font-bold text-center mt-6">
              Your Percentage: --%
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
