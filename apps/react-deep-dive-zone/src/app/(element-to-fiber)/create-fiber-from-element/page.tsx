import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  createFiberFromElementContent,
  CreateFiberFromElementPage,
} from '@/components/element-to-fiber/create-fiber-from-element';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = createFiberFromElementContent[locale];

  return {
    title:
      locale === 'en'
        ? 'createFiberFromElement — Entry Point of Fiber Creation — React Lab'
        : 'createFiberFromElement: Element에서 Fiber 생성 흐름 시작 — React Lab',
    description: c.hero.description2,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <CreateFiberFromElementPage locale={locale} />;
};

export default Page;
