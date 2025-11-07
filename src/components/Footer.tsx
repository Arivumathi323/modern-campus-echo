import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* College Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-xl">M</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">MADRAS</h3>
                <p className="text-xs text-white/80 uppercase tracking-wide">Engineering College</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              India's premier engineering college specializing in cutting-edge technology education and research.
            </p>
            <p className="text-white/90 text-sm font-semibold">
              Affiliated to Anna University<br />
              TNEA Code: 1203
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-white/70 hover:text-white transition-colors">Home</a></li>
              <li><a href="#programs" className="text-white/70 hover:text-white transition-colors">Programs</a></li>
              <li><a href="#why-choose-us" className="text-white/70 hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#facilities" className="text-white/70 hover:text-white transition-colors">Facilities</a></li>
              <li><a href="#faq" className="text-white/70 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold text-lg mb-4">Our Programs</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Computer Science & Engineering</li>
              <li>Artificial Intelligence & Data Science</li>
              <li>Information Technology</li>
              <li>Cyber Security</li>
              <li>CS & Business Systems</li>
              <li>Data Science</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <strong className="text-white">Phone:</strong><br />
                +91 70020 80020
              </li>
              <li>
                <strong className="text-white">Email:</strong><br />
                admissions@madrascollege.ac.in
              </li>
              <li>
                <strong className="text-white">Address:</strong><br />
                Chennai - 600025, Tamil Nadu
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-white/70 text-sm mb-4 md:mb-0">
            © 2024 Madras Engineering College. All Rights Reserved. | 
            <a href="#" className="hover:text-white ml-2">Mandatory Disclosure</a> | 
            <a href="#" className="hover:text-white ml-2">Privacy Policy</a> | 
            <a href="#" className="hover:text-white ml-2">Terms & Conditions</a>
          </p>
          
          <div className="flex items-center space-x-4">
            <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
