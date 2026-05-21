import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  ReactReconcilerEntryPage,
  reconcilerEntryContent,
} from '@/components/repo-structure/reconciler-location';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = reconcilerEntryContent[locale];

  return {
    title:
      locale === 'en'
        ? 'react-reconciler: the internal renderer entry — React Lab'
        : 'react-reconciler는 왜 가장 중요한 내부 진입점인가? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <ReactReconcilerEntryPage locale={locale} />;
};

export default Page;
