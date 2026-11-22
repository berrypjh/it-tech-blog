import { getServerLocale } from '@it-tech-blog/preferences/server';

import { ErrorSummaryPage } from '@/components/forms/error-summary/ErrorSummaryPage';

const metadata = {
  ko: {
    title: '필드 오류 · 오류 요약 · 수정 제안을 연결하기 — A11y Lab',
    description:
      '빈 칸과 형식 오류를 함께 제출한 뒤 오류 요약의 링크로 정확한 칸에 가서 고치고 다시 제출하며, 오류 식별과 수정 제안을 나누는 11장 셋째 페이지.',
  },
  en: {
    title: 'Connecting field errors, an error summary, and correction suggestions — A11y Lab',
    description:
      'Chapter 11, third page: submitting an empty field and a format error together, following the error summary link to the exact field, fixing and resubmitting, while separating error identification from suggestions.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <ErrorSummaryPage locale={await getServerLocale()} />;

export default Page;
