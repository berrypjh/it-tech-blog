import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  dispatchSetStateEntryContent,
  DispatchSetStateEntryPage,
} from '@/components/update-flow/dispatch-set-state-entry';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = dispatchSetStateEntryContent[locale];

  return {
    title:
      locale === 'en'
        ? 'dispatchSetState: the update entry point — React Lab'
        : 'dispatchSetState: 업데이트 진입점 읽기 — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <DispatchSetStateEntryPage locale={locale} />;
};

export default Page;
