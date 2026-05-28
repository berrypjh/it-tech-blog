import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../shared/StartPageShell';

import { FunctionClassExampleComparison } from './sections/FunctionClassExampleComparison';
import { FunctionClassHero } from './sections/FunctionClassHero';
import { FunctionClassMiniQuiz } from './sections/FunctionClassMiniQuiz';
import { NextStepCTA } from './sections/NextStepCTA';
import { QuickChecklist } from './sections/QuickChecklist';
import { ShouldConstructExplanation } from './sections/ShouldConstructExplanation';
import { SourceCodeCheckpoint } from './sections/SourceCodeCheckpoint';
import { WhyFiberTagsDiffer } from './sections/WhyFiberTagsDiffer';
import { WorkTagCards } from './sections/WorkTagCards';
import { functionClassComponentFiberContent } from './content';

type Props = { locale: Locale };

export const FunctionClassComponentFiberPage = ({ locale }: Props) => {
  const c = functionClassComponentFiberContent[locale];

  return (
    <StartPageShell>
      <FunctionClassHero content={c.hero} />
      <FunctionClassExampleComparison content={c.compare} />
      <ShouldConstructExplanation content={c.shouldConstruct} />
      <SourceCodeCheckpoint content={c.checkpoint} />
      <WorkTagCards content={c.workTags} />
      <WhyFiberTagsDiffer content={c.reasons} />
      <FunctionClassMiniQuiz content={c.quiz} />
      <QuickChecklist content={c.checklist} />
      <NextStepCTA content={c.next} />
    </StartPageShell>
  );
};
