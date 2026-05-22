import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  alternateFiberContent,
  AlternateFiberPage,
} from '@/components/element-to-fiber/alternate-intro';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = alternateFiberContent[locale];

  return {
    title:
      locale === 'en'
        ? 'Why does a Fiber have alternate? — React Lab'
        : 'alternate는 왜 등장하는가? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <AlternateFiberPage locale={locale} />;
};

export default Page;
