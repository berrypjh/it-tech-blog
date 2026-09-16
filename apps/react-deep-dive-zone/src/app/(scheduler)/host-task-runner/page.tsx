import { getServerLocale } from '@it-tech-blog/preferences/server';

import { hostTaskRunnerContent, HostTaskRunnerPage } from '@/components/scheduler/host-task-runner';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = hostTaskRunnerContent[locale];

  return {
    title:
      locale === 'en'
        ? 'What does the Scheduler package actually own? — React Lab'
        : 'Scheduler 패키지는 실제로 무엇을 맡을까? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <HostTaskRunnerPage locale={locale} />;
};

export default Page;
