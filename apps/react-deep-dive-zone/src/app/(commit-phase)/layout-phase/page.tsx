import { getServerLocale } from '@it-tech-blog/preferences/server';

import { layoutPhaseContent, LayoutPhasePage } from '@/components/commit-phase/layout-phase';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = layoutPhaseContent[locale];

  return {
    title:
      locale === 'en'
        ? 'Layout Phase: when useLayoutEffect and class lifecycle run — React Lab'
        : 'Layout Phase: useLayoutEffect와 class lifecycle은 언제 실행되는가? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <LayoutPhasePage locale={locale} />;
};

export default Page;
