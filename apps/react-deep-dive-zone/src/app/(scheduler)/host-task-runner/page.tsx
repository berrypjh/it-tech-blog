import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  schedulerPackageContent,
  SchedulerPackageRolePage,
} from '@/components/scheduler/host-task-runner';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = schedulerPackageContent[locale];

  return {
    title:
      locale === 'en'
        ? 'What does the Scheduler package actually own? — React Lab'
        : 'Scheduler 패키지는 실제로 무엇을 맡을까? — React Lab',
    description: c.hero.subtitle,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <SchedulerPackageRolePage locale={locale} />;
};

export default Page;
