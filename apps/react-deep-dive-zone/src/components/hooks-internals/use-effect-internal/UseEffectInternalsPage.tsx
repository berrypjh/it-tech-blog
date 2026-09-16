import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { DepsDecision } from './sections/DepsDecision';
import { EffectMyths } from './sections/EffectMyths';
import { EffectObjectShape } from './sections/EffectObjectShape';
import { EffectRegistrationFlow } from './sections/EffectRegistrationFlow';
import { UseEffectCodeCheckpoint } from './sections/UseEffectCodeCheckpoint';
import { UseEffectHero } from './sections/UseEffectHero';
import { useEffectInternalsContent } from './content';

type Props = { locale: Locale };

export const UseEffectInternalsPage = ({ locale }: Props) => {
  const c = useEffectInternalsContent[locale];

  return (
    <StartPageShell>
      <UseEffectHero content={c.hero} />
      <EffectMyths content={c.myths} />
      <EffectRegistrationFlow content={c.flow} />
      <EffectObjectShape content={c.effectObject} />
      <DepsDecision content={c.deps} />
      <UseEffectCodeCheckpoint content={c.checkpoint} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
