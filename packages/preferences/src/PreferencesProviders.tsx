'use client';

import type { ReactNode } from 'react';

import { type FontFamily, FontFamilyProvider } from './font-family';
import { type FontSize, FontSizeProvider } from './font-size';
import { type Locale, LocaleProvider } from './locale';
import { type Motion, MotionProvider } from './motion';
import { type Theme, ThemeProvider } from './theme';

export const PreferencesProviders = ({
  theme,
  locale,
  fontSize,
  motion,
  fontFamily,
  children,
}: {
  theme: Theme;
  locale: Locale;
  fontSize: FontSize;
  motion: Motion;
  fontFamily: FontFamily;
  children: ReactNode;
}) => (
  <ThemeProvider defaultTheme={theme}>
    <LocaleProvider defaultLocale={locale}>
      <FontSizeProvider defaultFontSize={fontSize}>
        <MotionProvider defaultMotion={motion}>
          <FontFamilyProvider defaultFontFamily={fontFamily}>{children}</FontFamilyProvider>
        </MotionProvider>
      </FontSizeProvider>
    </LocaleProvider>
  </ThemeProvider>
);
