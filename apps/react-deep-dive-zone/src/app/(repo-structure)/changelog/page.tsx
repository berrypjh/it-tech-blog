import { getServerLocale } from '@it-tech-blog/preferences/server';

import { changelogContent, ChangelogReleasesPage } from '@/components/repo-structure/changelog';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = changelogContent[locale];

  return {
    title:
      locale === 'en'
        ? 'CHANGELOG vs Releases — React Lab'
        : 'CHANGELOG와 Releases는 어떻게 다르게 읽어야 할까? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <ChangelogReleasesPage locale={locale} />;
};

export default Page;
