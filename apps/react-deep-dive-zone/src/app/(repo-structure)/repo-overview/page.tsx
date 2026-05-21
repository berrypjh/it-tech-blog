import { getServerLocale } from '@it-tech-blog/preferences/server';

import { repoOverviewContent, RepoOverviewPage } from '@/components/repo-structure/repo-overview';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = repoOverviewContent[locale];

  return {
    title:
      locale === 'en'
        ? 'facebook/react Repository Overview — React Lab'
        : 'facebook/react 저장소 개관 — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <RepoOverviewPage locale={locale} />;
};

export default Page;
