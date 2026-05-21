import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  reactElementObjectStructureContent,
  ReactElementObjectStructurePage,
} from '@/components/react-elements/react-element-object-structure';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = reactElementObjectStructureContent[locale];

  return {
    title:
      locale === 'en'
        ? 'React Element Object Structure — React Lab'
        : 'React Element 객체는 어떤 구조를 가지나? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <ReactElementObjectStructurePage locale={locale} />;
};

export default Page;
