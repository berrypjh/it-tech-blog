import { getServerLocale } from '@it-tech-blog/preferences/server';

import { IntroPage } from '@/components/start/intro/IntroPage';

const metadata = {
  ko: {
    title: 'LLM 시스템 시작하기: 모델의 응답과 업무 완료 구별하기 — LLM System',
    description:
      '가상의 사내 IT 문의를 담당 큐에 접수하는 흐름으로 모델 · 추론 API · 앱의 책임을 나누고, 같은 요청의 접수 ID와 큐 기록으로 업무 완료를 판단하는 01장의 첫 페이지.',
  },
  en: {
    title:
      'Getting started with LLM systems: telling a model response from a finished task — LLM System',
    description:
      'The first page of chapter 01: splitting the duties of model, inference API, and app along a fictional internal IT request on its way to a support queue, and judging completion by the ticket ID and queue record of the same request.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <IntroPage locale={await getServerLocale()} />;

export default Page;
