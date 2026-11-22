import { getServerLocale } from '@it-tech-blog/preferences/server';

import { StaleResponsesPage } from '@/components/dynamic/stale-responses/StaleResponsesPage';

const metadata = {
  ko: {
    title: '중복 알림 · 연속 응답 · 취소 · 경쟁 상태에서 정보 일관성 유지하기 — A11y Lab',
    description:
      '응답 순서를 직접 정해 A/B 역전 · 취소 뒤 늦은 응답 · 지난 오류 · 중복 완료를 재현하고, 활성 요청만 결과 · 알림 · busy를 바꾸게 하는 10장 마지막 페이지.',
  },
  en: {
    title:
      'Keeping information consistent through duplicate messages, consecutive responses, cancellation, and races — A11y Lab',
    description:
      'Chapter 10, last page: setting the response order to reproduce A/B reversal, a late response after cancel, an old error, and duplicate completion, so only the active request changes results, announcements, and busy.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <StaleResponsesPage locale={await getServerLocale()} />;

export default Page;
