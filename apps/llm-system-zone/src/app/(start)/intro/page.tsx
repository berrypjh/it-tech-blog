import { getServerLocale } from '@it-tech-blog/preferences/server';

import { IntroPage } from '@/components/start/intro/IntroPage';

const metadata = {
  ko: { title: 'LLM 시스템 시작하기 — LLM Lab' },
  en: { title: 'Getting Started with LLM Systems — LLM Lab' },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <IntroPage locale={await getServerLocale()} />;

export default Page;
