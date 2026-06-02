import { getServerLocale } from '@it-tech-blog/preferences/server';

import { NextSourceRoadmapPage, roadmapContent } from '@/components/getting-started/roadmap';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = roadmapContent[locale];

  return {
    title:
      locale === 'en'
        ? 'Next.js Source Exploration Roadmap — Next Lab'
        : 'Next.js 소스코드 탐구 로드맵 — Next Lab',
    description: c.hero.highlight.join(' '),
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <NextSourceRoadmapPage locale={locale} />;
};

export default Page;
