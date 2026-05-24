import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  syntheticEventContent,
  SyntheticEventPage,
} from '@/components/events-internals/synthetic-event';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = syntheticEventContent[locale];

  return {
    title:
      locale === 'en'
        ? 'What is SyntheticEvent and why is it needed? — React Lab'
        : 'SyntheticEvent는 무엇이고 왜 필요한가? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <SyntheticEventPage locale={locale} />;
};

export default Page;
