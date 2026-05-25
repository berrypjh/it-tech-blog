import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  promiseVsErrorSplitContent,
  PromiseVsErrorSplitPage,
} from '@/components/suspense-error-hydration/promise-vs-error-split';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = promiseVsErrorSplitContent[locale];

  return {
    title:
      locale === 'en'
        ? 'How does throwException tell Promise from Error? — React Lab'
        : 'throwException은 Promise와 Error를 어떻게 구분할까? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <PromiseVsErrorSplitPage locale={locale} />;
};

export default Page;
