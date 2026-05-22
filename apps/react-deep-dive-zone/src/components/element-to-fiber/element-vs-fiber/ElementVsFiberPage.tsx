import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../start/_shared/StartPageShell';

import { ElementFiberComparisonTable } from './sections/ElementFiberComparisonTable';
import { ElementFiberHero } from './sections/ElementFiberHero';
import { ElementToFiberFlow } from './sections/ElementToFiberFlow';
import { MiniConceptQuiz } from './sections/MiniConceptQuiz';
import { NextStepCTA } from './sections/NextStepCTA';
import { PreviousChapterRecap } from './sections/PreviousChapterRecap';
import { WhyFiberNeeded } from './sections/WhyFiberNeeded';
import { WithoutFiberProblems } from './sections/WithoutFiberProblems';
import { elementVsFiberContent } from './content';

type Props = { locale: Locale };

export const ElementVsFiberPage = ({ locale }: Props) => {
  const c = elementVsFiberContent[locale];

  return (
    <StartPageShell>
      <ElementFiberHero content={c.hero} />
      <PreviousChapterRecap content={c.recap} />
      <ElementFiberComparisonTable content={c.comparison} />
      <WhyFiberNeeded content={c.whyFiber} />
      <ElementToFiberFlow content={c.flow} />
      <WithoutFiberProblems content={c.problems} />
      <MiniConceptQuiz content={c.quiz} />
      <NextStepCTA content={c.next} />
    </StartPageShell>
  );
};
