import { getServerLocale } from '@it-tech-blog/preferences/server';

import { AccessibilityLearningRoadmapPage } from '@/components/start/roadmap';
import { roadmapContent } from '@/components/start/roadmap/content';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  return { title: roadmapContent[locale].meta.pageTitle };
};

const RoadmapPage = async () => {
  const locale = await getServerLocale();
  return <AccessibilityLearningRoadmapPage locale={locale} />;
};

export default RoadmapPage;
