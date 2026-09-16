import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { HookRuleTable } from './sections/HookRuleTable';
import { ThenableTrackingSteps } from './sections/ThenableTrackingSteps';
import { ThreeOutcomeCards } from './sections/ThreeOutcomeCards';
import { TwoReadables } from './sections/TwoReadables';
import { UseModelCodeCheckpoint } from './sections/UseModelCodeCheckpoint';
import { UseModelHero } from './sections/UseModelHero';
import { useSuspenseErrorModelContent } from './content';

type Props = { locale: Locale };

export const UseSuspenseErrorModelPage = ({ locale }: Props) => {
  const c = useSuspenseErrorModelContent[locale];

  return (
    <StartPageShell>
      <UseModelHero content={c.hero} />
      <ThreeOutcomeCards content={c.branches} />
      <TwoReadables content={c.readable} />
      <HookRuleTable content={c.rules} />
      <ThenableTrackingSteps content={c.tracking} />
      <UseModelCodeCheckpoint content={c.checkpoint} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
