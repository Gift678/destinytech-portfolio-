
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import { ThemeProvider } from "@/contexts/ThemeContext";

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <EducationSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
};

export default Index;
