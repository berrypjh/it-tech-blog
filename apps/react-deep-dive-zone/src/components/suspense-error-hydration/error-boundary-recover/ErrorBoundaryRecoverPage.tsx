import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../shared/StartPageShell';

import { BoundarySearchSection } from './sections/BoundarySearchSection';
import { CaptureFlowSection } from './sections/CaptureFlowSection';
import { ChildThrowSection } from './sections/ChildThrowSection';
import { CodePreviewSection } from './sections/CodePreviewSection';
import { ErrorPathSection } from './sections/ErrorPathSection';
import { FallbackRerenderSection } from './sections/FallbackRerenderSection';
import { FollowAlongSection } from './sections/FollowAlongSection';
import { HeroSection } from './sections/HeroSection';
import { NextCTA } from './sections/NextCTA';
import { QuestionSection } from './sections/QuestionSection';
import { RecoverySimulator } from './sections/RecoverySimulator';
import { TakeawaysSection } from './sections/TakeawaysSection';
import { UserCodeSection } from './sections/UserCodeSection';
import { errorBoundaryRecoverContent } from './content';

type Props = { locale: Locale };

export const ErrorBoundaryRecoverPage = ({ locale }: Props) => {
  const c = errorBoundaryRecoverContent[locale];

  return (
    <StartPageShell>
      <HeroSection content={c.hero} />
      <QuestionSection content={c.question} />
      <UserCodeSection content={c.userCode} />
      <ChildThrowSection content={c.childThrow} />
      <ErrorPathSection content={c.errorPath} />
      <BoundarySearchSection content={c.search} />
      <CaptureFlowSection content={c.capture} />
      <FallbackRerenderSection content={c.fallback} />
      <CodePreviewSection content={c.code} />
      <RecoverySimulator content={c.simulator} />
      <FollowAlongSection content={c.followAlong} />
      <TakeawaysSection content={c.takeaways} />
      <NextCTA content={c.cta} />
    </StartPageShell>
  );
};
