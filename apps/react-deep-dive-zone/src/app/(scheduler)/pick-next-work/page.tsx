import { getServerLocale } from '@it-tech-blog/preferences/server';

import { rootSchedulerContent, RootSchedulerPage } from '@/components/scheduler/pick-next-work';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = rootSchedulerContent[locale];

  return {
    title:
      locale === 'en'
        ? 'How does Root Scheduler pick what to run first? — React Lab'
        : 'Root Scheduler는 어떤 작업을 먼저 실행할지 어떻게 고를까? — React Lab',
    description: c.hero.subtitle,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <RootSchedulerPage locale={locale} />;
};

export default Page;
