import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  appRouterComplexityContent,
  AppRouterComplexityPage,
} from '@/components/getting-started/app-router-complexity';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = appRouterComplexityContent[locale];

  return {
    title:
      locale === 'en'
        ? 'Why Next.js Got Complex After App Router — Next Lab'
        : 'App Router 이후 Next.js가 복잡해진 이유 — Next Lab',
    description: c.hero.highlight.join(' '),
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <AppRouterComplexityPage locale={locale} />;
};

export default Page;
