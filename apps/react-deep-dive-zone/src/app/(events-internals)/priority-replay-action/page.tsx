import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  advancedWrapupContent,
  EventSystemAdvancedWrapupPage,
} from '@/components/events-internals/priority-replay-action';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = advancedWrapupContent[locale];

  return {
    title:
      locale === 'en'
        ? 'Where do event priority, hydration replay, and form actions meet? — React Lab'
        : '이벤트 우선순위, Hydration Replay, Form Action은 어디서 만날까? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <EventSystemAdvancedWrapupPage locale={locale} />;
};

export default Page;
