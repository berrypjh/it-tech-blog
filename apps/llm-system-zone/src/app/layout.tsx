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
import '@it-tech-blog/ui/zone-transition.css';
import './global.css';

/** 라이트/다크 설정에 대응하는 react-ui 테마. 종이 · 먹 톤의 짝이다. */
const uiThemes = { light: 'ivory', dark: 'charcoal' } as const;

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  return locale === 'en'
    ? {
        title: 'LLM Lab — LLM Systems',
        description: 'From model to system: structure, verification and operation of LLM software.',
      }
    : {
        title: 'LLM Lab — LLM 시스템',
        description: '모델에서 시스템까지, LLM 소프트웨어의 구조와 검증, 운영을 따라갑니다.',
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
          <UIThemeBridge themes={uiThemes}>
            <AppShell>{children}</AppShell>
          </UIThemeBridge>
        </PreferencesProviders>
      </body>
    </html>
  );
};

export default RootLayout;
