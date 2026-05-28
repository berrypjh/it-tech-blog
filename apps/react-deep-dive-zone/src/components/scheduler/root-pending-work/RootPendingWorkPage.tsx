import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../shared/StartPageShell';

import { EnsureRootScheduledConnection } from './sections/EnsureRootScheduledConnection';
import { LaneUpdateDestination } from './sections/LaneUpdateDestination';
import { MarkRootUpdatedSection } from './sections/MarkRootUpdatedSection';
import { PendingLanesChange } from './sections/PendingLanesChange';
import { PendingLanesSimulator } from './sections/PendingLanesSimulator';
import { RootPendingWorkCodePreview } from './sections/RootPendingWorkCodePreview';
import { RootPendingWorkHero } from './sections/RootPendingWorkHero';
import { RootPendingWorkKeyTakeaways } from './sections/RootPendingWorkKeyTakeaways';
import { RootPendingWorkMission } from './sections/RootPendingWorkMission';
import { RootPendingWorkNextCTA } from './sections/RootPendingWorkNextCTA';
import { RootPendingWorkQuestionPanel } from './sections/RootPendingWorkQuestionPanel';
import { ScheduleUpdateOnFiberFlow } from './sections/ScheduleUpdateOnFiberFlow';
import { SuspendedRenderHandling } from './sections/SuspendedRenderHandling';
import { rootPendingWorkContent } from './content';

type Props = { locale: Locale };

export const RootPendingWorkPage = ({ locale }: Props) => {
  const c = rootPendingWorkContent[locale];

  return (
    <StartPageShell>
      <RootPendingWorkHero content={c.hero} />
      <RootPendingWorkQuestionPanel content={c.question} />
      <LaneUpdateDestination content={c.destination} />
      <ScheduleUpdateOnFiberFlow content={c.scheduleFlow} />
      <MarkRootUpdatedSection content={c.markRoot} />
      <PendingLanesChange content={c.pendingLanesChange} />
      <SuspendedRenderHandling content={c.suspended} />
      <EnsureRootScheduledConnection content={c.ensure} />
      <RootPendingWorkCodePreview content={c.code} />
      <PendingLanesSimulator content={c.simulator} />
      <RootPendingWorkMission content={c.mission} />
      <RootPendingWorkKeyTakeaways content={c.takeaways} />
      <RootPendingWorkNextCTA content={c.cta} />
    </StartPageShell>
  );
};
