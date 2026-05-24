import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  EventTargetFiberPage,
  targetFiberContent,
} from '@/components/events-internals/target-to-fiber';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = targetFiberContent[locale];

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

  return <EventTargetFiberPage locale={locale} />;
};

export default Page;
