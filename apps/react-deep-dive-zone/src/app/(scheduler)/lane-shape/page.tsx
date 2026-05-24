import { getServerLocale } from '@it-tech-blog/preferences/server';

import { laneBitmaskContent, LaneBitmaskPage } from '@/components/scheduler/lane-shape';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = laneBitmaskContent[locale];

  return {
    title:
      locale === 'en'
        ? 'What is a Lane and why is it a bitmask? — React Lab'
        : 'Lane은 무엇이고 왜 비트마스크로 관리될까? — React Lab',
    description: c.hero.subtitle,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <LaneBitmaskPage locale={locale} />;
};

export default Page;
