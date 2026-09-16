import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { HostParentSiblingSection } from './sections/HostParentSiblingSection';
import { PlacementCodeCheckpoint } from './sections/PlacementCodeCheckpoint';
import { PlacementCommitFlowSection } from './sections/PlacementCommitFlowSection';
import { PlacementExampleSection } from './sections/PlacementExampleSection';
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
      <PlacementCodeCheckpoint content={c.checkpoint} />
      <PlacementExampleSection content={c.example} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
