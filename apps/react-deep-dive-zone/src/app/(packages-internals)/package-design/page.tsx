import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  packageDesignContent,
  PackageDesignPage,
} from '@/components/packages-internals/package-design';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = packageDesignContent[locale];

  return {
    title:
      locale === 'en'
        ? 'Design meaning of React package separation — React Lab'
        : '패키지 분리가 React 설계에 주는 의미 — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <PackageDesignPage locale={locale} />;
};

export default Page;
