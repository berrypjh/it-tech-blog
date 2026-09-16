import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { BehaviorTable } from './sections/BehaviorTable';
import { BoundaryStates } from './sections/BoundaryStates';
import { CaptureSteps } from './sections/CaptureSteps';
import { SuspenseFallbackRetryCodeCheckpoint } from './sections/SuspenseFallbackRetryCodeCheckpoint';
import { SuspenseFallbackRetryHero } from './sections/SuspenseFallbackRetryHero';
import { suspenseFallbackRetryContent } from './content';

type Props = { locale: Locale };

export const SuspenseFallbackRetryPage = ({ locale }: Props) => {
  const c = suspenseFallbackRetryContent[locale];

  return (
    <StartPageShell>
      <SuspenseFallbackRetryHero content={c.hero} />
      <CaptureSteps content={c.capture} />
      <BoundaryStates content={c.states} />
      <BehaviorTable content={c.behaviors} />
      <SuspenseFallbackRetryCodeCheckpoint content={c.checkpoint} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
