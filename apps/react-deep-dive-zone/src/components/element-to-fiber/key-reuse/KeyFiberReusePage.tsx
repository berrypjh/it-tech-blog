import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { KeyFiberReuseHero } from './sections/KeyFiberReuseHero';
import { KeyStableComparison } from './sections/KeyStableComparison';
import { KeyTrackingPrinciple } from './sections/KeyTrackingPrinciple';
import { SourceCodeCheckpoint } from './sections/SourceCodeCheckpoint';
import { StateResetExample } from './sections/StateResetExample';
import { VisualSimulation } from './sections/VisualSimulation';
import { keyFiberReuseContent } from './content';

type Props = { locale: Locale };

export const KeyFiberReusePage = ({ locale }: Props) => {
  const c = keyFiberReuseContent[locale];

  return (
    <StartPageShell>
      <KeyFiberReuseHero content={c.hero} />
      <KeyTrackingPrinciple content={c.tracking} />
      <KeyStableComparison content={c.stableVsChanged} />
      <StateResetExample content={c.stateExample} />
      <SourceCodeCheckpoint content={c.checkpoint} />
      <VisualSimulation content={c.simulation} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
