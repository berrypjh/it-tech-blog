import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  scheduleUpdateOnFiberContent,
  ScheduleUpdateOnFiberPage,
} from '@/components/update-flow/schedule-update-on-fiber';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = scheduleUpdateOnFiberContent[locale];

  return {
    title:
      locale === 'en'
        ? 'scheduleUpdateOnFiber: registering pending work on the Root — React Lab'
        : 'scheduleUpdateOnFiber: Root에 pending work 등록 — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <ScheduleUpdateOnFiberPage locale={locale} />;
};

export default Page;
