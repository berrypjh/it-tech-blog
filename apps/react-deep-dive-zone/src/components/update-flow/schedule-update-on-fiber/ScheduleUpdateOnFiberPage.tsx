import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../shared/StartPageShell';

import { CodeCheckpointSection } from './sections/CodeCheckpointSection';
import { CoreResponsibilitiesSection } from './sections/CoreResponsibilitiesSection';
import { FunctionPositionFlowSection } from './sections/FunctionPositionFlowSection';
import { MarkRootUpdatedMeaningSection } from './sections/MarkRootUpdatedMeaningSection';
import { MiniQuizSection } from './sections/MiniQuizSection';
import { NextStepCTA } from './sections/NextStepCTA';
import { RenderPhaseVsNormalUpdateSection } from './sections/RenderPhaseVsNormalUpdateSection';
import { ScheduleUpdateHero } from './sections/ScheduleUpdateHero';
import { scheduleUpdateOnFiberContent } from './content';

type Props = { locale: Locale };

export const ScheduleUpdateOnFiberPage = ({ locale }: Props) => {
  const c = scheduleUpdateOnFiberContent[locale];

  return (
    <StartPageShell>
      <ScheduleUpdateHero content={c.hero} />
      <FunctionPositionFlowSection content={c.flow} />
      <CoreResponsibilitiesSection content={c.responsibilities} />
      <CodeCheckpointSection content={c.checkpoint} />
      <RenderPhaseVsNormalUpdateSection content={c.contextCompare} />
      <MarkRootUpdatedMeaningSection content={c.markRoot} />
      <MiniQuizSection content={c.quiz} />
      <NextStepCTA content={c.next} />
    </StartPageShell>
  );
};
