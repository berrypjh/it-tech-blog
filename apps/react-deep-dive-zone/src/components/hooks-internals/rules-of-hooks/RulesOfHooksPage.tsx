import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../getting-started/_shared/StartPageShell';

import { CorrectHookOrder } from './sections/CorrectHookOrder';
import { DevWarningConnection } from './sections/DevWarningConnection';
import { FollowCodeMission } from './sections/FollowCodeMission';
import { HookMatchingComparisonTable } from './sections/HookMatchingComparisonTable';
import { HookOrderBreakExperiment } from './sections/HookOrderBreakExperiment';
import { KeyTakeaways } from './sections/KeyTakeaways';
import { MemorizationVsStructure } from './sections/MemorizationVsStructure';
import { NextPageCTA } from './sections/NextPageCTA';
import { RealCodeCheck } from './sections/RealCodeCheck';
import { RulesOfHooksHero } from './sections/RulesOfHooksHero';
import { TodayQuestionCard } from './sections/TodayQuestionCard';
import { WrongHookOrder } from './sections/WrongHookOrder';
import { rulesOfHooksContent } from './content';

type Props = { locale: Locale };

export const RulesOfHooksPage = ({ locale }: Props) => {
  const c = rulesOfHooksContent[locale];

  return (
    <StartPageShell>
      <RulesOfHooksHero content={c.hero} />
      <TodayQuestionCard content={c.question} />
      <MemorizationVsStructure content={c.memorization} />
      <CorrectHookOrder content={c.correctOrder} />
      <WrongHookOrder content={c.wrongOrder} />
      <HookMatchingComparisonTable content={c.matchingTable} />
      <DevWarningConnection content={c.devWarning} />
      <HookOrderBreakExperiment content={c.breakExperiment} />
      <RealCodeCheck content={c.realCode} />
      <FollowCodeMission content={c.mission} />
      <KeyTakeaways content={c.summary} />
      <NextPageCTA content={c.cta} />
    </StartPageShell>
  );
};
