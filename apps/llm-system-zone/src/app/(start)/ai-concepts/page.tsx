import { getServerLocale } from '@it-tech-blog/preferences/server';

import { AiConceptsPage } from '@/components/start/ai-concepts/AiConceptsPage';

const metadata = {
  ko: {
    title: 'AI · ML · Deep Learning · Generative AI · LLM과 지도 · 자기지도 학습 — LLM System',
    description:
      '01.1의 라우팅 모델에서 출발해 기술 범주, 생성 과업 · 모델 관점, 학습 신호를 서로 다른 축으로 나누고, 사람이 붙인 큐 라벨과 원문의 다음 토큰 표적을 비교하는 01장 두 번째 페이지.',
  },
  en: {
    title:
      'AI, ML, deep learning, generative AI, LLMs, and supervised vs. self-supervised learning — LLM System',
    description:
      'Chapter 01, page 2: starting from the routing model in 01.1, separating technology category, generative task and model view, and learning signal as different axes, and comparing a human-assigned queue label with a next-token target from raw text.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <AiConceptsPage locale={await getServerLocale()} />;

export default Page;
