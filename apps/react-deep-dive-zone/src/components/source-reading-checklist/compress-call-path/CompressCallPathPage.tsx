import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { CompressionRulesSection } from './sections/CompressionRulesSection';
import { FollowAlongMissionSection } from './sections/FollowAlongMissionSection';
import { HeroSection } from './sections/HeroSection';
import { KeySummarySection } from './sections/KeySummarySection';
import { OrderMatchingSection } from './sections/OrderMatchingSection';
import { ReadingNotePanelSection } from './sections/ReadingNotePanelSection';
import { SetStateFlowSection } from './sections/SetStateFlowSection';
import { SuspenseRetryFlowSection } from './sections/SuspenseRetryFlowSection';
import { TodayQuestionSection } from './sections/TodayQuestionSection';
import { UseStateFlowSection } from './sections/UseStateFlowSection';
import { WhyCompressionSection } from './sections/WhyCompressionSection';
import { callPathCompressionContent } from './content';

type Props = { locale: Locale };

export const CompressCallPathPage = ({ locale }: Props) => {
  const c = callPathCompressionContent[locale];

  return (
    <StartPageShell>
      <HeroSection content={c.hero} />
      <TodayQuestionSection content={c.todayQuestion} />
      <WhyCompressionSection content={c.whyCompress} />
      <CompressionRulesSection content={c.rules} />
      <SetStateFlowSection content={c.setStateFlow} />
      <UseStateFlowSection content={c.useStateFlow} />
      <SuspenseRetryFlowSection content={c.suspenseFlow} />
      <OrderMatchingSection content={c.orderMatching} />
      <ReadingNotePanelSection content={c.readingNote} />
      <FollowAlongMissionSection content={c.mission} />
      <KeySummarySection content={c.summary} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
