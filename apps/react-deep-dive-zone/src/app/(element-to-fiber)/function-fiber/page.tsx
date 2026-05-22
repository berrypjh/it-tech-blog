import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  functionClassComponentFiberContent,
  FunctionClassComponentFiberPage,
} from '@/components/element-to-fiber/function-fiber';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = functionClassComponentFiberContent[locale];

  return {
    title:
      locale === 'en'
        ? 'Function Component vs Class Component Fiber — React Lab'
        : 'Function Component Fiber와 Class Component Fiber — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <FunctionClassComponentFiberPage locale={locale} />;
};

export default Page;
