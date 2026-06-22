import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { HostParentSiblingSection } from './sections/HostParentSiblingSection';
import { PlacementCodeCheckpointSection } from './sections/PlacementCodeCheckpointSection';
import { PlacementCommitFlowSection } from './sections/PlacementCommitFlowSection';
import { PlacementExampleAndQuizSection } from './sections/PlacementExampleAndQuizSection';
import { PlacementFlagReviewSection } from './sections/PlacementFlagReviewSection';
import { PlacementHeroSection } from './sections/PlacementHeroSection';
import { placementContent } from './content';

type Props = { locale: Locale };

export const PlacementPage = ({ locale }: Props) => {
  const c = placementContent[locale];

  return (
    <StartPageShell>
      <PlacementHeroSection content={c.hero} />
      <PlacementFlagReviewSection content={c.review} />
      <PlacementCommitFlowSection content={c.commitFlow} />
      <HostParentSiblingSection content={c.hostParent} />
      <PlacementCodeCheckpointSection content={c.checkpoint} />
      <PlacementExampleAndQuizSection example={c.example} quiz={c.quiz} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
