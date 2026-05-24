import { getServerLocale } from '@it-tech-blog/preferences/server';

import { reconcilerContent, ReconcilerCorePage } from '@/components/packages/reconciler-core';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = reconcilerContent[locale];

  return {
    title:
      locale === 'en'
        ? 'react-reconciler: the core of React’s rendering algorithm — React Lab'
        : 'react-reconciler: 렌더링 알고리즘의 중심 — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <ReconcilerCorePage locale={locale} />;
};

export default Page;
