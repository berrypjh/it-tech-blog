import { getServerLocale } from '@it-tech-blog/preferences/server';

import { IntroPage } from '@/components/start/intro/IntroPage';

const metadata = {
  ko: {
    title: '웹 접근성은 누구의 어떤 활동을 가능하게 하는가? — A11y Lab',
    description:
      '웹접근성의 정의와 대상, 막힌 활동을 사용자·과업·실패 단계로 기록하는 법, 프론트엔드와 표준의 관계를 정리한 01장의 첫 페이지.',
  },
  en: {
    title: 'Whose activities does web accessibility make possible? — A11y Lab',
    description:
      'The first page of chapter 01: what web accessibility is, who it serves, how to record a blocked activity by user, task, and failure stage, and how frontend code and standards relate.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <IntroPage locale={await getServerLocale()} />;

export default Page;
