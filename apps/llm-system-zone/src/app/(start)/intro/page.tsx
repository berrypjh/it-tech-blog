import { getServerLocale } from '@it-tech-blog/preferences/server';

import { IntroPage } from '@/components/start/intro/IntroPage';

const metadata = {
  ko: {
    title: 'LLM 시스템 시작하기: 모델에서 소프트웨어까지 — LLM Lab',
    description:
      '모델, 추론 API, 앱의 책임을 나누고 모델 응답에서 업무 완료까지의 흐름을 따라가는 입문 챕터.',
  },
  en: {
    title: 'Getting Started with LLM Systems: From Model to Software — LLM Lab',
    description:
      'An introductory chapter that separates the responsibilities of model, inference API, and app and follows a request from model response to a finished task.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <IntroPage locale={await getServerLocale()} />;

export default Page;
