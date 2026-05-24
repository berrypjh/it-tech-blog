import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  hooksEntryFlowContent,
  HooksEntryFlowPage,
} from '@/components/hooks-internals/hooks-entry-flow';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = hooksEntryFlowContent[locale];

  return {
    title:
      locale === 'en'
        ? 'Where Do Hooks Begin? — React Lab'
        : 'Hooks는 어디서 시작되는가? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <HooksEntryFlowPage locale={locale} />;
};

export default Page;
