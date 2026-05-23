import { getServerLocale } from '@it-tech-blog/preferences/server';

import { FiberPropsComparisonPage, fiberPropsContent } from '@/components/fiber-tree/fiber-props';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = fiberPropsContent[locale];

  return {
    title:
      locale === 'en'
        ? 'pendingProps vs memoizedProps — React Lab'
        : 'pendingProps와 memoizedProps: 새 입력과 마지막 렌더 결과 — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <FiberPropsComparisonPage locale={locale} />;
};

export default Page;
