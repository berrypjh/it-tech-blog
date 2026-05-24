import { getServerLocale } from '@it-tech-blog/preferences/server';

import { roadmapContent, RoadmapPage } from '@/components/start/roadmap';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = roadmapContent[locale];

  return {
    title:
      locale === 'en'
        ? 'React source exploration roadmap — React Lab'
        : 'React 소스코드 탐구 로드맵 — React Lab',
    description: c.hero.description.join(' '),
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <RoadmapPage locale={locale} />;
};

export default Page;
