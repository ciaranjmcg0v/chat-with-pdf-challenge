import {create} from 'zustand';
import { useEffect } from 'react';
import { useTheme } from 'next-themes';

interface ThemeState {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  setTheme: (theme: 'light' | 'dark') => void;
}

const useZustandStore = create<ThemeState>((set) => ({
  theme: 'light',
  toggleTheme: () => set((state) => {
    const newTheme = state.theme === 'light' ? 'dark' : 'light';
    return { theme: newTheme };
  }),
  setTheme: (theme) => set(() => ({ theme }))
}));

export const useThemeStore = () => {
  const { theme, setTheme } = useTheme();
  const zustandSetTheme = useZustandStore((state) => state.setTheme);
  const toggleTheme = useZustandStore((state) => state.toggleTheme);

  useEffect(() => {
    if (theme) {
      zustandSetTheme(theme as 'light' | 'dark');
    }
  }, [theme, zustandSetTheme]);

  const combinedToggleTheme = () => {
    toggleTheme();
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return {
    theme: theme || 'light',  // Provide a default value if theme is undefined
    setTheme: (newTheme: 'light' | 'dark') => {
      setTheme(newTheme);
      zustandSetTheme(newTheme);
    },
    toggleTheme: combinedToggleTheme
  };
};
