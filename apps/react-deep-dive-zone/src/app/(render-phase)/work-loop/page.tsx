import { getServerLocale } from '@it-tech-blog/preferences/server';

import { workLoopContent, WorkLoopPage } from '@/components/render-phase/work-loop';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = workLoopContent[locale];

  return {
    title:
      locale === 'en'
        ? 'workLoopSync and workLoopConcurrent — React Lab'
        : 'workLoopSync와 workLoopConcurrent — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <WorkLoopPage locale={locale} />;
};

export default Page;
