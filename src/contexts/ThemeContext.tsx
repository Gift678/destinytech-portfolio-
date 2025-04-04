
import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'theme-green' | 'theme-purple';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('theme-green');

  // Load theme from local storage on initial render
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && (savedTheme === 'theme-green' || savedTheme === 'theme-purple')) {
      setTheme(savedTheme);
      document.body.className = savedTheme;
    } else {
      document.body.className = theme;
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'theme-green' ? 'theme-purple' : 'theme-green';
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
