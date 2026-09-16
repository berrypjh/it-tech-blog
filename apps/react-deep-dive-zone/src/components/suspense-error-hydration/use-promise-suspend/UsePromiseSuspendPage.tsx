import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { PromiseStates } from './sections/PromiseStates';
import { ThenableTracking } from './sections/ThenableTracking';
import { UseCallSteps } from './sections/UseCallSteps';
import { UsePromiseSuspendCodeCheckpoint } from './sections/UsePromiseSuspendCodeCheckpoint';
import { UsePromiseSuspendHero } from './sections/UsePromiseSuspendHero';
import { usePromiseSuspendContent } from './content';

type Props = { locale: Locale };

export const UsePromiseSuspendPage = ({ locale }: Props) => {
  const c = usePromiseSuspendContent[locale];

  return (
    <StartPageShell>
      <UsePromiseSuspendHero content={c.hero} />
      <PromiseStates content={c.states} />
      <UseCallSteps content={c.steps} />
      <ThenableTracking content={c.tracking} />
      <UsePromiseSuspendCodeCheckpoint content={c.checkpoint} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
