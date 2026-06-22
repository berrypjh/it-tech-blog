import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { ElementFiberComparisonTable } from './sections/ElementFiberComparisonTable';
import { ElementFiberHero } from './sections/ElementFiberHero';
import { ElementToFiberFlow } from './sections/ElementToFiberFlow';
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
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
