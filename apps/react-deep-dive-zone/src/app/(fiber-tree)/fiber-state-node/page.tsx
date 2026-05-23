import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  fiberStateNodeContent,
  FiberStateNodePage,
} from '@/components/fiber-tree/fiber-state-node';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = fiberStateNodeContent[locale];

  return {
    title:
      locale === 'en'
        ? 'What does stateNode connect to? — React Lab'
        : 'stateNode는 무엇과 연결되는가? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <FiberStateNodePage locale={locale} />;
};

export default Page;
