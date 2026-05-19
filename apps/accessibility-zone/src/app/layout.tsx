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
        title: 'A11y Lab — Web Accessibility Lab',
        description: 'A hands-on learning platform for web accessibility.',
      }
    : {
        title: 'A11y Lab — 웹 접근성 실험실',
        description:
          '모두를 위한 웹 접근성 학습 플랫폼. 실습과 예제로 웹 접근성을 쉽게 배워보세요.',
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
      data-font={fontFamily !== 'sans' ? fontFamily : undefined}
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
