import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../shared/StartPageShell';

import { AlternateUpdateReasonSection } from './sections/AlternateUpdateReasonSection';
import { CodeCheckpointSection } from './sections/CodeCheckpointSection';
import { FiberPathVisualizationSection } from './sections/FiberPathVisualizationSection';
import { FiberToRootHero } from './sections/FiberToRootHero';
import { LaneRoleCompareSection } from './sections/LaneRoleCompareSection';
import { MiniQuizSection } from './sections/MiniQuizSection';
import { NextStepCTA } from './sections/NextStepCTA';
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
      <CodeCheckpointSection content={c.checkpoint} />
      <AlternateUpdateReasonSection content={c.alternate} />
      <ReturnPointerReasonSection content={c.returnPointer} />
      <MiniQuizSection content={c.quiz} />
      <NextStepCTA content={c.next} />
    </StartPageShell>
  );
};
