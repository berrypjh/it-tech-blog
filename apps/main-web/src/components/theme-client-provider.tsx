'use client';

import type { Locale } from '@it-tech-blog/preferences';
import { LocaleProvider, ThemeProvider, useTheme } from '@it-tech-blog/preferences';

import { ThemeProvider as UIThemeProvider } from '@berrypjh/react-ui';

const UIThemeBridge = ({ children }: { children: React.ReactNode }) => {
  const { resolvedTheme } = useTheme();
  return <UIThemeProvider mode={resolvedTheme === 'dark' ? 'dark' : 'global'}>{children}</UIThemeProvider>;
};

const ThemeClientProvider = ({
  children,
  defaultTheme,
  defaultLocale,
}: {
  children: React.ReactNode;
  defaultTheme: 'dark' | 'light';
  defaultLocale: Locale;
}) => (
  <ThemeProvider defaultTheme={defaultTheme}>
    <LocaleProvider defaultLocale={defaultLocale}>
      <UIThemeBridge>{children}</UIThemeBridge>
    </LocaleProvider>
  </ThemeProvider>
);

export default ThemeClientProvider;
