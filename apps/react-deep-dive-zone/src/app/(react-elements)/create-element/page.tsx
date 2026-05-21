import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  reactCreateElementContent,
  ReactCreateElementPage,
} from '@/components/react-elements/react-create-element';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = reactCreateElementContent[locale];

  return {
    title:
      locale === 'en'
        ? 'React.createElement — Why It Still Matters — React Lab'
        : 'React.createElement는 지금도 왜 중요한가? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <ReactCreateElementPage locale={locale} />;
};

export default Page;
