import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  HooksInternalsSummaryPage,
  hooksRecapContent,
} from '@/components/hooks-internals/hooks-recap';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = hooksRecapContent[locale];

  return {
    title:
      locale === 'en'
        ? 'Hook Internals — Full Recap — React Lab'
        : 'Hooks 내부 구조 전체 마무리 — React Lab',
    description: c.fullFlow.memoryPoint,
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <HooksInternalsSummaryPage locale={locale} />;
};

export default Page;
