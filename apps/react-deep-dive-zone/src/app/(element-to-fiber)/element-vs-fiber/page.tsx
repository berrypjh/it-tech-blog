import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  elementVsFiberContent,
  ElementVsFiberPage,
} from '@/components/element-to-fiber/element-vs-fiber';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = elementVsFiberContent[locale];

  return {
    title:
      locale === 'en'
        ? 'Element vs Fiber — What Is the Difference? — React Lab'
        : 'Element와 Fiber는 무엇이 다른가? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <ElementVsFiberPage locale={locale} />;
};

export default Page;
