'use client';

import { createContext, useCallback, useContext, useState } from 'react';

import type { ThemeName } from '@berrypjh/react-ui';

/** 사용자가 고를 수 있는 테마. react-ui `ThemeName` 중 지원하는 부분집합. */
export type Theme = Extract<ThemeName, 'dark' | 'light'>;

interface ThemeContextValue {
  resolvedTheme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
};

export const ThemeProvider = ({
  children,
  defaultTheme = 'dark',
}: {
  children: React.ReactNode;
  defaultTheme?: Theme;
}) => {
  const [resolvedTheme, setResolvedTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const cls = document.documentElement.className;
      if (cls === 'dark' || cls === 'light') return cls;
    }

    return defaultTheme;
  });

  const setTheme = useCallback((theme: Theme) => {
    setResolvedTheme(theme);
    document.cookie = `theme=${theme};path=/;max-age=31536000`;
    document.documentElement.className = theme;
  }, []);

  return (
    <ThemeContext.Provider value={{ resolvedTheme, setTheme }}>{children}</ThemeContext.Provider>
  );
};
