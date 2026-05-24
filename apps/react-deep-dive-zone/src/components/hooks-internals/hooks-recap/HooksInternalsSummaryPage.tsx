import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../start/_shared/StartPageShell';

import { CoreDataStructures } from './sections/CoreDataStructures';
import { CoreFunctionReview } from './sections/CoreFunctionReview';
import { FinalCTA } from './sections/FinalCTA';
import { FullFlowSummary } from './sections/FullFlowSummary';
import { HooksSummaryHero } from './sections/HooksSummaryHero';
import { IntegratedCounterSimulator } from './sections/IntegratedCounterSimulator';
import { MiniQuiz } from './sections/MiniQuiz';
import { NextLearningPath } from './sections/NextLearningPath';
import { PageConnectionMap } from './sections/PageConnectionMap';
import { PracticalReadingChecklist } from './sections/PracticalReadingChecklist';
import { hooksRecapContent } from './content';

type Props = { locale: Locale };

export const HooksInternalsSummaryPage = ({ locale }: Props) => {
  const c = hooksRecapContent[locale];

  return (
    <StartPageShell>
      <HooksSummaryHero content={c.hero} />
      <FullFlowSummary content={c.fullFlow} />
      <PageConnectionMap content={c.pageMap} />
      <CoreDataStructures content={c.dataStructures} />
      <CoreFunctionReview content={c.functions} />
      <IntegratedCounterSimulator content={c.simulator} />
      <PracticalReadingChecklist content={c.checklist} />
      <MiniQuiz content={c.quiz} />
      <NextLearningPath content={c.nextPath} />
      <FinalCTA content={c.finalCta} />
    </StartPageShell>
  );
};
