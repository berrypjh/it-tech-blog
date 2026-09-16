import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  transitionDeferredSplitContent,
  TransitionDeferredSplitPage,
} from '@/components/scheduler/transition-deferred-split';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = transitionDeferredSplitContent[locale];

  return {
    title:
      locale === 'en'
        ? 'How do Transition and Deferred Update get low priority? — React Lab'
        : 'Transition과 Deferred Update는 어떻게 낮은 우선순위를 얻을까? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <TransitionDeferredSplitPage locale={locale} />;
};

export default Page;
