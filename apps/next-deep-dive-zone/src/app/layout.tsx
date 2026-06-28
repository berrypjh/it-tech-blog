import { PreferencesProviders, ThemeDetectionScript } from '@it-tech-blog/preferences';
import {
  getServerFontFamily,
  getServerFontSize,
  getServerLocale,
  getServerMotion,
  getServerTheme,
} from '@it-tech-blog/preferences/server';
import { UIThemeBridge } from '@it-tech-blog/ui';

import { AppShell } from '@/components/shell';

import '@berrypjh/react-ui/styles.css';
import './global.css';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  return locale === 'en'
    ? {
        title: 'Next Lab — Next.js Deep Dive',
        description: 'A deep-dive learning platform for Next.js internals.',
      }
    : {
        title: 'Next Lab — Next.js 심층 탐구',
        description: 'App Router, RSC, 렌더링까지 Next.js 내부 동작을 깊이 있게 배우는 학습 공간.',
      };
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const [theme, locale, fontSize, motion, fontFamily] = await Promise.all([
    getServerTheme(),
    getServerLocale(),
    getServerFontSize(),
    getServerMotion(),
    getServerFontFamily(),
  ]);

  return (
    <html
      lang={locale}
      className={theme}
      data-font-size={fontSize}
      data-motion={motion === 'reduce' ? 'reduce' : undefined}
      data-font={fontFamily}
    >
      <head>
        <ThemeDetectionScript />
      </head>
      <body>
        <PreferencesProviders
          theme={theme}
          locale={locale}
          fontSize={fontSize}
          motion={motion}
          fontFamily={fontFamily}
        >
          <UIThemeBridge>
            <AppShell>{children}</AppShell>
          </UIThemeBridge>
        </PreferencesProviders>
      </body>
    </html>
  );
};

export default RootLayout;
