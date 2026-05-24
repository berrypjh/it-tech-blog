import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  ensureRootScheduledContent,
  EnsureRootScheduledPage,
} from '@/components/update-flow/ensure-root-scheduled';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = ensureRootScheduledContent[locale];

  return {
    title:
      locale === 'en'
        ? 'ensureRootIsScheduled: putting the Root onto the schedule — React Lab'
        : 'ensureRootIsScheduled: Root를 실제 스케줄에 올리기 — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <EnsureRootScheduledPage locale={locale} />;
};

export default Page;
