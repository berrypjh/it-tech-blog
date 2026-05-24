import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  rootCurrentRefContent,
  RootCurrentRefPage,
} from '@/components/commit-phase/current-swap-ref';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = rootCurrentRefContent[locale];

  return {
    title:
      locale === 'en'
        ? 'root.current swap and ref detach / attach — React Lab'
        : 'root.current 전환과 ref detach / attach — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <RootCurrentRefPage locale={locale} />;
};

export default Page;
