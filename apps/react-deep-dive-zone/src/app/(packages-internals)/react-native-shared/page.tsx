import { getServerLocale } from '@it-tech-blog/preferences/server';

import { rnContent, RnSharedPage } from '@/components/packages-internals/rn-shared';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = rnContent[locale];

  return {
    title:
      locale === 'en'
        ? 'Structure shared with React Native — React Lab'
        : 'React Native와 구조적으로 공유되는 부분 — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <RnSharedPage locale={locale} />;
};

export default Page;
