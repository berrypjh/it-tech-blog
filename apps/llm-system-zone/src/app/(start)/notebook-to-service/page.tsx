import { getServerLocale } from '@it-tech-blog/preferences/server';

import { NotebookToServicePage } from '@/components/start/notebook-to-service/NotebookToServicePage';

const metadata = {
  ko: {
    title: 'Notebook과 서비스 코드: 실험 기록 · 재현성 · 책임의 차이 — LLM System',
    description:
      '실험 기록과 서비스 책임을 나누고, 고정 점수로 임계값의 채택 집합과 조건부 오류율을 구별한 뒤, 시설 고장 신고를 최종 과업으로 다루는 01장 일곱 번째 페이지.',
  },
  en: {
    title:
      'Notebooks and service code: experiment records, reproducibility, and responsibility — LLM System',
    description:
      'Chapter 01, page 7: separating experiment records from service duties, telling a threshold’s adopted set from its conditional error rate on fixed scores, and closing with facility fault reports as the final task.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <NotebookToServicePage locale={await getServerLocale()} />;

export default Page;
