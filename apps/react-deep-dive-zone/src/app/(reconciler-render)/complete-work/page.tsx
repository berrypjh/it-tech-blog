import { getServerLocale } from '@it-tech-blog/preferences/server';

import { completeWorkContent, CompleteWorkPage } from '@/components/render-phase/complete-work';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = completeWorkContent[locale];

  return {
    title:
      locale === 'en'
        ? 'completeUnitOfWork and completeWork — React Lab'
        : 'completeUnitOfWork와 completeWork — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <CompleteWorkPage locale={locale} />;
};

export default Page;
