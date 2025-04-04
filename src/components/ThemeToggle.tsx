
import { useTheme } from "@/contexts/ThemeContext";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button 
      onClick={toggleTheme} 
      variant="outline" 
      size="icon" 
      className="fixed bottom-4 right-4 rounded-full h-10 w-10 shadow-lg z-50"
    >
      {theme === 'theme-green' ? (
        <Moon className="h-5 w-5 text-primary" />
      ) : (
        <Sun className="h-5 w-5 text-primary" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeToggle;
