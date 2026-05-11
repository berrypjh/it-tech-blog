import { getServerLocale } from '@it-tech-blog/preferences/server';

import { PageContainer } from '@/components/page';

const content = {
  ko: {
    title: '접근성이란 무엇인가?',
  },
  en: {
    title: 'What is Accessibility?',
  },
};

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = content[locale as 'ko' | 'en'] ?? content.ko;
  return { title: c.title };
};

const IntroPage = async () => {
  const locale = await getServerLocale();
  const c = content[locale as 'ko' | 'en'] ?? content.ko;

  return (
    <PageContainer>
      <h1 className="text-xl font-bold text-text-default mb-sm">{c.title}</h1>
    </PageContainer>
  );
};

export default IntroPage;
