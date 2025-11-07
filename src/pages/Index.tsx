import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProgramsSection from "@/components/ProgramsSection";
import CompanyLogos from "@/components/CompanyLogos";
import CertificationsSection from "@/components/CertificationsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProgramsSection />
      <CompanyLogos />
      <CertificationsSection />
      <WhyChooseUsSection />
      <FacilitiesSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
