import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  hydrationStartContent,
  HydrationStartPage,
} from '@/components/suspense-error-hydration/hydration-start';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = hydrationStartContent[locale];

  return {
    title:
      locale === 'en'
        ? 'Hydration is not a re-render — React Lab'
        : 'Hydration은 DOM을 새로 만드는 렌더링이 아니다 — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <HydrationStartPage locale={locale} />;
};

export default Page;
