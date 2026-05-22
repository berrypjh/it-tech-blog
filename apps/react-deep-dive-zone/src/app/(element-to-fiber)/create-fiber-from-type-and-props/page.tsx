import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  createFiberFromTypeAndPropsContent,
  CreateFiberFromTypeAndPropsPage,
} from '@/components/element-to-fiber/create-fiber-from-type-and-props';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = createFiberFromTypeAndPropsContent[locale];

  return {
    title:
      locale === 'en'
        ? 'createFiberFromTypeAndProps — type Picks the Fiber Kind — React Lab'
        : 'createFiberFromTypeAndProps: type으로 Fiber 종류를 고른다 — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <CreateFiberFromTypeAndPropsPage locale={locale} />;
};

export default Page;
