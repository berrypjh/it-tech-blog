import { getServerLocale } from '@it-tech-blog/preferences/server';

import { AiConceptsPage } from '@/components/start/ai-concepts/AiConceptsPage';

const metadata = {
  ko: {
    title: 'AI · Machine Learning · Deep Learning · Generative AI 구별하기 — LLM Lab',
    description: 'AI 관련 용어를 서로 다른 분류 축으로 구별하는 챕터.',
  },
  en: {
    title: 'Telling AI, Machine Learning, Deep Learning, and Generative AI Apart — LLM Lab',
    description: 'A chapter on separating AI-related terms into different classification axes.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <AiConceptsPage locale={await getServerLocale()} />;

export default Page;
