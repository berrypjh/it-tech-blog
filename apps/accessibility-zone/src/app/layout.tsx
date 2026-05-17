import {
  FontFamilyProvider,
  FontSizeProvider,
  LocaleProvider,
  MotionProvider,
  ThemeProvider,
} from '@it-tech-blog/preferences';
import {
  getServerFontFamily,
  getServerFontSize,
  getServerLocale,
  getServerMotion,
  getServerTheme,
} from '@it-tech-blog/preferences/server';

import { AppShell } from '@/components/shell';
import { UIThemeBridge } from '@/components/theme';

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
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(!document.cookie.match(/(?:^|;\\s*)theme=/)){document.documentElement.className=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        <ThemeProvider defaultTheme={theme}>
          <LocaleProvider defaultLocale={locale}>
            <FontSizeProvider defaultFontSize={fontSize}>
              <MotionProvider defaultMotion={motion}>
                <FontFamilyProvider defaultFontFamily={fontFamily}>
                  <UIThemeBridge>
                    <AppShell>{children}</AppShell>
                  </UIThemeBridge>
                </FontFamilyProvider>
              </MotionProvider>
            </FontSizeProvider>
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
