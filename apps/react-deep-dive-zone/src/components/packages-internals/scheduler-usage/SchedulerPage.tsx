import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { CheckpointSection } from './sections/CheckpointSection';
import { CompareSection } from './sections/CompareSection';
import { DoesNotSection } from './sections/DoesNotSection';
import { NeedSection } from './sections/NeedSection';
import { PrioritySection } from './sections/PrioritySection';
import { QueueSection } from './sections/QueueSection';
import { SchedulerHero } from './sections/SchedulerHero';
import { schedulerContent } from './content';

type Props = { locale: Locale };

export const SchedulerPage = ({ locale }: Props) => {
  const c = schedulerContent[locale];

  return (
    <StartPageShell>
      <SchedulerHero content={c.hero} />
      <NeedSection content={c.needs} />
      <CompareSection content={c.compare} />
      <PrioritySection content={c.priority} />
      <CheckpointSection content={c.checkpoint} />
      <DoesNotSection content={c.doesNot} />
      <QueueSection content={c.queue} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
