import { getServerLocale } from '@it-tech-blog/preferences/server';

import { docsLimitsContent, DocsLimitsPage } from '@/components/getting-started/docs-limitations';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = docsLimitsContent[locale];

  return {
    title:
      locale === 'en'
        ? 'Where the Official Docs Fall Short — Next Lab'
        : '공식 문서만으로 부족한 지점 — Next Lab',
    description: c.hero.highlight.join(' '),
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <DocsLimitsPage locale={locale} />;
};

export default Page;
