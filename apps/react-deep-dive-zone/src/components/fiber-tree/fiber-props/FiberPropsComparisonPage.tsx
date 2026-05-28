import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../shared/StartPageShell';

import { FiberPropsMeaningFlow } from './sections/FiberPropsMeaningFlow';
import { PendingMemoizedCompare } from './sections/PendingMemoizedCompare';
import { PropsChangeScenario } from './sections/PropsChangeScenario';
import { PropsCodeCheckpoint } from './sections/PropsCodeCheckpoint';
import { PropsComparisonHero } from './sections/PropsComparisonHero';
import { PropsMiniQuiz } from './sections/PropsMiniQuiz';
import { PropsNextCTA } from './sections/PropsNextCTA';
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
      <PropsNextCTA content={c.next} />
    </StartPageShell>
  );
};
