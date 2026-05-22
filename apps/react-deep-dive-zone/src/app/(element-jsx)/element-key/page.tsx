import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  reactElementKeySeparatedContent,
  ReactElementKeySeparatedPage,
} from '@/components/element-jsx/react-element-key-separated';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = reactElementKeySeparatedContent[locale];

  return {
    title:
      locale === 'en'
        ? 'Why Is key Treated Separately? — React Lab'
        : 'key는 왜 특별하게 분리되는가? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <ReactElementKeySeparatedPage locale={locale} />;
};

export default Page;
