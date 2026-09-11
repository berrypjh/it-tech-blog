import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { ElementFiberComparisonTable } from './sections/ElementFiberComparisonTable';
import { ElementFiberHero } from './sections/ElementFiberHero';
import { ElementToFiberFlow } from './sections/ElementToFiberFlow';
import { PreviousChapterRecap } from './sections/PreviousChapterRecap';
import { WhyFiberNeeded } from './sections/WhyFiberNeeded';
import { elementVsFiberContent } from './content';

type Props = { locale: Locale };

export const ElementVsFiberPage = ({ locale }: Props) => {
  const c = elementVsFiberContent[locale];

  return (
    <StartPageShell>
      <ElementFiberHero content={c.hero} />
      <PreviousChapterRecap content={c.recap} />
      <WhyFiberNeeded content={c.whyFiber} />
      <ElementFiberComparisonTable content={c.comparison} />
      <ElementToFiberFlow content={c.flow} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
