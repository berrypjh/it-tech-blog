import { getServerLocale } from '@it-tech-blog/preferences/server';

import { IntroPage } from '@/components/start/intro/IntroPage';

const metadata = {
  ko: {
    title: '웹접근성 시작하기 — A11y Lab',
    description: '웹접근성의 정의, 대상, 프론트엔드와의 관계, 표준을 정리한 입문 챕터.',
  },
  en: {
    title: 'Getting Started with Web Accessibility — A11y Lab',
    description:
      'An introductory chapter on what web accessibility is, who it serves, how frontend code shapes it, and the standards.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <IntroPage locale={await getServerLocale()} />;

export default Page;
