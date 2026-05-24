import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  performUnitContent,
  PerformUnitOfWorkPage,
} from '@/components/render-phase/perform-unit-of-work';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = performUnitContent[locale];

  return {
    title:
      locale === 'en'
        ? 'performUnitOfWork: processing one Fiber — React Lab'
        : 'performUnitOfWork: Fiber 하나를 처리하는 기본 단위 — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <PerformUnitOfWorkPage locale={locale} />;
};

export default Page;
