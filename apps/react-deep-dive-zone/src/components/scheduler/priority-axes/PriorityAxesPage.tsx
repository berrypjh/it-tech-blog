import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { AxesComparisonTable } from './sections/AxesComparisonTable';
import { AxisChainFlow } from './sections/AxisChainFlow';
import { PriorityAxesCodeCheckpoint } from './sections/PriorityAxesCodeCheckpoint';
import { PriorityAxesHero } from './sections/PriorityAxesHero';
import { ThreeAxesCards } from './sections/ThreeAxesCards';
import { priorityAxesContent } from './content';

type Props = { locale: Locale };

export const PriorityAxesPage = ({ locale }: Props) => {
  const c = priorityAxesContent[locale];

  return (
    <StartPageShell>
      <PriorityAxesHero content={c.hero} />
      <ThreeAxesCards content={c.axes} />
      <AxesComparisonTable content={c.compare} />
      <AxisChainFlow content={c.chain} />
      <PriorityAxesCodeCheckpoint content={c.checkpoint} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
