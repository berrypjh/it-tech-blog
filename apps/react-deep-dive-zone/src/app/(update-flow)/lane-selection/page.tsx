import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  laneUpdateObjectContent,
  LaneUpdateObjectPage,
} from '@/components/updates/lane-update-object';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = laneUpdateObjectContent[locale];

  return {
    title:
      locale === 'en'
        ? 'Lane selection and update object creation — React Lab'
        : 'lane 선택과 update 객체 생성 — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <LaneUpdateObjectPage locale={locale} />;
};

export default Page;
