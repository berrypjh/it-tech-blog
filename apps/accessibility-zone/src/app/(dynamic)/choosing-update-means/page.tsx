import { getServerLocale } from '@it-tech-blog/preferences/server';

import { ChoosingUpdateMeansPage } from '@/components/dynamic/choosing-update-means/ChoosingUpdateMeansPage';

const metadata = {
  ko: {
    title: '화면 갱신 · 포커스 이동 · 상태 알림 중 필요한 수단 선택하기 — A11y Lab',
    description:
      '검색 결과 목록 · ‘3건 찾음’ · 새 작업 화면을 화면 갱신 · 상태 메시지 · 맥락 전환으로 나누고, 4.1.3의 대상과 07.4의 포커스 복구를 구별하는 10장 첫 페이지.',
  },
  en: {
    title: 'Choosing among a screen update, a focus move, and a status message — A11y Lab',
    description:
      'Chapter 10, first page: sorting a result list, “3 found,” and a new task screen into screen update, status message, and change of context, with the scope of 4.1.3.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <ChoosingUpdateMeansPage locale={await getServerLocale()} />;

export default Page;
