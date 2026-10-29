import { getServerLocale } from '@it-tech-blog/preferences/server';

import { BarrierReportPage } from '@/components/start/barrier-report/BarrierReportPage';

const metadata = {
  ko: {
    title: '준비된 화면에서 장벽을 찾고 재현 절차로 기록하기 — A11y Lab',
    description:
      '연습용 예약 변경 화면에서 장벽을 직접 찾고, 사용자·과업·환경·실패 단계가 담긴 장벽 재현 기록을 작성하는 01장 마지막 페이지.',
  },
  en: {
    title: 'Finding barriers on a prepared screen and recording reproduction steps — A11y Lab',
    description:
      'The last page of chapter 01: find barriers on a practice rebooking screen and write a reproduction record with user, task, environment, and failure stage.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <BarrierReportPage locale={await getServerLocale()} />;

export default Page;
