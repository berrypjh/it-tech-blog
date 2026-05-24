import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  dispatchQueueOrderContent,
  DispatchQueueOrderPage,
} from '@/components/events-internals/dispatch-queue';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = dispatchQueueOrderContent[locale];

  return {
    title:
      locale === 'en'
        ? 'In what order does dispatchQueue invoke event handlers? — React Lab'
        : 'dispatchQueue는 이벤트 핸들러를 어떤 순서로 실행할까? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <DispatchQueueOrderPage locale={locale} />;
};

export default Page;
