import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  usePromiseSuspendContent,
  UsePromiseSuspendPage,
} from '@/components/suspense-error-hydration/use-promise-suspend';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = usePromiseSuspendContent[locale];

  return {
    title:
      locale === 'en'
        ? 'How does use(Promise) pause rendering? — React Lab'
        : 'use(Promise)는 렌더링을 어떻게 멈출까? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <UsePromiseSuspendPage locale={locale} />;
};

export default Page;
