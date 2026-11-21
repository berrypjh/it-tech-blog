import { getServerLocale } from '@it-tech-blog/preferences/server';

import { ContrastConditionsPage } from '@/components/visual/contrast-conditions/ContrastConditionsPage';

const metadata = {
  ko: {
    title: '텍스트 · 아이콘 · 컨트롤 대비의 조건과 예외 판정하기 — A11y Lab',
    description:
      'WCAG 1.4.3과 1.4.11의 적용 대상을 나누고, 불투명 색 쌍의 대비를 계산하며, 두 색으로 판정할 수 없는 경우와 예외를 확인하는 페이지.',
  },
  en: {
    title: 'Judging contrast conditions and exceptions for text, icons, and controls — A11y Lab',
    description:
      'Separating what WCAG 1.4.3 and 1.4.11 apply to, computing contrast for opaque color pairs, and checking exceptions and cases two colors cannot settle.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <ContrastConditionsPage locale={await getServerLocale()} />;

export default Page;
