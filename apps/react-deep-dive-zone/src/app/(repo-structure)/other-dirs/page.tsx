import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  surroundingContent,
  SurroundingDirectoriesPage,
} from '@/components/repo-structure/other-dirs';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = surroundingContent[locale];

  return {
    title:
      locale === 'en'
        ? 'fixtures / scripts / compiler — React Lab'
        : 'fixtures / scripts / compiler 디렉터리는 무엇인가? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <SurroundingDirectoriesPage locale={locale} />;
};

export default Page;
