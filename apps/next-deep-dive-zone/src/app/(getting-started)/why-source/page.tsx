import { getServerLocale } from '@it-tech-blog/preferences/server';

import { WhyReadNextSourcePage, whySourceContent } from '@/components/getting-started/why-source';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = whySourceContent[locale];

  return {
    title:
      locale === 'en'
        ? 'Why Read the Next.js Source? — Next Lab'
        : '왜 Next.js 소스코드를 읽는가? — Next Lab',
    description: c.hero.highlight.join(' '),
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <WhyReadNextSourcePage locale={locale} />;
};

export default Page;
