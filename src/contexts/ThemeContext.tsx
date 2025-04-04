
import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'theme-green' | 'theme-purple' | 'theme-bw';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('theme-bw');

  // Load theme from local storage on initial render
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && (savedTheme === 'theme-green' || savedTheme === 'theme-purple' || savedTheme === 'theme-bw')) {
      setTheme(savedTheme);
      document.body.className = savedTheme;
    } else {
      // Set default theme to black and white
      document.body.className = theme;
      localStorage.setItem('theme', theme);
    }
  }, []);

  const toggleTheme = () => {
    const themes: Theme[] = ['theme-bw', 'theme-green', 'theme-purple'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const newTheme = themes[nextIndex];
    
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.body.className = newTheme;
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
