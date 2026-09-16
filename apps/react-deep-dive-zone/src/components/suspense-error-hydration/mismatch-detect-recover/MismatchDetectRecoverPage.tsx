import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { BlastRadiusTable } from './sections/BlastRadiusTable';
import { MismatchCauses } from './sections/MismatchCauses';
import { MismatchCodeCheckpoint } from './sections/MismatchCodeCheckpoint';
import { MismatchHero } from './sections/MismatchHero';
import { RecoverySteps } from './sections/RecoverySteps';
import { mismatchDetectRecoverContent } from './content';

type Props = { locale: Locale };

export const MismatchDetectRecoverPage = ({ locale }: Props) => {
  const c = mismatchDetectRecoverContent[locale];

  return (
    <StartPageShell>
      <MismatchHero content={c.hero} />
      <MismatchCauses content={c.causes} />
      <RecoverySteps content={c.recover} />
      <BlastRadiusTable content={c.scope} />
      <MismatchCodeCheckpoint content={c.checkpoint} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
