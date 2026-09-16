import { getServerLocale } from '@it-tech-blog/preferences/server';

import { react19HooksContent, React19HooksPage } from '@/components/hooks-internals/hooks-in-19';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = react19HooksContent[locale];

  return {
    title:
      locale === 'en'
        ? 'Reading React 19 Hook Extensions — React Lab'
        : 'React 19 Hooks 확장 읽기 — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <React19HooksPage locale={locale} />;
};

export default Page;
