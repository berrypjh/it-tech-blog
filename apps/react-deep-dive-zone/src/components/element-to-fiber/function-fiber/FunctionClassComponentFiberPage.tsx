import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/NextStepBanner';
import { StartPageShell } from '../../shared/StartPageShell';

import { FunctionClassExampleComparison } from './sections/FunctionClassExampleComparison';
import { FunctionClassHero } from './sections/FunctionClassHero';
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
      <QuickChecklist content={c.checklist} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
