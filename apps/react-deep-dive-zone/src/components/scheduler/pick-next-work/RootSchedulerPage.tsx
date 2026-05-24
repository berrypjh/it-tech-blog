import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../getting-started/_shared/StartPageShell';

import { EnsureRootScheduledRole } from './sections/EnsureRootScheduledRole';
import { GetNextLanesCore } from './sections/GetNextLanesCore';
import { MicrotaskReasonSection } from './sections/MicrotaskReasonSection';
import { MultiplePendingLanes } from './sections/MultiplePendingLanes';
import { NextLanesSelectionLab } from './sections/NextLanesSelectionLab';
import { RootSchedulerCodePreview } from './sections/RootSchedulerCodePreview';
import { RootSchedulerHero } from './sections/RootSchedulerHero';
import { RootSchedulerKeyTakeaways } from './sections/RootSchedulerKeyTakeaways';
import { RootSchedulerMission } from './sections/RootSchedulerMission';
import { RootSchedulerNextCTA } from './sections/RootSchedulerNextCTA';
import { RootSchedulerQuestionPanel } from './sections/RootSchedulerQuestionPanel';
import { ScheduleTaskDuringMicrotaskFlow } from './sections/ScheduleTaskDuringMicrotaskFlow';
import { SyncAsyncExecutionPath } from './sections/SyncAsyncExecutionPath';
import { rootSchedulerContent } from './content';

type Props = { locale: Locale };

export const RootSchedulerPage = ({ locale }: Props) => {
  const c = rootSchedulerContent[locale];

  return (
    <StartPageShell>
      <RootSchedulerHero content={c.hero} />
      <RootSchedulerQuestionPanel content={c.question} />
      <MultiplePendingLanes content={c.multiple} />
      <EnsureRootScheduledRole content={c.ensure} />
      <MicrotaskReasonSection content={c.microReason} />
      <ScheduleTaskDuringMicrotaskFlow content={c.scheduleTask} />
      <GetNextLanesCore content={c.getNext} />
      <SyncAsyncExecutionPath content={c.syncAsync} />
      <RootSchedulerCodePreview content={c.code} />
      <NextLanesSelectionLab content={c.lab} />
      <RootSchedulerMission content={c.mission} />
      <RootSchedulerKeyTakeaways content={c.takeaways} />
      <RootSchedulerNextCTA content={c.cta} />
    </StartPageShell>
  );
};
