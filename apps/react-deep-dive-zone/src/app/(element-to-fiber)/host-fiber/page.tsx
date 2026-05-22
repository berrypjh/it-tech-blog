import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  hostComponentFiberContent,
  HostComponentFiberPage,
} from '@/components/element-to-fiber/host-fiber';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = hostComponentFiberContent[locale];

  return {
    title:
      locale === 'en'
        ? 'How a Host Component Fiber Is Built — React Lab'
        : 'Host Component Fiber는 어떻게 만들어지는가? — React Lab',
    description: c.hero.description1,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <HostComponentFiberPage locale={locale} />;
};

export default Page;
