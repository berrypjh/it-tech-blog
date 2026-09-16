import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  pauseResumeRenderContent,
  PauseResumeRenderPage,
} from '@/components/scheduler/pause-resume-render';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = pauseResumeRenderContent[locale];

  return {
    title:
      locale === 'en'
        ? 'How does rendering pause and resume? — React Lab'
        : '렌더링은 어떻게 중단되고 다시 이어질까? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <PauseResumeRenderPage locale={locale} />;
};

export default Page;
