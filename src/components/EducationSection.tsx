
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, GraduationCap } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mb-12">Education & Certification</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="slide-up-animation">
            <CardContent className="p-6 relative">
              <div className="absolute top-6 right-6 text-primary">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Computer Science</h3>
              <p className="text-primary font-medium mb-2">University of Nairobi</p>
              <p className="text-muted-foreground mb-4">2020 - 2024</p>
              <p className="text-muted-foreground">
                Pursued comprehensive studies in computer science fundamentals, algorithms, 
                data structures, and software development methodologies.
              </p>
            </CardContent>
          </Card>

          <Card className="slide-up-animation slide-up-delay-1">
            <CardContent className="p-6 relative">
              <div className="absolute top-6 right-6 text-primary">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Networking Basics & Packet Tracer</h3>
              <p className="text-primary font-medium mb-2">Cisco Networking Academy</p>
              <p className="text-muted-foreground mb-4">2023</p>
              <p className="text-muted-foreground">
                Certification in Networking Basics, Packet Tracer, and Python for network automation.
                Gained hands-on experience with network configuration and troubleshooting.
              </p>
            </CardContent>
          </Card>

          <Card className="slide-up-animation slide-up-delay-2 md:col-span-2">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Professional Development</h3>
              <p className="text-muted-foreground mb-6">
                Besides formal education, I've pursued various online courses and tutorials to enhance my skills
                in specific technologies and stay up-to-date with the latest industry developments.
              </p>
              <Button variant="outline" className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Download CV
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
