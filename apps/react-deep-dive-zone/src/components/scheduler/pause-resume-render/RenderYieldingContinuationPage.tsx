import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../getting-started/_shared/StartPageShell';

import { ContinuationResumeSection } from './sections/ContinuationResumeSection';
import { DeadlineFrameIntervalSection } from './sections/DeadlineFrameIntervalSection';
import { LongRenderProblem } from './sections/LongRenderProblem';
import { RenderYieldingCodePreview } from './sections/RenderYieldingCodePreview';
import { RenderYieldingHero } from './sections/RenderYieldingHero';
import { RenderYieldingKeyTakeaways } from './sections/RenderYieldingKeyTakeaways';
import { RenderYieldingMission } from './sections/RenderYieldingMission';
import { RenderYieldingNextCTA } from './sections/RenderYieldingNextCTA';
import { RenderYieldingQuestionPanel } from './sections/RenderYieldingQuestionPanel';
import { SchedulerWorkLoopFlow } from './sections/SchedulerWorkLoopFlow';
import { ShouldYieldToHostSection } from './sections/ShouldYieldToHostSection';
import { YieldConditionSection } from './sections/YieldConditionSection';
import { YieldContinuationSimulator } from './sections/YieldContinuationSimulator';
import { renderYieldingContent } from './content';

type Props = { locale: Locale };

export const RenderYieldingContinuationPage = ({ locale }: Props) => {
  const c = renderYieldingContent[locale];

  return (
    <StartPageShell>
      <RenderYieldingHero content={c.hero} />
      <RenderYieldingQuestionPanel content={c.question} />
      <LongRenderProblem content={c.problem} />
      <SchedulerWorkLoopFlow content={c.workLoop} />
      <ShouldYieldToHostSection content={c.shouldYield} />
      <DeadlineFrameIntervalSection content={c.deadline} />
      <YieldConditionSection content={c.yieldMoment} />
      <ContinuationResumeSection content={c.continuation} />
      <RenderYieldingCodePreview content={c.code} />
      <YieldContinuationSimulator content={c.simulator} />
      <RenderYieldingMission content={c.mission} />
      <RenderYieldingKeyTakeaways content={c.takeaways} />
      <RenderYieldingNextCTA content={c.cta} />
    </StartPageShell>
  );
};
