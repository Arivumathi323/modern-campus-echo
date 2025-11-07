import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    agreed: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.agreed) {
      toast({
        title: "Terms Required",
        description: "Please agree to the terms and privacy policy.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Request Submitted!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", phone: "", email: "", agreed: false });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary via-primary to-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Get in Touch with Us
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Ready to start your journey? Request a callback and our admission team will contact you
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
            <h3 className="text-2xl font-bold mb-6">Request a Callback</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-white mb-2 block">Full Name *</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/50 focus:border-white"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-white mb-2 block">Mobile Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your mobile number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/50 focus:border-white"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-white mb-2 block">Email Address (Optional)</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/50 focus:border-white"
                />
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="terms"
                  checked={formData.agreed}
                  onCheckedChange={(checked) => setFormData({ ...formData, agreed: checked as boolean })}
                  className="bg-white/20 border-white/30 data-[state=checked]:bg-white data-[state=checked]:text-primary mt-1"
                />
                <Label htmlFor="terms" className="text-white text-sm leading-relaxed cursor-pointer">
                  I agree to receive communications and accept the Terms & Privacy Policy
                </Label>
              </div>

              <Button 
                type="submit"
                size="lg"
                className="w-full bg-white text-primary hover:bg-white/90 font-semibold text-lg py-6"
              >
                Request Callback
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Phone</h4>
                    <p className="text-white/80">+91 70020 80020</p>
                    <p className="text-white/80">+91 44 2534 5678</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Email</h4>
                    <p className="text-white/80">admissions@madrascollege.ac.in</p>
                    <p className="text-white/80">info@madrascollege.ac.in</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Address</h4>
                    <p className="text-white/80 leading-relaxed">
                      Madras Engineering College<br />
                      Tech Campus, Anna University<br />
                      Chennai - 600025<br />
                      Tamil Nadu, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <h4 className="font-semibold text-lg mb-2">Admission Helpline</h4>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                Our admissions team is available Monday to Saturday, 9:00 AM to 6:00 PM to answer all your queries.
              </p>
              <div className="flex items-center space-x-2 text-accent font-semibold">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span>Available Now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
