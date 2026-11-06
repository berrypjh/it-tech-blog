import { getServerLocale } from '@it-tech-blog/preferences/server';

import { SupportingDocumentsPage } from '@/components/standards/supporting-documents/SupportingDocumentsPage';

const metadata = {
  ko: {
    title: '규범 문서와 Understanding · Techniques · APG · ACT의 역할 구분하기 — A11y Lab',
    description:
      '판정 근거는 WCAG 규범 조항에, 해석과 구현은 Understanding · Techniques · APG에 연결하고, ACT Rules Format과 개별 규칙의 범위를 나눠 규칙 결과를 읽는 04장 네 번째 페이지.',
  },
  en: {
    title:
      'Telling normative documents apart from Understanding, Techniques, APG, and ACT — A11y Lab',
    description:
      'Chapter 04, page 4: tying judgments to WCAG normative clauses and interpretation and implementation to Understanding, Techniques, and the APG, and reading rule outcomes by separating the ACT Rules Format from individual rules.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <SupportingDocumentsPage locale={await getServerLocale()} />;

export default Page;
