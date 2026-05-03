import '@berrypjh/react-ui/styles.css';

import './global.css';
import { getServerTheme, getServerLocale } from '@it-tech-blog/preferences/server';
import ThemeClientProvider from '@/components/theme-client-provider';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  return locale === 'en'
    ? {
        title: 'Interactive Tech Lab',
        description: 'Explore complex tech concepts through interactive examples and hands-on content.',
      }
    : { title: 'Interactive Tech Lab', description: '복잡한 기술 개념을 예제와 실습형 콘텐츠로 쉽게 이해해봐요.' };
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const [theme, locale] = await Promise.all([getServerTheme(), getServerLocale()]);

  return (
    <html lang={locale} className={theme}>
      <body>
        <ThemeClientProvider defaultTheme={theme} defaultLocale={locale}>
          {children}
        </ThemeClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
