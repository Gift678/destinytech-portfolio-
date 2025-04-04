
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Phone } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mb-12">About Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="slide-up-animation">
            <CardContent className="p-6">
              <div className="text-primary mb-4">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground">Nairobi, Kenya</p>
            </CardContent>
          </Card>

          <Card className="slide-up-animation slide-up-delay-1">
            <CardContent className="p-6">
              <div className="text-primary mb-4">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">giftmwangi39@gmail.com</p>
            </CardContent>
          </Card>

          <Card className="slide-up-animation slide-up-delay-2">
            <CardContent className="p-6">
              <div className="text-primary mb-4">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-muted-foreground">0715451892</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12">
          <Card className="slide-up-animation slide-up-delay-3">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-4">My Story</h3>
              <p className="text-muted-foreground mb-4">
                I'm a passionate tech enthusiast with a deep interest in networking and software development. I thrive on creating 
                technological solutions that make a difference in how people interact with digital systems.
              </p>
              <p className="text-muted-foreground mb-4">
                With a strong foundation in networking basics, Python programming, and Packet Tracer, I'm constantly learning and improving my skills
                to stay at the forefront of technology trends.
              </p>
              <p className="text-muted-foreground">
                What drives me is the potential of technology to solve complex problems and make life simpler. I'm particularly interested in 
                network automation and building systems that are both robust and user-friendly.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
