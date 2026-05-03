'use client';

import { ThemeProvider as UIThemeProvider } from '@berrypjh/react-ui';

import { ThemeProvider, useTheme, LocaleProvider } from '@it-tech-blog/preferences';
import type { Locale } from '@it-tech-blog/preferences';

const UIThemeBridge = ({ children }: { children: React.ReactNode }) => {
  const { resolvedTheme } = useTheme();
  return <UIThemeProvider mode={resolvedTheme === 'dark' ? 'dark' : 'global'}>{children}</UIThemeProvider>;
};

export default function ThemeClientProvider({
  children,
  defaultTheme,
  defaultLocale,
}: {
  children: React.ReactNode;
  defaultTheme: 'dark' | 'light';
  defaultLocale: Locale;
}) {
  return (
    <ThemeProvider defaultTheme={defaultTheme}>
      <LocaleProvider defaultLocale={defaultLocale}>
        <UIThemeBridge>{children}</UIThemeBridge>
      </LocaleProvider>
    </ThemeProvider>
  );
}
