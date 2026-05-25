import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../getting-started/_shared/StartPageShell';

import { FollowAlongMission } from './sections/FollowAlongMission';
import { InternalCodePreviewSection } from './sections/InternalCodePreviewSection';
import { KeyTakeaways } from './sections/KeyTakeaways';
import { NextPageCTA } from './sections/NextPageCTA';
import { PromiseStateFlow } from './sections/PromiseStateFlow';
import { RejectedPromiseErrorBoundaryFlow } from './sections/RejectedPromiseErrorBoundaryFlow';
import { ThenableTrackingSection } from './sections/ThenableTrackingSection';
import { TodayQuestionCard } from './sections/TodayQuestionCard';
import { UseHero } from './sections/UseHero';
import { UsePromiseSuspenseSection } from './sections/UsePromiseSuspenseSection';
import { UseReadableResourcesSection } from './sections/UseReadableResourcesSection';
import { UseStateBoard } from './sections/UseStateBoard';
import { UseVsHooksComparisonTable } from './sections/UseVsHooksComparisonTable';
import { useSuspenseErrorModelContent } from './content';

type Props = { locale: Locale };

export const UseSuspenseErrorModelPage = ({ locale }: Props) => {
  const c = useSuspenseErrorModelContent[locale];

  return (
    <StartPageShell>
      <UseHero content={c.hero} />
      <TodayQuestionCard content={c.question} />
      <UseReadableResourcesSection content={c.readable} />
      <UseVsHooksComparisonTable content={c.comparison} />
      <PromiseStateFlow content={c.promiseFlow} />
      <UsePromiseSuspenseSection content={c.suspenseConnection} />
      <RejectedPromiseErrorBoundaryFlow content={c.rejectedFlow} />
      <ThenableTrackingSection content={c.thenableTracking} />
      <InternalCodePreviewSection content={c.internalCode} />
      <UseStateBoard content={c.stateBoard} />
      <FollowAlongMission content={c.mission} />
      <KeyTakeaways content={c.takeaways} />
      <NextPageCTA content={c.nextCTA} />
    </StartPageShell>
  );
};
