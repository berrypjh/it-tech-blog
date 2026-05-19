import { getServerLocale } from '@it-tech-blog/preferences/server';

import { WhyReact19BaselinePage, whyReact19Content } from '@/components/start/why-react-19';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = whyReact19Content[locale];

  return {
    title:
      locale === 'en'
        ? 'Why read against React 19? — React Lab'
        : '왜 React 19 코드를 기준으로 읽는가? — React Lab',
    description: c.hero.description.join(' '),
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <WhyReact19BaselinePage locale={locale} />;
};

export default Page;
