import { getServerLocale } from '@it-tech-blog/preferences/server';

import { reactPackageContent, ReactPackagePage } from '@/components/packages/react-package';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = reactPackageContent[locale];

  return {
    title:
      locale === 'en'
        ? 'The react package: doorway to React’s public API — React Lab'
        : 'react 패키지: 사용자에게 보이는 React API의 입구 — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <ReactPackagePage locale={locale} />;
};

export default Page;
