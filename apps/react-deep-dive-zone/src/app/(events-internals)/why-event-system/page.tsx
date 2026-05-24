import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  whyEventSystemContent,
  WhyEventSystemPage,
} from '@/components/events-internals/why-event-system';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = whyEventSystemContent[locale];

  return {
    title:
      locale === 'en'
        ? 'Why does React have its own event system? — React Lab'
        : 'React 이벤트 시스템은 왜 따로 존재할까? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <WhyEventSystemPage locale={locale} />;
};

export default Page;
