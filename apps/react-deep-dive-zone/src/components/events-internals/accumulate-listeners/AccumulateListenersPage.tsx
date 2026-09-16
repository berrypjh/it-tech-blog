import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { AccumulateListenersCodeCheckpoint } from './sections/AccumulateListenersCodeCheckpoint';
import { AccumulateListenersHero } from './sections/AccumulateListenersHero';
import { CaptureVsBubble } from './sections/CaptureVsBubble';
import { ExecutionOrderTable } from './sections/ExecutionOrderTable';
import { FiberWalkSteps } from './sections/FiberWalkSteps';
import { accumulateListenersContent } from './content';

type Props = { locale: Locale };

export const AccumulateListenersPage = ({ locale }: Props) => {
  const c = accumulateListenersContent[locale];

  return (
    <StartPageShell>
      <AccumulateListenersHero content={c.hero} />
      <FiberWalkSteps content={c.walk} />
      <CaptureVsBubble content={c.phases} />
      <ExecutionOrderTable content={c.order} />
      <AccumulateListenersCodeCheckpoint content={c.checkpoint} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
