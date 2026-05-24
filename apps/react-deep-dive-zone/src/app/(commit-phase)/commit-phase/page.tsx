import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  commitPhaseIntroContent,
  CommitPhaseIntroPage,
} from '@/components/commit-phase/commit-phase-intro';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = commitPhaseIntroContent[locale];

  return {
    title:
      locale === 'en'
        ? 'What Is the Commit Phase? — React Lab'
        : 'Commit Phase란 무엇인가? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <CommitPhaseIntroPage locale={locale} />;
};

export default Page;
