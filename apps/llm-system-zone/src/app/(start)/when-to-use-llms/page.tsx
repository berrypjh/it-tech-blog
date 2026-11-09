import { getServerLocale } from '@it-tech-blog/preferences/server';

import { WhenToUseLlmsPage } from '@/components/start/when-to-use-llms/WhenToUseLlmsPage';

const metadata = {
  ko: {
    title: '규칙 · 검색 · 기존 ML · LLM 비교: 도입 타당성과 비LLM Baseline — LLM System',
    description:
      '같은 IT 문의를 서비스 코드 규칙 · 정책 검색 · 분류기 · LLM으로 비교하고, 실패 비용 · 데이터 · 변경 빈도 · 품질 · 지연 · 비용 · 검증 가능성으로 비LLM Baseline과 도입 보류 조건을 정하는 01장 네 번째 페이지.',
  },
  en: {
    title:
      'Rules, search, classic ML, and LLMs compared: whether an LLM is justified, and the non-LLM baseline — LLM System',
    description:
      'Chapter 01, page 4: comparing service-code rules, policy search, a classifier, and an LLM on the same IT request, and setting a non-LLM baseline and hold-off conditions by failure cost, data, change frequency, quality, latency, cost, and verifiability.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <WhenToUseLlmsPage locale={await getServerLocale()} />;

export default Page;
