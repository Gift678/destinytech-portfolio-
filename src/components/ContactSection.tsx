import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      toast({
        title: "Message sent",
        description: "I'll get back to you as soon as possible.",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mb-12">Contact Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <Card className="slide-up-animation">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-primary mt-1">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Location</h3>
                    <p className="text-muted-foreground">Nairobi, Kenya</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="slide-up-animation slide-up-delay-1">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-primary mt-1">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Email</h3>
                    <p className="text-muted-foreground break-words">giftmwangi39@gmail.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="slide-up-animation slide-up-delay-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-primary mt-1">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Phone</h3>
                    <p className="text-muted-foreground">0715451892</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="lg:col-span-2 slide-up-animation slide-up-delay-3">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email" 
                      required 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    id="subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject" 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message" 
                    rows={5} 
                    required 
                  />
                </div>
                
                <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
