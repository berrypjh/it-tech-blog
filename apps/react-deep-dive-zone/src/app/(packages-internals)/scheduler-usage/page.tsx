import { getServerLocale } from '@it-tech-blog/preferences/server';

import { schedulerContent, SchedulerPage } from '@/components/packages-internals/scheduler-usage';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = schedulerContent[locale];

  return {
    title:
      locale === 'en'
        ? 'scheduler: how React coordinates work timing — React Lab'
        : 'scheduler는 React 내부에서 어디에 쓰이나? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <SchedulerPage locale={locale} />;
};

export default Page;
