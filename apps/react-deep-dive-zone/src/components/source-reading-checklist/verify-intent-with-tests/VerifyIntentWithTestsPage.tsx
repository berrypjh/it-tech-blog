import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../shared/StartPageShell';

import { FollowAlongMissionSection } from './sections/FollowAlongMissionSection';
import { HeroSection } from './sections/HeroSection';
import { KeySummarySection } from './sections/KeySummarySection';
import { NextCTASection } from './sections/NextCTASection';
import { RecommendedFilesSection } from './sections/RecommendedFilesSection';
import { TestDirectoryMapSection } from './sections/TestDirectoryMapSection';
import { TestExplorerSection } from './sections/TestExplorerSection';
import { TodayQuestionSection } from './sections/TodayQuestionSection';
import { TraceSection } from './sections/TraceSection';
import { WhatTestsRevealSection } from './sections/WhatTestsRevealSection';
import { WhyImplementationSection } from './sections/WhyImplementationSection';
import { testAsDocContent } from './content';

type Props = { locale: Locale };

export const VerifyIntentWithTestsPage = ({ locale }: Props) => {
  const c = testAsDocContent[locale];

  return (
    <StartPageShell>
      <HeroSection content={c.hero} />
      <TodayQuestionSection content={c.todayQuestion} />
      <WhyImplementationSection content={c.whyImplementation} />
      <WhatTestsRevealSection content={c.whatTestsReveal} />
      <TestDirectoryMapSection content={c.testDirectoryMap} />
      <RecommendedFilesSection content={c.recommendedFiles} />
      <TraceSection content={c.trace} />
      <TestExplorerSection content={c.explorer} />
      <FollowAlongMissionSection content={c.mission} />
      <KeySummarySection content={c.summary} />
      <NextCTASection content={c.nextCta} />
    </StartPageShell>
  );
};
