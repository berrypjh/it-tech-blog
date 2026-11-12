import { getServerLocale } from '@it-tech-blog/preferences/server';

import { ReferenceEdgeCasesPage } from '@/components/accname/reference-edge-cases/ReferenceEdgeCasesPage';

const metadata = {
  ko: {
    title: '숨겨진 참조 · 여러 ID · 중첩 참조 · 빈 값의 경계 사례 — A11y Lab',
    description:
      '03.1의 숨긴 참조에서 출발해 숨김 자손 · 여러 ID · 없는 참조 · 중첩과 순환 · 네 가지 빈 값을 AccName 1.1 · 1.2 단계와 대조하는 06장 네 번째 페이지.',
  },
  en: {
    title:
      'Edge cases: hidden references, several IDs, nested references, and empty values — A11y Lab',
    description:
      'Chapter 06, page 4: starting from the hidden reference in 03.1, checking hidden descendants, several IDs, missing references, nesting and loops, and four kinds of empty value against the AccName 1.1 and 1.2 steps.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <ReferenceEdgeCasesPage locale={await getServerLocale()} />;

export default Page;
