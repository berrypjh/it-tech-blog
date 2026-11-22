import { getServerLocale } from '@it-tech-blog/preferences/server';

import { ServerErrorsPage } from '@/components/forms/server-errors/ServerErrorsPage';

const metadata = {
  ko: {
    title: '서버 오류 이후 입력값 · 포커스 · 알림을 보존하기 — A11y Lab',
    description:
      '교육용 로컬 응답으로 필드 오류 · 서비스 오류 · 지연 · 중복 제출 · 늦은 응답을 골라 보내며, 현재 제출만 오류 · busy · 알림을 바꾸게 하는 11장 넷째 페이지.',
  },
  en: {
    title: 'Preserving input, focus, and announcements after server errors — A11y Lab',
    description:
      'Chapter 11, fourth page: choosing field errors, service errors, delays, duplicate submissions, and late responses with local teaching responses, so only the current submission changes errors, busy, and announcements.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <ServerErrorsPage locale={await getServerLocale()} />;

export default Page;
