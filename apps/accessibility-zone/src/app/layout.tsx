import './global.css';
import {
  getServerTheme,
  getServerLocale,
  getServerFontSize,
  getServerMotion,
  getServerFontFamily,
} from '@it-tech-blog/preferences/server';
import {
  ThemeProvider,
  LocaleProvider,
  FontSizeProvider,
  MotionProvider,
  FontFamilyProvider,
} from '@it-tech-blog/preferences';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  return locale === 'en'
    ? { title: 'A11y Lab — Web Accessibility Lab', description: 'A hands-on learning platform for web accessibility.' }
    : {
        title: 'A11y Lab — 웹 접근성 실험실',
        description: '모두를 위한 웹 접근성 학습 플랫폼. 실습과 예제로 웹 접근성을 쉽게 배워보세요.',
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
      <body>
        <ThemeProvider defaultTheme={theme}>
          <LocaleProvider defaultLocale={locale}>
            <FontSizeProvider defaultFontSize={fontSize}>
              <MotionProvider defaultMotion={motion}>
                <FontFamilyProvider defaultFontFamily={fontFamily}>{children}</FontFamilyProvider>
              </MotionProvider>
            </FontSizeProvider>
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
