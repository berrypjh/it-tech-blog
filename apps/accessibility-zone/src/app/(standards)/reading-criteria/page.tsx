import { getServerLocale } from '@it-tech-blog/preferences/server';

import { ReadingCriteriaPage } from '@/components/standards/reading-criteria/ReadingCriteriaPage';

const metadata = {
  ko: {
    title: 'WCAG 2.2 성공 기준의 조건 · 예외 · 정의를 해석하기 — A11y Lab',
    description:
      '성공 기준을 원문 → 정의 → 적용 대상 → 조건 · 예외 → 확인 증거 순서로 읽고, 1.3.5의 결과와 기법을 구분하며, 2.5.8의 예외를 사례에 적용하는 04장 두 번째 페이지.',
  },
  en: {
    title:
      'Interpreting conditions, exceptions, and definitions in WCAG 2.2 success criteria — A11y Lab',
    description:
      'Chapter 04, page 2: reading success criteria as original text → definitions → scope → conditions and exceptions → evidence, separating the outcome of 1.3.5 from its technique, and applying the exceptions of 2.5.8 to cases.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <ReadingCriteriaPage locale={await getServerLocale()} />;

export default Page;
