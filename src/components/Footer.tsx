
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <a href="#hero" className="text-2xl font-bold text-primary mb-4">
            Destiny<span className="text-foreground">TECH</span>
          </a>
          
          <div className="flex gap-4 mb-6">
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a 
              href="https://linkedin.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a 
              href="https://twitter.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
          
          <div className="text-center">
            <p className="text-muted-foreground">
              &copy; {currentYear} GIFT DESTINY. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Built with passion and code
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
