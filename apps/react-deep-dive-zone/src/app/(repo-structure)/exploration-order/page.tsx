import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  explorationContent,
  ReactRepositoryExplorationRoutinePage,
} from '@/components/repo-structure/exploration-order';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = explorationContent[locale];

  return {
    title:
      locale === 'en'
        ? 'React Repository Exploration Order — React Lab'
        : 'React 저장소 탐색 순서 — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <ReactRepositoryExplorationRoutinePage locale={locale} />;
};

export default Page;
