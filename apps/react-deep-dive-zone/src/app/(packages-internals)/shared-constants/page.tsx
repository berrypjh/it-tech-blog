import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  sharedContent,
  SharedFoundationPage,
} from '@/components/packages-internals/shared-foundation';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = sharedContent[locale];

  return {
    title:
      locale === 'en'
        ? 'shared: the common foundation across React packages — React Lab'
        : 'shared는 어떤 상수와 타입을 모으는가? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <SharedFoundationPage locale={locale} />;
};

export default Page;
