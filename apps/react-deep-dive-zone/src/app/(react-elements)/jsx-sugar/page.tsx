import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  jsxTransformFlowContent,
  JsxTransformFlowPage,
} from '@/components/react-elements/jsx-transform-flow';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = jsxTransformFlowContent[locale];

  return {
    title:
      locale === 'en'
        ? 'What Code Does JSX Compile To? — React Lab'
        : 'JSX는 어떤 코드로 변환되는가? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <JsxTransformFlowPage locale={locale} />;
};

export default Page;
