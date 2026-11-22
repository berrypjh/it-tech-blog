import { getServerLocale } from '@it-tech-blog/preferences/server';

import { TimeoutsAndConfirmationPage } from '@/components/forms/timeouts-and-confirmation/TimeoutsAndConfirmationPage';

const metadata = {
  ko: {
    title: '시간제한 · 세션 만료 · 재인증과 중요한 작업의 오류 예방하기 — A11y Lab',
    description:
      '만료 상황을 직접 시작해 연장 · 재인증 · 취소에서 초안을 지키고, 검토 화면에서 값을 고쳐 한 번 확정하는 최종 과업으로 11장을 마치는 페이지.',
  },
  en: {
    title:
      'Handling time limits, session expiry, re-authentication, and error prevention for important actions — A11y Lab',
    description:
      'Chapter 11, last page: starting an expiry yourself to keep the draft through extend, re-authenticate, and cancel, then correcting values on a review screen and confirming once in the final task.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <TimeoutsAndConfirmationPage locale={await getServerLocale()} />;

export default Page;
