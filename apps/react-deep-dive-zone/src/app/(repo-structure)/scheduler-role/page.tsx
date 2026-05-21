import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  ReactSchedulerPackagePage,
  schedulerContent,
} from '@/components/repo-structure/scheduler-role';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = schedulerContent[locale];

  return {
    title:
      locale === 'en'
        ? 'scheduler package — React Lab'
        : 'scheduler 패키지는 어떤 문제를 해결하는가? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <ReactSchedulerPackagePage locale={locale} />;
};

export default Page;
