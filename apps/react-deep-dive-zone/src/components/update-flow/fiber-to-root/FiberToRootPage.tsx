import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { AlternateUpdateReasonSection } from './sections/AlternateUpdateReasonSection';
import { CodeCheckpointSection } from './sections/CodeCheckpointSection';
import { FiberPathVisualizationSection } from './sections/FiberPathVisualizationSection';
import { FiberToRootHero } from './sections/FiberToRootHero';
import { LaneRoleCompareSection } from './sections/LaneRoleCompareSection';
import { MiniQuizSection } from './sections/MiniQuizSection';
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
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
