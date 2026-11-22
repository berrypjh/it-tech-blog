import { getServerLocale } from '@it-tech-blog/preferences/server';

import { ClearContentPage } from '@/components/content/clear-content/ClearContentPage';

const metadata = {
  ko: {
    title: '명확한 문장 · 예측 가능한 흐름 · 일관된 도움 정보 제공하기 — A11y Lab',
    description:
      '같은 참가 신청 안내를 무엇을 · 언제 · 어디에서가 드러나게 고쳐 과업을 비교하고, 언어 표시 · 일관된 도움과 COGA 권고를 구분하는 09장 아홉 번째 페이지.',
  },
  en: {
    title: 'Providing clear sentences, predictable flow, and consistent help — A11y Lab',
    description:
      'Chapter 09, page 9: rewriting one registration notice so what, when, and where stand out, and separating language markup and consistent help from COGA advice.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <ClearContentPage locale={await getServerLocale()} />;

export default Page;
