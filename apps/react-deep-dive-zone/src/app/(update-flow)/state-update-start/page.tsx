import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  stateUpdateStartContent,
  StateUpdateStartPage,
} from '@/components/update-flow/state-update-start';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = stateUpdateStartContent[locale];

  return {
    title:
      locale === 'en'
        ? 'What setState actually starts — React Lab'
        : 'setState를 호출하면 실제로 무엇이 시작되는가? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <StateUpdateStartPage locale={locale} />;
};

export default Page;
