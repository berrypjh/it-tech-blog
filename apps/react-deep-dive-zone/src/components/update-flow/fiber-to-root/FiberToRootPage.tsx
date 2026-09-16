import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { AlternateUpdateReasonSection } from './sections/AlternateUpdateReasonSection';
import { FiberPathVisualizationSection } from './sections/FiberPathVisualizationSection';
import { FiberToRootCodeCheckpoint } from './sections/FiberToRootCodeCheckpoint';
import { FiberToRootHero } from './sections/FiberToRootHero';
import { LaneRoleCompareSection } from './sections/LaneRoleCompareSection';
import { ReturnPointerReasonSection } from './sections/ReturnPointerReasonSection';
import { fiberToRootContent } from './content';

type Props = { locale: Locale };

export const FiberToRootPage = ({ locale }: Props) => {
  const c = fiberToRootContent[locale];

  return (
    <StartPageShell>
      <FiberToRootHero content={c.hero} />
      <LaneRoleCompareSection content={c.laneRoles} />
      <FiberPathVisualizationSection content={c.fiberPath} />
      <FiberToRootCodeCheckpoint content={c.checkpoint} />
      <AlternateUpdateReasonSection content={c.alternate} />
      <ReturnPointerReasonSection content={c.returnPointer} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
