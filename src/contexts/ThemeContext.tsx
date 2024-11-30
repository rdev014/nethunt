'use client';
import { createContext, useContext, useEffect, useState, ReactNode, useCallback } from 'react';

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
  login: boolean;  // Add login state
  setLogin: (loginState: boolean) => void;  // Function to set login state
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<string>('light');
  const [login, setLogin] = useState<boolean>(false);  // Track login state

  // Handle theme initialization
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      setTheme(systemPreference);
    }
  }, []);

  // Memoize the toggleTheme function so it stays the same across renders
  const toggleTheme = useCallback(() => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    try {
      localStorage.setItem('theme', newTheme);
    } catch (error) {
      console.error('Failed to save theme to localStorage:', error);
    }
  }, [theme]);  // This ensures the function uses the latest `theme` value

  // Trigger theme change based on login state
  useEffect(() => {
    if (login) {
      toggleTheme();
    }
  }, [login, toggleTheme]);  // Add toggleTheme here to avoid stale closures

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, login, setLogin }}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
