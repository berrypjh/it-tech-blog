import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  listenerCollectionContent,
  ListenerCollectionPage,
} from '@/components/events-internals/accumulate-listeners';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = listenerCollectionContent[locale];

  return {
    title:
      locale === 'en'
        ? 'How are capture / bubble listeners collected from the Fiber tree? — React Lab'
        : 'Capture / Bubble 리스너는 Fiber 트리에서 어떻게 수집될까? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <ListenerCollectionPage locale={locale} />;
};

export default Page;
