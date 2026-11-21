import { getServerLocale } from '@it-tech-blog/preferences/server';

import { CoveredContentPage } from '@/components/visual/covered-content/CoveredContentPage';

const metadata = {
  ko: {
    title: '고정 영역 · 스크롤 · 가상 키보드가 내용을 가리는 문제 해결하기 — A11y Lab',
    description:
      '고정 헤더와 하단 액션이 입력과 포커스를 가리는 경우를 같은 폼에서 확인하고, scroll-padding과 sticky 범위 수정, 실제 모바일 확인을 구분하는 페이지.',
  },
  en: {
    title: 'Fixing content hidden by fixed areas, scrolling, and virtual keyboards — A11y Lab',
    description:
      'Checking in one form how fixed headers and bottom actions hide inputs and focus, comparing scroll-padding and sticky scope, and separating real mobile checks.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <CoveredContentPage locale={await getServerLocale()} />;

export default Page;
