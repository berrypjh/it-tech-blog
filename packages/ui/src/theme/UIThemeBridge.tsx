'use client';

import { type Theme, useTheme } from '@it-tech-blog/preferences';

import { type ThemeName, ThemeProvider as UIThemeProvider } from '@berrypjh/react-ui';

type Props = {
  children: React.ReactNode;
  /** 라이트/다크 설정을 react-ui 테마로 바꿔 쓴다. 생략하면 light/dark 그대로. */
  themes?: Record<Theme, ThemeName>;
};

export const UIThemeBridge = ({ children, themes }: Props) => {
  const { resolvedTheme } = useTheme();

  return (
    <UIThemeProvider mode={themes?.[resolvedTheme] ?? resolvedTheme}>{children}</UIThemeProvider>
  );
};
