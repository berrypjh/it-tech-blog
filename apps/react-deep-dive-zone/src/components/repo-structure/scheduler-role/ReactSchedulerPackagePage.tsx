import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../shared/StartPageShell';

import { ReconcilerSchedulerRelation } from './sections/ReconcilerSchedulerRelation';
import { ScheduleCallbackCheckpoint } from './sections/ScheduleCallbackCheckpoint';
import { SchedulerHero } from './sections/SchedulerHero';
import { SchedulerNeedCards } from './sections/SchedulerNeedCards';
import { SchedulerNextCTA } from './sections/SchedulerNextCTA';
import { SchedulerPriorityTable } from './sections/SchedulerPriorityTable';
import { SchedulerQueueSimulation } from './sections/SchedulerQueueSimulation';
import { SchedulerResponsibilityBoundary } from './sections/SchedulerResponsibilityBoundary';
import { schedulerContent } from './content';

type Props = { locale: Locale };

const NEED_SECTION_ID = 'section-need';

export const ReactSchedulerPackagePage = ({ locale }: Props) => {
  const c = schedulerContent[locale];

  return (
    <StartPageShell>
      <SchedulerHero content={c.hero} />
      <SchedulerNeedCards content={c.need} sectionId={NEED_SECTION_ID} />
      <ReconcilerSchedulerRelation content={c.relation} />
      <SchedulerPriorityTable content={c.priority} />
      <ScheduleCallbackCheckpoint content={c.checkpoint} />
      <SchedulerResponsibilityBoundary content={c.responsibility} />
      <SchedulerQueueSimulation content={c.simulation} />
      <SchedulerNextCTA content={c.nextStep} />
    </StartPageShell>
  );
};
