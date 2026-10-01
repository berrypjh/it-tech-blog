'use client';

import type { Locale } from '@it-tech-blog/preferences';
import { LocaleProvider, ThemeProvider } from '@it-tech-blog/preferences';
import { UIThemeBridge } from '@it-tech-blog/ui';

/** 라이트/다크 설정에 대응하는 react-ui 테마. 랜딩의 cyan 강조와 같은 짝이다. */
const uiThemes = { light: 'frost', dark: 'midnight' } as const;

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
      <UIThemeBridge themes={uiThemes}>{children}</UIThemeBridge>
    </LocaleProvider>
  </ThemeProvider>
);
