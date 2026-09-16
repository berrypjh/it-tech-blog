import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  react192ReadingMethodContent,
  React192ReadingMethodPage,
} from '@/components/react-19-changes/react-19-2-reading-method';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = react192ReadingMethodContent[locale];

  return {
    title:
      locale === 'en'
        ? 'Reading React 19.2 and beyond — React Lab'
        : 'React 19.2 이후 변화 읽기 — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <React192ReadingMethodPage locale={locale} />;
};

export default Page;
