import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { FunctionClassExampleComparison } from './sections/FunctionClassExampleComparison';
import { FunctionClassHero } from './sections/FunctionClassHero';
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
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
