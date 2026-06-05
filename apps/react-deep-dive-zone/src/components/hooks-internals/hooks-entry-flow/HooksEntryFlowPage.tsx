import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/NextStepBanner';
import { StartPageShell } from '../../shared/StartPageShell';

import { CounterQuizSection } from './sections/CounterQuizSection';
import { DispatcherExplanation } from './sections/DispatcherExplanation';
import { FollowCodeMission } from './sections/FollowCodeMission';
import { HookConnectionTabs } from './sections/HookConnectionTabs';
import { HookFlowOverview } from './sections/HookFlowOverview';
import { HooksEntryHero } from './sections/HooksEntryHero';
import { KeyTakeaways } from './sections/KeyTakeaways';
import { PublicUseStateCodePreview } from './sections/PublicUseStateCodePreview';
import { TodayQuestionCard } from './sections/TodayQuestionCard';
import { hooksEntryFlowContent } from './content';

type Props = { locale: Locale };

export const HooksEntryFlowPage = ({ locale }: Props) => {
  const c = hooksEntryFlowContent[locale];

  return (
    <StartPageShell>
      <HooksEntryHero content={c.hero} />
      <TodayQuestionCard content={c.question} />
      <CounterQuizSection content={c.quiz} />
      <HookFlowOverview content={c.overview} />
      <PublicUseStateCodePreview content={c.realCode} />
      <DispatcherExplanation content={c.dispatcher} />
      <HookConnectionTabs content={c.tabs} />
      <FollowCodeMission content={c.mission} />
      <KeyTakeaways content={c.summary} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
