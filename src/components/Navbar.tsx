import { useState, useEffect } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { label: "Home", id: "home" },
    { label: "Programs", id: "programs" },
    { label: "Why Choose Us", id: "why-choose-us" },
    { label: "Facilities", id: "facilities" },
    { label: "FAQ", id: "faq" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src="/src/assets/logo.png" alt="Madras Engineering College" className="h-14 w-auto" />
            <div>
              <h1 className="text-primary font-bold text-lg leading-tight">MADRAS</h1>
              <p className="text-secondary text-xs font-medium uppercase tracking-wide">Engineering College</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Contact Info & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-lg">
                <span className="font-semibold">TNEA Code</span>
                <span className="font-bold text-lg">1203</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center space-x-1 text-primary font-semibold">
                  <Phone className="w-4 h-4" />
                  <span>+91 70020 80020</span>
                </div>
                <div className="flex items-center space-x-1 text-muted-foreground text-xs">
                  <MapPin className="w-3 h-3" />
                  <span>Chennai, India</span>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-3 px-4 text-foreground hover:bg-muted hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <div className="mt-4 px-4 py-3 bg-primary/5 rounded-lg">
              <div className="flex items-center space-x-2 text-primary font-semibold mb-2">
                <Phone className="w-4 h-4" />
                <span>+91 70020 80020</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4" />
                <span>Chennai, India</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
