import '@berrypjh/react-ui/styles.css';
import './global.css';
import { getServerTheme, getServerLocale } from '@it-tech-blog/preferences/server';
import ThemeClientProvider from './_components/theme-client-provider';

export const metadata = {
  title: 'Interactive Tech Lab',
  description: '복잡한 기술 개념을 예제와 실습형 콘텐츠로 쉽게 이해해봐요',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
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
}
