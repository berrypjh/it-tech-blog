import { getServerLocale } from '@it-tech-blog/preferences/server';

import { PageContainer } from '@/components/page';

const content = {
  ko: {
    title: 'React 심층 탐구',
  },
  en: {
    title: 'React Deep Dive',
  },
};

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = content[locale] ?? content.ko;
  return { title: c.title };
};

const IntroPage = async () => {
  const locale = await getServerLocale();
  const c = content[locale] ?? content.ko;

  return <PageContainer>{c.title}</PageContainer>;
};

export default IntroPage;
