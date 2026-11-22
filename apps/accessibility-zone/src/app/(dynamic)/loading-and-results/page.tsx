import { getServerLocale } from '@it-tech-blog/preferences/server';

import { LoadingAndResultsPage } from '@/components/dynamic/loading-and-results/LoadingAndResultsPage';

const metadata = {
  ko: {
    title: '로딩 · 진행률 · 검색 결과 · 빈 상태 · Toast를 지속적으로 확인하게 만들기 — A11y Lab',
    description:
      '교육용 로컬 검색으로 초기 · 대기 · 성공 · 빈 결과 · 오류 · 재시도를 만들고, 숫자 없는 진행 표시와 사라져도 잃지 않는 Toast를 다루는 10장 네 번째 페이지.',
  },
  en: {
    title:
      'Making loading, progress, search results, empty states, and toasts checkable over time — A11y Lab',
    description:
      'Chapter 10, page 4: a teaching search through initial, waiting, success, empty, error, and retry, with progress without numbers and toasts whose content is not lost.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <LoadingAndResultsPage locale={await getServerLocale()} />;

export default Page;
