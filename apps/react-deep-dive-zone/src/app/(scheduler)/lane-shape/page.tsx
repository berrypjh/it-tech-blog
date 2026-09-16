import { getServerLocale } from '@it-tech-blog/preferences/server';

import { laneShapeContent, LaneShapePage } from '@/components/scheduler/lane-shape';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = laneShapeContent[locale];

  return {
    title:
      locale === 'en'
        ? 'What is a Lane and why is it a bitmask? — React Lab'
        : 'Lane은 무엇이고 왜 비트마스크로 관리될까? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <LaneShapePage locale={locale} />;
};

export default Page;
