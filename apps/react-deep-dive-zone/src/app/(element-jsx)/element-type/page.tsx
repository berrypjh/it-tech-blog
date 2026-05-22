import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  reactElementTypeMeaningContent,
  ReactElementTypeMeaningPage,
} from '@/components/element-jsx/react-element-type-meaning';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = reactElementTypeMeaningContent[locale];

  return {
    title:
      locale === 'en'
        ? 'What Does type Point To? — React Lab'
        : 'type은 무엇을 가리키는가? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <ReactElementTypeMeaningPage locale={locale} />;
};

export default Page;
