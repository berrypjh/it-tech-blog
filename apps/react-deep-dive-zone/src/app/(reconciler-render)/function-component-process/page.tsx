import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  functionComponentContent,
  FunctionComponentRenderPhasePage,
} from '@/components/render-phase/function-component-process';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = functionComponentContent[locale];

  return {
    title:
      locale === 'en'
        ? 'How Function Components Are Processed in Render Phase — React Lab'
        : '함수 컴포넌트는 Render Phase에서 어떻게 처리되는가? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <FunctionComponentRenderPhasePage locale={locale} />;
};

export default Page;
