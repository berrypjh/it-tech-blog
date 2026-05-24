import { getServerLocale } from '@it-tech-blog/preferences/server';

import { DomVsCommonPage, dvcContent } from '@/components/packages/dom-vs-common';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = dvcContent[locale];

  return {
    title:
      locale === 'en'
        ? 'DOM-only vs common renderer code — React Lab'
        : 'DOM 전용 코드와 renderer 공통 코드의 경계 — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <DomVsCommonPage locale={locale} />;
};

export default Page;
