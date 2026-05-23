import { getServerLocale } from '@it-tech-blog/preferences/server';

import { FiberLanesChildLanesPage, fiberLanesContent } from '@/components/fiber-tree/fiber-lanes';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = fiberLanesContent[locale];

  return {
    title:
      locale === 'en'
        ? 'lanes / childLanes — React Lab'
        : 'lanes / childLanes: Fiber는 우선순위를 어떻게 품고 있나? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <FiberLanesChildLanesPage locale={locale} />;
};

export default Page;
