import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  fiberCentralContent,
  FiberCentralRenderingStructurePage,
} from '@/components/fiber-tree/why-fiber-tree';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = fiberCentralContent[locale];

  return {
    title:
      locale === 'en'
        ? 'Why is Fiber the central rendering data structure? — React Lab'
        : 'Fiber는 왜 렌더링 자료구조의 중심인가? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <FiberCentralRenderingStructurePage locale={locale} />;
};

export default Page;
