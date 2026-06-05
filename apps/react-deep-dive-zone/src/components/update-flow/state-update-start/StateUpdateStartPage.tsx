import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/NextStepBanner';
import { StartPageShell } from '../../shared/StartPageShell';

import { InternalFlowPreviewSection } from './sections/InternalFlowPreviewSection';
import { KeySummaryBanner } from './sections/KeySummaryBanner';
import { LearningQuestionSection } from './sections/LearningQuestionSection';
import { MisconceptionCompareSection } from './sections/MisconceptionCompareSection';
import { SetStateHero } from './sections/SetStateHero';
import { StateSnapshotSection } from './sections/StateSnapshotSection';
import { VisibleCodeSection } from './sections/VisibleCodeSection';
import { stateUpdateStartContent } from './content';

type Props = { locale: Locale };

export const StateUpdateStartPage = ({ locale }: Props) => {
  const c = stateUpdateStartContent[locale];

  return (
    <StartPageShell>
      <SetStateHero content={c.hero} />
      <VisibleCodeSection content={c.visibleCode} />
      <MisconceptionCompareSection content={c.misconception} />
      <InternalFlowPreviewSection content={c.internalFlow} />
      <StateSnapshotSection content={c.snapshot} />
      <LearningQuestionSection content={c.question} />
      <KeySummaryBanner content={c.summary} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
