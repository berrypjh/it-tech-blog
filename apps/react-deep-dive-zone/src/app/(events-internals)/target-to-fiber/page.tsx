import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  targetToFiberContent,
  TargetToFiberPage,
} from '@/components/events-internals/target-to-fiber';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = targetToFiberContent[locale];

  return {
    title:
      locale === 'en'
        ? 'How does React resolve an event target to a Fiber? — React Lab'
        : 'React는 이벤트 target을 어떻게 Fiber로 찾을까? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <TargetToFiberPage locale={locale} />;
};

export default Page;
