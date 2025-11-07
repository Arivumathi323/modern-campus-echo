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
    <section id="contact" className="py-20 bg-white text-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Begin Your Tech Journey at Madras Engineering College
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            In-Demand Programs, Expert Mentors & Industry-Focused Training!
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-muted/30 p-8 rounded-2xl border border-border">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Request a Callback</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-foreground mb-2 block">Full Name *</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-white border-border"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-foreground mb-2 block">Mobile Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-white border-border"
                  required
                />
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="terms"
                  checked={formData.agreed}
                  onCheckedChange={(checked) => setFormData({ ...formData, agreed: checked as boolean })}
                  className="mt-1"
                />
                <Label htmlFor="terms" className="text-foreground text-sm leading-relaxed cursor-pointer">
                  I agree to Madras Engineering College terms & privacy policy*
                </Label>
              </div>

              <Button 
                type="submit"
                size="lg"
                className="w-full bg-foreground text-white hover:bg-foreground/90 font-semibold text-lg py-6"
              >
                Request Callback
              </Button>
            </form>
          </div>

          {/* Facilities List */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Facilities</h3>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start space-x-3">
                <span className="text-primary mt-1">•</span>
                <span>Real-Time Mentors From Fortune 500</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary mt-1">•</span>
                <span>Internally Funded Student Projects</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary mt-1">•</span>
                <span>Interactive Smart Classrooms & Hi-Tech Labs</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary mt-1">•</span>
                <span>100% Wifi-Enabled Digital Campus</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary mt-1">•</span>
                <span>Fully Air-Conditioned Campus</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary mt-1">•</span>
                <span>Bus Facility Covering All Parts of Chennai</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary mt-1">•</span>
                <span>Multicuisine Cafeteria</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary mt-1">•</span>
                <span>Fully-Equipped A/C Hostel Facilities</span>
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-2">Contact:</p>
              <p className="text-lg font-bold text-primary">+91 70020 80020</p>
              <p className="text-sm text-muted-foreground mt-2">TNEA Code: 1203</p>
              <p className="text-sm text-muted-foreground">Chennai, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
