import { getServerLocale } from '@it-tech-blog/preferences/server';

import { fiberToRootContent, FiberToRootPage } from '@/components/updates/fiber-to-root';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = fiberToRootContent[locale];

  return {
    title:
      locale === 'en'
        ? 'Walking from Fiber up to Root: lanes & childLanes — React Lab'
        : 'Fiber에서 Root까지 올라가기: lanes와 childLanes 표시 — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <FiberToRootPage locale={locale} />;
};

export default Page;
