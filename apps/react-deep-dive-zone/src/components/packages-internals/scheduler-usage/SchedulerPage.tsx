import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/NextStepBanner';
import { StartPageShell } from '../../shared/StartPageShell';

import { CheckpointSection } from './sections/CheckpointSection';
import { CompareSection } from './sections/CompareSection';
import { DoesNotSection } from './sections/DoesNotSection';
import { NeedSection } from './sections/NeedSection';
import { PrioritySection } from './sections/PrioritySection';
import { QueueSection } from './sections/QueueSection';
import { SchedulerHero } from './sections/SchedulerHero';
import { schedulerContent } from './content';

type Props = { locale: Locale };

const PRIORITY_SECTION_ID = 'section-priority';
const CHECKPOINT_SECTION_ID = 'section-checkpoint';

export const SchedulerPage = ({ locale }: Props) => {
  const c = schedulerContent[locale];

  return (
    <StartPageShell>
      <SchedulerHero content={c.hero} />
      <NeedSection content={c.needs} />
      <CompareSection content={c.compare} />
      <PrioritySection content={c.priority} sectionId={PRIORITY_SECTION_ID} />
      <CheckpointSection content={c.checkpoint} sectionId={CHECKPOINT_SECTION_ID} />
      <DoesNotSection content={c.doesNot} />
      <QueueSection content={c.queue} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
