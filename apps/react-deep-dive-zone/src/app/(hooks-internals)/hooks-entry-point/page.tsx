import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  hooksEntryPointContent,
  HooksEntryPointPage,
} from '@/components/hooks-internals/hooks-entry-point';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = hooksEntryPointContent[locale];

  return {
    title:
      locale === 'en'
        ? 'Where Do Hooks Start? — React Lab'
        : 'Hooks는 어디서 시작되는가? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <HooksEntryPointPage locale={locale} />;
};

export default Page;
