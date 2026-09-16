import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { BitOperations } from './sections/BitOperations';
import { LaneShapeCodeCheckpoint } from './sections/LaneShapeCodeCheckpoint';
import { LaneShapeHero } from './sections/LaneShapeHero';
import { LaneTable } from './sections/LaneTable';
import { NumberVsBitmask } from './sections/NumberVsBitmask';
import { laneShapeContent } from './content';

type Props = { locale: Locale };

export const LaneShapePage = ({ locale }: Props) => {
  const c = laneShapeContent[locale];

  return (
    <StartPageShell>
      <LaneShapeHero content={c.hero} />
      <NumberVsBitmask content={c.whyBits} />
      <LaneTable content={c.lanes} />
      <BitOperations content={c.operations} />
      <LaneShapeCodeCheckpoint content={c.checkpoint} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
