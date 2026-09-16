import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { CoreResponsibilitiesSection } from './sections/CoreResponsibilitiesSection';
import { FunctionPositionFlowSection } from './sections/FunctionPositionFlowSection';
import { MarkRootUpdatedMeaningSection } from './sections/MarkRootUpdatedMeaningSection';
import { RenderPhaseVsNormalUpdateSection } from './sections/RenderPhaseVsNormalUpdateSection';
import { ScheduleUpdateCodeCheckpoint } from './sections/ScheduleUpdateCodeCheckpoint';
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
      <ScheduleUpdateCodeCheckpoint content={c.checkpoint} />
      <RenderPhaseVsNormalUpdateSection content={c.contextCompare} />
      <MarkRootUpdatedMeaningSection content={c.markRoot} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
