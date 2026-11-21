import { getServerLocale } from '@it-tech-blog/preferences/server';

import { ZoomAndReflowPage } from '@/components/visual/zoom-and-reflow/ZoomAndReflowPage';

const metadata = {
  ko: {
    title: '텍스트 확대 · 브라우저 확대 · Reflow를 구분해 검사하기 — A11y Lab',
    description:
      'WCAG 1.4.4와 1.4.10의 요구와 예외를 나누고, 패널 축소 · viewport 변경 · 실제 브라우저 확대를 서로 다른 검사로 구분하는 페이지.',
  },
  en: {
    title: 'Testing text resize, browser zoom, and reflow separately — A11y Lab',
    description:
      'Separating the requirements and exceptions of WCAG 1.4.4 and 1.4.10, and treating panel narrowing, viewport changes, and real browser zoom as different checks.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <ZoomAndReflowPage locale={await getServerLocale()} />;

export default Page;
