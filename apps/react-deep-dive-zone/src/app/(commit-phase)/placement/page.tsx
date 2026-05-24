import { getServerLocale } from '@it-tech-blog/preferences/server';

import { placementContent, PlacementPage } from '@/components/commit-phase/placement';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = placementContent[locale];

  return {
    title:
      locale === 'en'
        ? 'Placement: how new DOM nodes are inserted — React Lab'
        : 'Placement: 새 DOM 노드는 어떻게 삽입되는가? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <PlacementPage locale={locale} />;
};

export default Page;
