import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  reconcileChildrenContent,
  ReconcileChildrenPage,
} from '@/components/render-phase/child-reconciliation';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = reconcileChildrenContent[locale];

  return {
    title:
      locale === 'en'
        ? 'reconcileChildren: comparing new Elements with prior Fibers — React Lab'
        : 'reconcileChildren: 새 Element와 기존 Fiber를 비교한다 — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <ReconcileChildrenPage locale={locale} />;
};

export default Page;
