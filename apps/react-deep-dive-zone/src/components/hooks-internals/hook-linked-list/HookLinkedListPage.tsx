import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../shared/StartPageShell';

import { FiberStructureBreakdown } from './sections/FiberStructureBreakdown';
import { FollowCodeMission } from './sections/FollowCodeMission';
import { HookConnectionProcess } from './sections/HookConnectionProcess';
import { HookLinkedListHero } from './sections/HookLinkedListHero';
import { HookObjectStructure } from './sections/HookObjectStructure';
import { KeyTakeaways } from './sections/KeyTakeaways';
import { MountWorkInProgressHookPreview } from './sections/MountWorkInProgressHookPreview';
import { MultipleHooksRepresentation } from './sections/MultipleHooksRepresentation';
import { NextPageCTA } from './sections/NextPageCTA';
import { TodayQuestionCard } from './sections/TodayQuestionCard';
import { WhyHookOrderMatters } from './sections/WhyHookOrderMatters';
import { hookLinkedListContent } from './content';

type Props = { locale: Locale };

export const HookLinkedListPage = ({ locale }: Props) => {
  const c = hookLinkedListContent[locale];

  return (
    <StartPageShell>
      <HookLinkedListHero content={c.hero} />
      <TodayQuestionCard content={c.question} />
      <FiberStructureBreakdown content={c.breakdown} />
      <HookObjectStructure content={c.objectStructure} />
      <HookConnectionProcess content={c.connection} />
      <MountWorkInProgressHookPreview content={c.mountPreview} />
      <MultipleHooksRepresentation content={c.multipleHooks} />
      <WhyHookOrderMatters content={c.whyOrder} />
      <FollowCodeMission content={c.mission} />
      <KeyTakeaways content={c.summary} />
      <NextPageCTA content={c.cta} />
    </StartPageShell>
  );
};
