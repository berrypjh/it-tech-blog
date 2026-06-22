import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { FiberPropsMeaningFlow } from './sections/FiberPropsMeaningFlow';
import { PendingMemoizedCompare } from './sections/PendingMemoizedCompare';
import { PropsChangeScenario } from './sections/PropsChangeScenario';
import { PropsCodeCheckpoint } from './sections/PropsCodeCheckpoint';
import { PropsComparisonHero } from './sections/PropsComparisonHero';
import { PropsMiniQuiz } from './sections/PropsMiniQuiz';
import { WhyComparePropsSection } from './sections/WhyComparePropsSection';
import { fiberPropsContent } from './content';

type Props = { locale: Locale };

export const FiberPropsComparisonPage = ({ locale }: Props) => {
  const c = fiberPropsContent[locale];

  return (
    <StartPageShell>
      <PropsComparisonHero content={c.hero} />
      <PendingMemoizedCompare content={c.comparison} />
      <PropsChangeScenario content={c.scenario} />
      <FiberPropsMeaningFlow content={c.meaning} />
      <PropsCodeCheckpoint content={c.checkpoint} />
      <WhyComparePropsSection content={c.reasons} />
      <PropsMiniQuiz content={c.quiz} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
