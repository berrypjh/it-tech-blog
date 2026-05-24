import { getServerLocale } from '@it-tech-blog/preferences/server';

import { whySplitContent, WhySplitPage } from '@/components/packages/why-split';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = whySplitContent[locale];

  return {
    title:
      locale === 'en'
        ? 'Why Is React Split Into Many Packages? — React Lab'
        : 'React는 왜 여러 패키지로 나뉘어 있을까? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <WhySplitPage locale={locale} />;
};

export default Page;
