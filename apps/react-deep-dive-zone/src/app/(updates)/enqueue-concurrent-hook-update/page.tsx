import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  enqueueConcurrentHookUpdateContent,
  EnqueueConcurrentHookUpdatePage,
} from '@/components/updates/enqueue-concurrent-hook-update';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = enqueueConcurrentHookUpdateContent[locale];

  return {
    title:
      locale === 'en'
        ? 'Linking into the update queue: enqueueConcurrentHookUpdate — React Lab'
        : 'update queue에 연결하기: enqueueConcurrentHookUpdate — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <EnqueueConcurrentHookUpdatePage locale={locale} />;
};

export default Page;
