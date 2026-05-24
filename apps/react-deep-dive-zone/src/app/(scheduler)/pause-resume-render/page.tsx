import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  renderYieldingContent,
  RenderYieldingContinuationPage,
} from '@/components/scheduler/pause-resume-render';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = renderYieldingContent[locale];

  return {
    title:
      locale === 'en'
        ? 'How does rendering pause and resume? — React Lab'
        : '렌더링은 어떻게 중단되고 다시 이어질까? — React Lab',
    description: c.hero.subtitle,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <RenderYieldingContinuationPage locale={locale} />;
};

export default Page;
