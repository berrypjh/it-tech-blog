import { getServerLocale } from '@it-tech-blog/preferences/server';

import { fiberWhyNeededContent, FiberWhyNeededPage } from '@/components/element-to-fiber/why-fiber';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = fiberWhyNeededContent[locale];

  return {
    title:
      locale === 'en'
        ? 'Component → Fiber Full Recap — React Lab'
        : '컴포넌트→Fiber 전체 정리 — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <FiberWhyNeededPage locale={locale} />;
};

export default Page;
