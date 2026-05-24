import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../_shared/StartPageShell';

import { EightStepLearningRoadmap } from './sections/EightStepLearningRoadmap';
import { FinalLaunchBanner } from './sections/FinalLaunchBanner';
import { FullJourneyOverview } from './sections/FullJourneyOverview';
import { RecommendedCourses } from './sections/RecommendedCourses';
import { RoadmapHero } from './sections/RoadmapHero';
import { SelfCheckChecklist } from './sections/SelfCheckChecklist';
import { SiteUsageFlow } from './sections/SiteUsageFlow';
import { StageDeliverables } from './sections/StageDeliverables';
import { roadmapContent } from './content';

type Props = { locale: Locale };

export const RoadmapPage = ({ locale }: Props) => {
  const c = roadmapContent[locale];

  return (
    <StartPageShell>
      <RoadmapHero content={c.hero} />

      {/* 01 + 02 combined board — lg: 28% / 72% 비율 */}
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.28fr)_minmax(0,_0.72fr)] gap-xl lg:gap-2xl items-start">
        <FullJourneyOverview content={c.journey} />
        <EightStepLearningRoadmap content={c.roadmap} />
      </div>

      <StageDeliverables content={c.deliverables} />
      <SelfCheckChecklist content={c.selfCheck} />
      <RecommendedCourses content={c.courses} />
      <SiteUsageFlow content={c.usage} />
      <FinalLaunchBanner content={c.finale} />
    </StartPageShell>
  );
};
