import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../shared/StartPageShell';

import { EightStepLearningRoadmap } from './sections/EightStepLearningRoadmap';
import { FinalLaunchBanner } from './sections/FinalLaunchBanner';
import { RoadmapHero } from './sections/RoadmapHero';
import { StageDeliverables } from './sections/StageDeliverables';
import { roadmapContent } from './content';

type Props = { locale: Locale };

export const RoadmapPage = ({ locale }: Props) => {
  const c = roadmapContent[locale];

  return (
    <StartPageShell>
      <RoadmapHero content={c.hero} />
      <EightStepLearningRoadmap content={c.roadmap} />
      <StageDeliverables content={c.deliverables} />
      <FinalLaunchBanner content={c.finale} />
    </StartPageShell>
  );
};
