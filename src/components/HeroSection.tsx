
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 pb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <p className="text-lg md:text-xl text-primary mb-2 animate-fade-in">
            Welcome to DestinyTECH
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Hello, I'm <span className="text-primary">GIFT DESTINY</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in">
            A passionate developer and networking professional based in Nairobi, creating solutions through code and connectivity.
          </p>
          <div className="flex gap-4 animate-fade-in">
            <Button asChild size="lg">
              <a href="#contact">Get in touch</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#projects">View my work</a>
            </Button>
          </div>

          <div className="absolute bottom-10 animate-bounce-slow hidden md:block">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              <ArrowDown size={24} />
              <span className="sr-only">Scroll down</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
