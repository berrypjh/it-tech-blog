import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  packagesDirectoryContent,
  PackagesDirectoryPage,
} from '@/components/repo-structure/packages-dir';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = packagesDirectoryContent[locale];

  return {
    title:
      locale === 'en'
        ? 'packages Directory: The Heart of React — React Lab'
        : 'packages 디렉터리: React 핵심 코드의 중심 — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <PackagesDirectoryPage locale={locale} />;
};

export default Page;
