import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../getting-started/_shared/StartPageShell';

import { AdvancedWrapupHero } from './sections/AdvancedWrapupHero';
import { ComprehensiveComparisonTable } from './sections/ComprehensiveComparisonTable';
import { EventPriorityReconnect } from './sections/EventPriorityReconnect';
import { FinalCTA } from './sections/FinalCTA';
import { FollowAlongMission } from './sections/FollowAlongMission';
import { FormActionSubmitFlow } from './sections/FormActionSubmitFlow';
import { FullEventFlowReview } from './sections/FullEventFlowReview';
import { HydrationBlockedEvent } from './sections/HydrationBlockedEvent';
import { React19ExpansionMap } from './sections/React19ExpansionMap';
import { RealCodePreview } from './sections/RealCodePreview';
import { ReplayQueueConcept } from './sections/ReplayQueueConcept';
import { TodayQuestionBanner } from './sections/TodayQuestionBanner';
import { WholeChapterTakeaways } from './sections/WholeChapterTakeaways';
import { advancedWrapupContent } from './content';

type Props = { locale: Locale };

export const EventSystemAdvancedWrapupPage = ({ locale }: Props) => {
  const c = advancedWrapupContent[locale];

  return (
    <StartPageShell>
      <AdvancedWrapupHero content={c.hero} />
      <TodayQuestionBanner content={c.question} />
      <FullEventFlowReview content={c.review} />
      <EventPriorityReconnect content={c.priority} />
      <HydrationBlockedEvent content={c.hydration} />
      <ReplayQueueConcept content={c.replay} />
      <FormActionSubmitFlow content={c.formAction} />
      <React19ExpansionMap content={c.expansionMap} />
      <ComprehensiveComparisonTable content={c.comparison} />
      <RealCodePreview content={c.realCode} />
      <FollowAlongMission content={c.mission} />
      <WholeChapterTakeaways content={c.takeaways} />
      <FinalCTA content={c.finalCta} />
    </StartPageShell>
  );
};
