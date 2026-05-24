import { getServerLocale } from '@it-tech-blog/preferences/server';

import { rvrContent, RvrPage } from '@/components/packages/renderer-vs-reconciler';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = rvrContent[locale];

  return {
    title:
      locale === 'en'
        ? 'renderer vs reconciler: compute vs apply — React Lab'
        : 'renderer와 reconciler는 어떻게 다른가? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <RvrPage locale={locale} />;
};

export default Page;
