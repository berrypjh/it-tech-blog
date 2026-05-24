import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  onClickClickContent,
  OnClickClickMappingPage,
} from '@/components/events-internals/onclick-to-click';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = onClickClickContent[locale];

  return {
    title:
      locale === 'en'
        ? 'How is onClick wired to the native click event? — React Lab'
        : 'onClick은 click과 어떻게 연결되는가? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <OnClickClickMappingPage locale={locale} />;
};

export default Page;
