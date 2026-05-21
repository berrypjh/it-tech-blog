import { getServerLocale } from '@it-tech-blog/preferences/server';

import { ReactSharedPackagePage, sharedContent } from '@/components/repo-structure/shared-role';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = sharedContent[locale];

  return {
    title:
      locale === 'en'
        ? 'shared package — React Lab'
        : 'shared 패키지는 왜 곳곳에서 등장하는가? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <ReactSharedPackagePage locale={locale} />;
};

export default Page;
