import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../getting-started/_shared/StartPageShell';

import { ClickUpdateFlowSection } from './sections/ClickUpdateFlowSection';
import { CodePathMapSection } from './sections/CodePathMapSection';
import { CommonRootSchedulingSection } from './sections/CommonRootSchedulingSection';
import { DeferredUpdateFlowSection } from './sections/DeferredUpdateFlowSection';
import { FinalQuizSection } from './sections/FinalQuizSection';
import { FullFlowNextCTA } from './sections/FullFlowNextCTA';
import { FullFlowQuestionPanel } from './sections/FullFlowQuestionPanel';
import { ReadingChecklistSection } from './sections/ReadingChecklistSection';
import { SchedulerExecutionSection } from './sections/SchedulerExecutionSection';
import { SchedulerFullFlowHero } from './sections/SchedulerFullFlowHero';
import { TransitionUpdateFlowSection } from './sections/TransitionUpdateFlowSection';
import { UpdateScenarioTabs } from './sections/UpdateScenarioTabs';
import { YieldingContinuationSection } from './sections/YieldingContinuationSection';
import { fullFlowContent } from './content';

type Props = { locale: Locale };

export const SchedulerFullFlowReviewPage = ({ locale }: Props) => {
  const c = fullFlowContent[locale];

  return (
    <StartPageShell>
      <SchedulerFullFlowHero content={c.hero} />
      <FullFlowQuestionPanel content={c.question} />
      <UpdateScenarioTabs content={c.scenarios} />
      <ClickUpdateFlowSection content={c.clickFlow} />
      <TransitionUpdateFlowSection content={c.transitionFlow} />
      <DeferredUpdateFlowSection content={c.deferredFlow} />
      <CommonRootSchedulingSection content={c.commonRoot} />
      <SchedulerExecutionSection content={c.schedulerExec} />
      <YieldingContinuationSection content={c.yielding} />
      <CodePathMapSection content={c.codePath} />
      <ReadingChecklistSection content={c.checklist} />
      <FinalQuizSection content={c.quiz} />
      <FullFlowNextCTA content={c.cta} />
    </StartPageShell>
  );
};
