import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  fullFlowContent,
  SchedulerFullFlowReviewPage,
} from '@/components/scheduler/scheduler-overall-flow';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = fullFlowContent[locale];

  return {
    title:
      locale === 'en'
        ? 'End-to-end recap: how click, transition, and deferred updates reach render — React Lab'
        : '전체 흐름 복습 — click, transition, deferred update가 렌더링되기까지 — React Lab',
    description: c.hero.subtitle,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <SchedulerFullFlowReviewPage locale={locale} />;
};

export default Page;
