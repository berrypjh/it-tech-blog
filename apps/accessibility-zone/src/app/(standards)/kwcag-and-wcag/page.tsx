import { getServerLocale } from '@it-tech-blog/preferences/server';

import { KwcagAndWcagPage } from '@/components/standards/kwcag-and-wcag/KwcagAndWcagPage';

const metadata = {
  ko: {
    title: 'KWCAG 2.2와 WCAG의 항목 · 버전 · 판정 범위를 비교하기 — A11y Lab',
    description:
      '국립전파연구원 등록 정보와 첨부 원문으로 KWCAG 2.2를 확인하고, 명도 대비와 컨트롤 크기 항목을 WCAG 2.2와 버전 · 번호 · 조건 · 증거로 비교하는 04장 다섯 번째 페이지.',
  },
  en: {
    title: 'Comparing items, versions, and judgment scope in KWCAG 2.2 and WCAG — A11y Lab',
    description:
      'Chapter 04, page 5: checking KWCAG 2.2 in the National Radio Research Agency registry and attached original, and comparing its contrast and control size items with WCAG 2.2 by version, number, conditions, and evidence.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <KwcagAndWcagPage locale={await getServerLocale()} />;

export default Page;
