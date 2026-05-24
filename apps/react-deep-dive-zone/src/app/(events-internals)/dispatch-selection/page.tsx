import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  dispatchSelectionContent,
  NativeEventDispatchPriorityPage,
} from '@/components/events-internals/dispatch-selection';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = dispatchSelectionContent[locale];

  return {
    title:
      locale === 'en'
        ? 'Which dispatch function handles an incoming native event? — React Lab'
        : 'Native Event가 들어오면 어떤 Dispatch 함수가 선택될까? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <NativeEventDispatchPriorityPage locale={locale} />;
};

export default Page;
