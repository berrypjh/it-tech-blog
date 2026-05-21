import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  reactVsReactDomContent,
  ReactVsReactDomPage,
} from '@/components/repo-structure/react-vs-react-dom';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = reactVsReactDomContent[locale];

  return {
    title:
      locale === 'en'
        ? 'react vs react-dom — React Lab'
        : 'react와 react-dom은 왜 나뉘어 있을까? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <ReactVsReactDomPage locale={locale} />;
};

export default Page;
