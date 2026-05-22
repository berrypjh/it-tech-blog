import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  fiberStoredInformationContent,
  FiberStoredInformationPage,
} from '@/components/element-to-fiber/fiber-node';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = fiberStoredInformationContent[locale];

  return {
    title:
      locale === 'en'
        ? 'What Information a Fiber Stores — React Lab'
        : 'Element에서 Fiber로 넘어갈 때 실제로 저장되는 정보 — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <FiberStoredInformationPage locale={locale} />;
};

export default Page;
