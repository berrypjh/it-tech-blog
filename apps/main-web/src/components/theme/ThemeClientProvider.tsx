'use client';

import type { Locale } from '@it-tech-blog/preferences';
import { LocaleProvider, ThemeProvider } from '@it-tech-blog/preferences';
import { UIThemeBridge } from '@it-tech-blog/ui';

export const ThemeClientProvider = ({
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
