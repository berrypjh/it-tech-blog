import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/NextStepBanner';
import { StartPageShell } from '../../shared/StartPageShell';

import { CollectionExecutionSeparation } from './sections/CollectionExecutionSeparation';
import { CurrentTargetInjection } from './sections/CurrentTargetInjection';
import { DispatchQueueHero } from './sections/DispatchQueueHero';
import { DispatchQueueStructure } from './sections/DispatchQueueStructure';
import { FollowAlongMission } from './sections/FollowAlongMission';
import { KeyTakeaways } from './sections/KeyTakeaways';
import { PhaseExecutionOrder } from './sections/PhaseExecutionOrder';
import { ProcessDispatchQueueFlow } from './sections/ProcessDispatchQueueFlow';
import { PropagationTimeline } from './sections/PropagationTimeline';
import { RealCodePreview } from './sections/RealCodePreview';
import { StopPropagationBreakpoint } from './sections/StopPropagationBreakpoint';
import { TodayQuestionBanner } from './sections/TodayQuestionBanner';
import { dispatchQueueOrderContent } from './content';

type Props = { locale: Locale };

export const DispatchQueueOrderPage = ({ locale }: Props) => {
  const c = dispatchQueueOrderContent[locale];

  return (
    <StartPageShell>
      <DispatchQueueHero content={c.hero} />
      <TodayQuestionBanner content={c.question} />
      <CollectionExecutionSeparation content={c.separation} />
      <DispatchQueueStructure content={c.structure} />
      <ProcessDispatchQueueFlow content={c.flow} />
      <PhaseExecutionOrder content={c.phases} />
      <StopPropagationBreakpoint content={c.stop} />
      <CurrentTargetInjection content={c.currentTarget} />
      <RealCodePreview content={c.realCode} />
      <PropagationTimeline content={c.timeline} />
      <FollowAlongMission content={c.mission} />
      <KeyTakeaways content={c.takeaways} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
