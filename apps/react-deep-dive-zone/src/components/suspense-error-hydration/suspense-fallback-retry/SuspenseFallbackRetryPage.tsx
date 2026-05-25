import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../getting-started/_shared/StartPageShell';

import { BoundarySearchSection } from './sections/BoundarySearchSection';
import { CaptureFallbackSection } from './sections/CaptureFallbackSection';
import { CodePreviewSection } from './sections/CodePreviewSection';
import { FollowAlongSection } from './sections/FollowAlongSection';
import { HeroSection } from './sections/HeroSection';
import { NextCTA } from './sections/NextCTA';
import { PendingFlowSection } from './sections/PendingFlowSection';
import { QuestionSection } from './sections/QuestionSection';
import { RetryQueueFlowSection } from './sections/RetryQueueFlowSection';
import { RetrySimulator } from './sections/RetrySimulator';
import { TakeawaysSection } from './sections/TakeawaysSection';
import { UserCodeSection } from './sections/UserCodeSection';
import { suspenseFallbackRetryContent } from './content';

type Props = { locale: Locale };

export const SuspenseFallbackRetryPage = ({ locale }: Props) => {
  const c = suspenseFallbackRetryContent[locale];

  return (
    <StartPageShell>
      <HeroSection content={c.hero} />
      <QuestionSection content={c.question} />
      <UserCodeSection content={c.userCode} />
      <PendingFlowSection content={c.pending} />
      <BoundarySearchSection content={c.search} />
      <CaptureFallbackSection content={c.capture} />
      <RetryQueueFlowSection content={c.retryQueue} />
      <CodePreviewSection content={c.code} />
      <RetrySimulator content={c.simulator} />
      <FollowAlongSection content={c.followAlong} />
      <TakeawaysSection content={c.takeaways} />
      <NextCTA content={c.cta} />
    </StartPageShell>
  );
};
