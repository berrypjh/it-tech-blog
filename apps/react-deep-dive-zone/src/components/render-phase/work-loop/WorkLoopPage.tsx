import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../start/_shared/StartPageShell';

import { FiberProcessingTree } from './sections/FiberProcessingTree';
import { NextPerformUnitCTA } from './sections/NextPerformUnitCTA';
import { PerformUnitRepeatFlow } from './sections/PerformUnitRepeatFlow';
import { SyncVsConcurrentTimeline } from './sections/SyncVsConcurrentTimeline';
import { WorkLoopCodeCheckpoint } from './sections/WorkLoopCodeCheckpoint';
import { WorkLoopComparison } from './sections/WorkLoopComparison';
import { WorkLoopHero } from './sections/WorkLoopHero';
import { WorkLoopMiniQuiz } from './sections/WorkLoopMiniQuiz';
import { workLoopContent } from './content';

type Props = { locale: Locale };

export const WorkLoopPage = ({ locale }: Props) => {
  const c = workLoopContent[locale];

  return (
    <StartPageShell>
      <WorkLoopHero content={c.hero} />
      <WorkLoopComparison content={c.comparison} />
      <PerformUnitRepeatFlow content={c.common} />
      <SyncVsConcurrentTimeline content={c.timelines} />
      <WorkLoopCodeCheckpoint content={c.code} />
      <FiberProcessingTree content={c.fiberTree} />
      <WorkLoopMiniQuiz content={c.quiz} />
      <NextPerformUnitCTA content={c.cta} />
    </StartPageShell>
  );
};
