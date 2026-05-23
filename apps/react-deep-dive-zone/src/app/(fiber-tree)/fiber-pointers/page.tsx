import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  fiberTreePointersContent,
  FiberTreePointersPage,
} from '@/components/fiber-tree/fiber-pointers';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = fiberTreePointersContent[locale];

  return {
    title:
      locale === 'en'
        ? 'return / child / sibling — How a Fiber tree connects — React Lab'
        : 'return / child / sibling: Fiber 트리는 어떻게 연결되는가? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <FiberTreePointersPage locale={locale} />;
};

export default Page;
