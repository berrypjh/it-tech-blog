import { getServerLocale } from '@it-tech-blog/preferences/server';

import { AccessibilityLearningRoadmapPage, type RoadmapLocale } from '@/components/start/roadmap';
import { roadmapContent } from '@/components/start/roadmap/content';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const lang = ((locale as RoadmapLocale) ?? 'ko') as RoadmapLocale;
  return { title: roadmapContent[lang].meta.pageTitle };
};

const RoadmapPage = async () => {
  const locale = await getServerLocale();
  const lang = ((locale as RoadmapLocale) ?? 'ko') as RoadmapLocale;
  return <AccessibilityLearningRoadmapPage locale={lang} />;
};

export default RoadmapPage;
