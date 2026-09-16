import { getServerLocale } from '@it-tech-blog/preferences/server';

import { priorityAxesContent, PriorityAxesPage } from '@/components/scheduler/priority-axes';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = priorityAxesContent[locale];

  return {
    title:
      locale === 'en'
        ? "React's three priority axes — React Lab"
        : 'React 내부의 3가지 우선순위 축 — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <PriorityAxesPage locale={locale} />;
};

export default Page;
