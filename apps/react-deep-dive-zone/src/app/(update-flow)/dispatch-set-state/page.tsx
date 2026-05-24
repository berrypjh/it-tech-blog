import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  dispatchSetStateContent,
  DispatchSetStatePage,
} from '@/components/updates/dispatch-set-state';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = dispatchSetStateContent[locale];

  return {
    title:
      locale === 'en'
        ? 'How setState remembers its Fiber and queue — React Lab'
        : 'setState 함수는 어떻게 Fiber와 queue를 기억하나? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <DispatchSetStatePage locale={locale} />;
};

export default Page;
