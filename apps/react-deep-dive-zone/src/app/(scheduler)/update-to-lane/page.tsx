import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  requestUpdateLaneContent,
  RequestUpdateLanePage,
} from '@/components/scheduler/update-to-lane';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = requestUpdateLaneContent[locale];

  return {
    title:
      locale === 'en'
        ? 'Which Lane does an update get? — React Lab'
        : '업데이트는 어떤 Lane을 받는가? — React Lab',
    description: c.hero.subtitle,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <RequestUpdateLanePage locale={locale} />;
};

export default Page;
