import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../getting-started/_shared/StartPageShell';

import { ActivityHero } from './sections/ActivityHero';
import { ActivityModeSimulator } from './sections/ActivityModeSimulator';
import { ConditionalVsActivityCompare } from './sections/ConditionalVsActivityCompare';
import { FollowAlongMission } from './sections/FollowAlongMission';
import { HiddenBehaviorCards } from './sections/HiddenBehaviorCards';
import { KeyTakeaways } from './sections/KeyTakeaways';
import { LowPriorityUpdateFlow } from './sections/LowPriorityUpdateFlow';
import { NextPageCTA } from './sections/NextPageCTA';
import { OffscreenConnectionSection } from './sections/OffscreenConnectionSection';
import { SourceCodePreview } from './sections/SourceCodePreview';
import { StatePreservationTimeline } from './sections/StatePreservationTimeline';
import { TodayQuestionCard } from './sections/TodayQuestionCard';
import { VisibleHiddenModeTable } from './sections/VisibleHiddenModeTable';
import { activityHiddenUiContent } from './content';

type Props = { locale: Locale };

export const ActivityHiddenUiPage = ({ locale }: Props) => {
  const c = activityHiddenUiContent[locale];

  return (
    <StartPageShell>
      <ActivityHero content={c.hero} />
      <TodayQuestionCard content={c.question} />
      <ConditionalVsActivityCompare content={c.comparison} />
      <VisibleHiddenModeTable content={c.modeTable} />
      <HiddenBehaviorCards content={c.hiddenBehavior} />
      <StatePreservationTimeline content={c.statePreservation} />
      <LowPriorityUpdateFlow content={c.priorityFlow} />
      <OffscreenConnectionSection content={c.offscreen} />
      <SourceCodePreview content={c.sourceCode} />
      <ActivityModeSimulator content={c.simulator} />
      <FollowAlongMission content={c.mission} />
      <KeyTakeaways content={c.takeaways} />
      <NextPageCTA content={c.nextCTA} />
    </StartPageShell>
  );
};
