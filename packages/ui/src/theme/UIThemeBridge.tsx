'use client';

import { useTheme } from '@it-tech-blog/preferences';

import { ThemeProvider as UIThemeProvider } from '@berrypjh/react-ui';

export const UIThemeBridge = ({ children }: { children: React.ReactNode }) => {
  const { resolvedTheme } = useTheme();

  return <UIThemeProvider mode={resolvedTheme}>{children}</UIThemeProvider>;
};
