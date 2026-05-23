import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  fiberStateAndQueueContent,
  FiberStateUpdateQueuePage,
} from '@/components/fiber-tree/fiber-state-and-queue';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = fiberStateAndQueueContent[locale];

  return {
    title:
      locale === 'en'
        ? 'memoizedState & updateQueue — React Lab'
        : 'memoizedState와 updateQueue: 상태와 업데이트는 어디에 쌓이나? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <FiberStateUpdateQueuePage locale={locale} />;
};

export default Page;
