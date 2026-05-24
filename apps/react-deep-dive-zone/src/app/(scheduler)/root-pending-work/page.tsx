import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  rootPendingWorkContent,
  RootPendingWorkPage,
} from '@/components/scheduler/root-pending-work';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = rootPendingWorkContent[locale];

  return {
    title:
      locale === 'en'
        ? 'What happens when the root gets pending work? — React Lab'
        : 'root에 pending work가 생기면 무엇이 일어날까? — React Lab',
    description: c.hero.subtitle,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <RootPendingWorkPage locale={locale} />;
};

export default Page;
