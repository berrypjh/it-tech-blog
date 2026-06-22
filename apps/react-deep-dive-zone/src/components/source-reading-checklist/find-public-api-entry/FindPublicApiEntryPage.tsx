import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { BridgeToFiberHooksSection } from './sections/BridgeToFiberHooksSection';
import { FollowAlongMissionSection } from './sections/FollowAlongMissionSection';
import { HeroSection } from './sections/HeroSection';
import { KeySummarySection } from './sections/KeySummarySection';
import { PublicApiCallGraphSection } from './sections/PublicApiCallGraphSection';
import { ResolveDispatcherSection } from './sections/ResolveDispatcherSection';
import { SamePatternAcrossApisSection } from './sections/SamePatternAcrossApisSection';
import { TodayQuestionSection } from './sections/TodayQuestionSection';
import { UseStateEntrySection } from './sections/UseStateEntrySection';
import { WhyApiFileNotShowSection } from './sections/WhyApiFileNotShowSection';
import { findPublicApiEntryContent } from './content';

type Props = { locale: Locale };

export const FindPublicApiEntryPage = ({ locale }: Props) => {
  const c = findPublicApiEntryContent[locale];

  return (
    <StartPageShell>
      <HeroSection content={c.hero} />
      <TodayQuestionSection content={c.todayQuestion} />
      <WhyApiFileNotShowSection content={c.whyApiFile} />
      <UseStateEntrySection content={c.useStateEntry} />
      <ResolveDispatcherSection content={c.resolveDispatcher} />
      <BridgeToFiberHooksSection content={c.bridge} />
      <SamePatternAcrossApisSection content={c.apiPatterns} />
      <PublicApiCallGraphSection content={c.callGraph} />
      <FollowAlongMissionSection content={c.mission} />
      <KeySummarySection content={c.summary} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
