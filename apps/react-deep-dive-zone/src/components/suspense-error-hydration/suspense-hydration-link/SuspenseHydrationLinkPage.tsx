import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/NextStepBanner';
import { StartPageShell } from '../../shared/StartPageShell';

import { BoundaryHydrationFlowSection } from './sections/BoundaryHydrationFlowSection';
import { ClaimSuspenseSection } from './sections/ClaimSuspenseSection';
import { CodePreviewSection } from './sections/CodePreviewSection';
import { FallbackHtmlSection } from './sections/FallbackHtmlSection';
import { FollowAlongSection } from './sections/FollowAlongSection';
import { ForceClientRenderFlowSection } from './sections/ForceClientRenderFlowSection';
import { HeroSection } from './sections/HeroSection';
import { InteractiveTimelineSection } from './sections/InteractiveTimelineSection';
import { QuestionSection } from './sections/QuestionSection';
import { ServerSuspendErrorSection } from './sections/ServerSuspendErrorSection';
import { TakeawaysSection } from './sections/TakeawaysSection';
import { TimelineSection } from './sections/TimelineSection';
import { suspenseHydrationLinkContent } from './content';

type Props = { locale: Locale };

export const SuspenseHydrationLinkPage = ({ locale }: Props) => {
  const c = suspenseHydrationLinkContent[locale];

  return (
    <StartPageShell>
      <HeroSection content={c.hero} />
      <QuestionSection content={c.question} />
      <ServerSuspendErrorSection content={c.serverPaths} />
      <FallbackHtmlSection content={c.fallbackHtml} />
      <BoundaryHydrationFlowSection content={c.boundaryHydrationFlow} />
      <ClaimSuspenseSection content={c.claim} />
      <ForceClientRenderFlowSection content={c.forceClientRender} />
      <TimelineSection content={c.timeline} />
      <CodePreviewSection content={c.code} />
      <InteractiveTimelineSection content={c.interactive} />
      <FollowAlongSection content={c.followAlong} />
      <TakeawaysSection content={c.takeaways} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
