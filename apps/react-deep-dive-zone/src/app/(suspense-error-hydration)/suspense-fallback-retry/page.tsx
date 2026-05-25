import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  suspenseFallbackRetryContent,
  SuspenseFallbackRetryPage,
} from '@/components/suspense-error-hydration/suspense-fallback-retry';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = suspenseFallbackRetryContent[locale];

  return {
    title:
      locale === 'en'
        ? 'How does Suspense fall back and retry? — React Lab'
        : 'Suspense는 어떻게 fallback으로 전환되고 다시 원래 UI로 돌아올까? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <SuspenseFallbackRetryPage locale={locale} />;
};

export default Page;
