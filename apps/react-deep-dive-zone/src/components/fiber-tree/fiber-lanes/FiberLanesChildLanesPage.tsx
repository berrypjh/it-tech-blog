import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/NextStepBanner';
import { StartPageShell } from '../../shared/StartPageShell';

import { BitfieldVisualization } from './sections/BitfieldVisualization';
import { ChildLanesPropagation } from './sections/ChildLanesPropagation';
import { LanesChildLanesComparison } from './sections/LanesChildLanesComparison';
import { LanesCodeCheckpoint } from './sections/LanesCodeCheckpoint';
import { LanesHero } from './sections/LanesHero';
import { RepresentativeLaneCards } from './sections/RepresentativeLaneCards';
import { fiberLanesContent } from './content';

type Props = { locale: Locale };

export const FiberLanesChildLanesPage = ({ locale }: Props) => {
  const c = fiberLanesContent[locale];

  return (
    <StartPageShell>
      <LanesHero content={c.hero} />
      <LanesChildLanesComparison content={c.comparison} />
      <RepresentativeLaneCards content={c.laneCards} />
      <BitfieldVisualization content={c.bitfield} />
      <LanesCodeCheckpoint content={c.checkpoint} />
      <ChildLanesPropagation content={c.propagation} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
