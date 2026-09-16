import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { BoundaryClimb } from './sections/BoundaryClimb';
import { EdgeCaseTable } from './sections/EdgeCaseTable';
import { PromiseVsErrorCodeCheckpoint } from './sections/PromiseVsErrorCodeCheckpoint';
import { PromiseVsErrorHero } from './sections/PromiseVsErrorHero';
import { TwoMeanings } from './sections/TwoMeanings';
import { promiseVsErrorSplitContent } from './content';

type Props = { locale: Locale };

export const PromiseVsErrorSplitPage = ({ locale }: Props) => {
  const c = promiseVsErrorSplitContent[locale];

  return (
    <StartPageShell>
      <PromiseVsErrorHero content={c.hero} />
      <TwoMeanings content={c.split} />
      <BoundaryClimb content={c.climb} />
      <EdgeCaseTable content={c.cases} />
      <PromiseVsErrorCodeCheckpoint content={c.checkpoint} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
