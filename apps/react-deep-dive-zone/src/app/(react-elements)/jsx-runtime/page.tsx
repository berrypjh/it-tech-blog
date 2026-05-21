import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  jsxRuntimeFunctionsContent,
  JsxRuntimeFunctionsPage,
} from '@/components/react-elements/jsx-runtime-functions';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = jsxRuntimeFunctionsContent[locale];

  return {
    title:
      locale === 'en'
        ? 'jsx / jsxs / jsxDEV — What Each Runtime Does — React Lab'
        : 'jsx / jsxs / jsxDEV는 각각 무엇을 담당하나? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <JsxRuntimeFunctionsPage locale={locale} />;
};

export default Page;
