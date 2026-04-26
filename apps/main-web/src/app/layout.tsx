import '@berrypjh/react-ui/styles.css';
import './global.css';
import ThemeClientProvider from './_components/theme-client-provider';

export const metadata = {
  title: 'Interactive Tech Lab',
  description: '복잡한 기술 개념을 예제와 실습형 콘텐츠로 쉽게 이해해봐요',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <ThemeClientProvider>{children}</ThemeClientProvider>
      </body>
    </html>
  );
}
