import { Award, Briefcase, GraduationCap, DollarSign, Microscope, Users, Wifi, Home } from "lucide-react";

const facilities = [
  { title: "Up to 100% Scholarships", icon: Award },
  { title: "100% Placement Assistance", icon: Briefcase },
  { title: "All PhD Faculties", icon: GraduationCap },
  { title: "Paid Internships", icon: DollarSign },
  { title: "Smart Labs & Equipment", icon: Microscope },
  { title: "Real-Time Industry Mentors", icon: Users },
  { title: "Fully Wi-Fi Campus", icon: Wifi },
  { title: "A/C Hostels & Bus Facility", icon: Home },
];

const FacilitiesSection = () => {
  return (
    <section id="facilities" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            World-Class Facilities & Support
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Everything you need to excel in your academic and professional journey
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {facilities.map((facility, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors">
                <facility.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-white text-sm md:text-base leading-tight">
                {facility.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
