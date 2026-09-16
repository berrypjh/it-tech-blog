import { getServerLocale } from '@it-tech-blog/preferences/server';

import { hooksRecapContent, HooksRecapPage } from '@/components/hooks-internals/hooks-recap';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = hooksRecapContent[locale];

  return {
    title:
      locale === 'en'
        ? 'Hook Internals — Full Recap — React Lab'
        : 'Hooks 내부 구조 전체 마무리 — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <HooksRecapPage locale={locale} />;
};

export default Page;
