import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../shared/StartPageShell';

import { CorePackageMapSection } from './sections/CorePackageMapSection';
import { CrossPackageExamplesSection } from './sections/CrossPackageExamplesSection';
import { FollowAlongMissionSection } from './sections/FollowAlongMissionSection';
import { HeroSection } from './sections/HeroSection';
import { KeySummarySection } from './sections/KeySummarySection';
import { NextCTASection } from './sections/NextCTASection';
import { PackageBoundaryPracticeSection } from './sections/PackageBoundaryPracticeSection';
import { PackageNavigatorSection } from './sections/PackageNavigatorSection';
import { PickFirstPackageSection } from './sections/PickFirstPackageSection';
import { TodayQuestionSection } from './sections/TodayQuestionSection';
import { WhyPackageFirstSection } from './sections/WhyPackageFirstSection';
import { followPackageBoundaryContent } from './content';

type Props = { locale: Locale };

export const FollowPackageBoundaryPage = ({ locale }: Props) => {
  const c = followPackageBoundaryContent[locale];

  return (
    <StartPageShell>
      <HeroSection content={c.hero} />
      <TodayQuestionSection content={c.todayQuestion} />
      <WhyPackageFirstSection content={c.whyPackageFirst} />
      <CorePackageMapSection content={c.coreMap} />
      <PickFirstPackageSection content={c.pickFirst} />
      <CrossPackageExamplesSection content={c.crossPackage} />
      <PackageBoundaryPracticeSection content={c.practice} />
      <PackageNavigatorSection content={c.navigator} />
      <FollowAlongMissionSection content={c.mission} />
      <KeySummarySection content={c.summary} />
      <NextCTASection content={c.nextCta} />
    </StartPageShell>
  );
};
