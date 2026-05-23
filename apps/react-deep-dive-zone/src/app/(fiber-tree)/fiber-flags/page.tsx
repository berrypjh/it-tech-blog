import { getServerLocale } from '@it-tech-blog/preferences/server';

import { fiberFlagsContent, FiberFlagsEffectsPage } from '@/components/fiber-tree/fiber-flags';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = fiberFlagsContent[locale];

  return {
    title:
      locale === 'en'
        ? 'flags / subtreeFlags / deletions — React Lab'
        : 'flags / subtreeFlags / deletions: 변경 효과는 어떻게 표시되나? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <FiberFlagsEffectsPage locale={locale} />;
};

export default Page;
