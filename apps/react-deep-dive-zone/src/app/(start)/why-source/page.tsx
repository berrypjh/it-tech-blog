import { getServerLocale } from '@it-tech-blog/preferences/server';

import { WhyReadReactSourcePage, whySourceContent } from '@/components/start/why-source';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = whySourceContent[locale];

  return {
    title:
      locale === 'en'
        ? 'Why Read React Source? — React Lab'
        : '왜 React 소스코드를 읽는가? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <WhyReadReactSourcePage locale={locale} />;
};

export default Page;
