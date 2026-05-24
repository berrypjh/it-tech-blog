import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../getting-started/_shared/StartPageShell';

import { HostParentSiblingSection } from './sections/HostParentSiblingSection';
import { PlacementCodeCheckpointSection } from './sections/PlacementCodeCheckpointSection';
import { PlacementCommitFlowSection } from './sections/PlacementCommitFlowSection';
import { PlacementExampleAndQuizSection } from './sections/PlacementExampleAndQuizSection';
import { PlacementFlagReviewSection } from './sections/PlacementFlagReviewSection';
import { PlacementHeroSection } from './sections/PlacementHeroSection';
import { PlacementNextCTASection } from './sections/PlacementNextCTASection';
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
      <PlacementNextCTASection content={c.cta} />
    </StartPageShell>
  );
};
