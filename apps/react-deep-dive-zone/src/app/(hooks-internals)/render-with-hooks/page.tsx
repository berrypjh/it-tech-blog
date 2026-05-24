import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  renderWithHooksContent,
  RenderWithHooksPage,
} from '@/components/hooks-internals/render-with-hooks';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = renderWithHooksContent[locale];

  return {
    title:
      locale === 'en'
        ? 'renderWithHooks: Where Function Components and Hooks Begin — React Lab'
        : 'renderWithHooks: 함수 컴포넌트와 Hook 실행의 시작점 — React Lab',
    description: c.question.title,
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <RenderWithHooksPage locale={locale} />;
};

export default Page;
