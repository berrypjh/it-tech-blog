import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  readingPerspectiveContent,
  ReadingPerspectivePage,
} from '@/components/getting-started/reading-perspective';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = readingPerspectiveContent[locale];

  return {
    title:
      locale === 'en'
        ? 'A mental model for reading React internals — React Lab'
        : 'React 내부 흐름을 읽는 기본 관점 — React Lab',
    description: c.hero.description.join(' '),
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <ReadingPerspectivePage locale={locale} />;
};

export default Page;
