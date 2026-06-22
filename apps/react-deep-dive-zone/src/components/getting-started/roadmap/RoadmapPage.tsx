import type { Locale } from '@it-tech-blog/preferences';

import { FinalLaunchBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { EightStepLearningRoadmap } from './sections/EightStepLearningRoadmap';
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
