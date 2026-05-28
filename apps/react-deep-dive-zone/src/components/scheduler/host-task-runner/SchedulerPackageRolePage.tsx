import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../shared/StartPageShell';

import { PriorityLevelCards } from './sections/PriorityLevelCards';
import { ReactToSchedulerTaskFlow } from './sections/ReactToSchedulerTaskFlow';
import { RoleComparisonTable } from './sections/RoleComparisonTable';
import { ScheduleCallbackInternalFlow } from './sections/ScheduleCallbackInternalFlow';
import { ScheduleCallbackMoment } from './sections/ScheduleCallbackMoment';
import { SchedulerPackageCodePreview } from './sections/SchedulerPackageCodePreview';
import { SchedulerPackageHero } from './sections/SchedulerPackageHero';
import { SchedulerPackageKeyTakeaways } from './sections/SchedulerPackageKeyTakeaways';
import { SchedulerPackageMission } from './sections/SchedulerPackageMission';
import { SchedulerPackageNextCTA } from './sections/SchedulerPackageNextCTA';
import { SchedulerPackageQuestionPanel } from './sections/SchedulerPackageQuestionPanel';
import { TaskQueueLab } from './sections/TaskQueueLab';
import { TaskQueueVisualization } from './sections/TaskQueueVisualization';
import { schedulerPackageContent } from './content';

type Props = { locale: Locale };

export const SchedulerPackageRolePage = ({ locale }: Props) => {
  const c = schedulerPackageContent[locale];

  return (
    <StartPageShell>
      <SchedulerPackageHero content={c.hero} />
      <SchedulerPackageQuestionPanel content={c.question} />
      <RoleComparisonTable content={c.comparison} />
      <ScheduleCallbackMoment content={c.callbackMoment} />
      <TaskQueueVisualization content={c.taskQueue} />
      <PriorityLevelCards content={c.priorities} />
      <ScheduleCallbackInternalFlow content={c.internalFlow} />
      <ReactToSchedulerTaskFlow content={c.reactToScheduler} />
      <SchedulerPackageCodePreview content={c.code} />
      <TaskQueueLab content={c.lab} />
      <SchedulerPackageMission content={c.mission} />
      <SchedulerPackageKeyTakeaways content={c.takeaways} />
      <SchedulerPackageNextCTA content={c.cta} />
    </StartPageShell>
  );
};
