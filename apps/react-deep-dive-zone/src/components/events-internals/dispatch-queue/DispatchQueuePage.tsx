import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { DispatchQueueCodeCheckpoint } from './sections/DispatchQueueCodeCheckpoint';
import { DispatchQueueHero } from './sections/DispatchQueueHero';
import { ProcessLoopSteps } from './sections/ProcessLoopSteps';
import { QueueEntryShape } from './sections/QueueEntryShape';
import { StoppingRules } from './sections/StoppingRules';
import { dispatchQueueContent } from './content';

type Props = { locale: Locale };

export const DispatchQueuePage = ({ locale }: Props) => {
  const c = dispatchQueueContent[locale];

  return (
    <StartPageShell>
      <DispatchQueueHero content={c.hero} />
      <QueueEntryShape content={c.shape} />
      <ProcessLoopSteps content={c.loop} />
      <StoppingRules content={c.stopping} />
      <DispatchQueueCodeCheckpoint content={c.checkpoint} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
