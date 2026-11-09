import { getServerLocale } from '@it-tech-blog/preferences/server';

import { SuccessCriteriaPage } from '@/components/start/success-criteria/SuccessCriteriaPage';

const metadata = {
  ko: {
    title: '성공 조건 정하기: 사용자 과업 · 실패 비용 · 품질 · 지연 · 예산 — LLM System',
    description:
      'Baseline과 LLM 후보를 같은 조건에서 비교하려고 사용자 과업, 지표의 분자 · 분모, 실패 비용, 지연 경계, 비용 단위, 검토 · 보류와 승인 조건을 정하는 01장 다섯 번째 페이지.',
  },
  en: {
    title:
      'Setting success criteria: user task, failure cost, quality, latency, and budget — LLM System',
    description:
      'Chapter 01, page 5: defining the user task, metric numerators and denominators, failure costs, the latency boundary, the cost unit, review and hold, and approval conditions to compare a baseline and an LLM candidate under the same conditions.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <SuccessCriteriaPage locale={await getServerLocale()} />;

export default Page;
