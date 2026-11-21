import { getServerLocale } from '@it-tech-blog/preferences/server';

import { FocusVisibilityPage } from '@/components/keyboard/focus-visibility/FocusVisibilityPage';

const metadata = {
  ko: {
    title: '포커스 표시 · 대비 · 가림을 서로 다른 조건으로 검사하기 — A11y Lab',
    description:
      'WCAG 2.4.7 · 2.4.11 · 2.4.12 · 2.4.13과 1.4.11의 요건을 나누고, 포커스 링과 sticky 영역의 가림을 실제 값으로 비교하는 페이지.',
  },
  en: {
    title: 'Testing focus visibility, contrast, and obscuring as separate conditions — A11y Lab',
    description:
      'Separating the requirements of WCAG 2.4.7, 2.4.11, 2.4.12, 2.4.13, and 1.4.11, and comparing focus rings and sticky obscuring with real values.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <FocusVisibilityPage locale={await getServerLocale()} />;

export default Page;
