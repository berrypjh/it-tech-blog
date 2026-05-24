import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  whyNotImmediateContent,
  WhyNotImmediateUpdatePage,
} from '@/components/scheduler/why-not-immediate';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = whyNotImmediateContent[locale];

  return {
    title:
      locale === 'en'
        ? 'Why does React not run updates immediately? — React Lab'
        : 'React는 왜 업데이트를 바로 실행하지 않을까? — React Lab',
    description: c.hero.subtitle,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <WhyNotImmediateUpdatePage locale={locale} />;
};

export default Page;
