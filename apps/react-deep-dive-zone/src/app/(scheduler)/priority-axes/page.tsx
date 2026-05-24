import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  threePriorityAxesContent,
  ThreePriorityAxesPage,
} from '@/components/scheduler/priority-axes';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = threePriorityAxesContent[locale];

  return {
    title:
      locale === 'en'
        ? "React's three priority axes — React Lab"
        : 'React 내부의 3가지 우선순위 축 — React Lab',
    description: c.hero.subtitle,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <ThreePriorityAxesPage locale={locale} />;
};

export default Page;
