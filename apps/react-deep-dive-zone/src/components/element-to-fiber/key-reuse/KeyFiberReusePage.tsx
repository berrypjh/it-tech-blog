import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../start/_shared/StartPageShell';

import { KeyFiberReuseHero } from './sections/KeyFiberReuseHero';
import { KeyMiniQuiz } from './sections/KeyMiniQuiz';
import { KeyStableComparison } from './sections/KeyStableComparison';
import { KeyTrackingPrinciple } from './sections/KeyTrackingPrinciple';
import { NextStepCTA } from './sections/NextStepCTA';
import { QuickChecklist } from './sections/QuickChecklist';
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
      <KeyMiniQuiz content={c.quiz} />
      <QuickChecklist content={c.checklist} />
      <NextStepCTA content={c.next} />
    </StartPageShell>
  );
};
