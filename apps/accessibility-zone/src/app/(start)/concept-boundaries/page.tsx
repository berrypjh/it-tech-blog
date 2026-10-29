import { getServerLocale } from '@it-tech-blog/preferences/server';

import { ConceptBoundariesPage } from '@/components/start/concept-boundaries/ConceptBoundariesPage';

const metadata = {
  ko: {
    title: '접근성·사용성·포용적 설계·표준 적합성 구분하기 — A11y Lab',
    description:
      '네 개념이 묻는 질문을 한 사례로 나눠 보고, 표준 적합성·과업 성공·법적 의무와 규범·참고 문서를 구분하는 01장 네 번째 페이지.',
  },
  en: {
    title: 'Telling accessibility, usability, inclusive design, and conformance apart — A11y Lab',
    description:
      'Chapter 01, page 4: the question each of four concepts asks, why conformance, task success, and legal obligation differ, and normative versus informative sources.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <ConceptBoundariesPage locale={await getServerLocale()} />;

export default Page;
