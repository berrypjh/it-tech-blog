import { getServerLocale } from '@it-tech-blog/preferences/server';

import { ConformancePage } from '@/components/standards/conformance/ConformancePage';

const metadata = {
  ko: {
    title: '전체 페이지 · 완전한 과정 · 접근성 지원 · 비간섭으로 적합성 판단하기 — A11y Lab',
    description:
      '컴포넌트 · 표본 검사와 적합성 주장을 구분하고, 목록 → 예약 → 확인 과정으로 WCAG 2.2의 다섯 적합성 요구와 적합 대체 버전 · 부분 적합성 선언을 적용하는 04장 세 번째 페이지.',
  },
  en: {
    title:
      'Judging conformance by full pages, complete processes, accessibility support, and non-interference — A11y Lab',
    description:
      'Chapter 04, page 3: telling component and sample tests apart from conformance claims, and applying the five WCAG 2.2 conformance requirements, conforming alternate versions, and partial conformance to a list → booking → confirmation process.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <ConformancePage locale={await getServerLocale()} />;

export default Page;
