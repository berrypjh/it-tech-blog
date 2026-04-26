'use client';

import { createContext, useContext, useState } from 'react';
import { ThemeProvider } from '@berrypjh/react-ui';

interface ThemeContextValue {
  isDark: boolean;
  setIsDark: (v: boolean | ((prev: boolean) => boolean)) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme은 ThemeClientProvider 안에서 사용해야 합니다.');
  return ctx;
};

export default function ThemeClientProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(true);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <ThemeProvider mode={isDark ? 'dark' : 'global'}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
