import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../shared/StartPageShell';

import { ChecklistSection } from './sections/ChecklistSection';
import { CodePathMapSection } from './sections/CodePathMapSection';
import { CompletionCTA } from './sections/CompletionCTA';
import { ConceptMapSection } from './sections/ConceptMapSection';
import { FinalQuizSection } from './sections/FinalQuizSection';
import { HeroSection } from './sections/HeroSection';
import { HydrationMismatchScenarioSection } from './sections/HydrationMismatchScenarioSection';
import { PendingScenarioSection } from './sections/PendingScenarioSection';
import { QuestionSection } from './sections/QuestionSection';
import { RejectedScenarioSection } from './sections/RejectedScenarioSection';
import { RenderErrorScenarioSection } from './sections/RenderErrorScenarioSection';
import { ServerFallbackTimelineSection } from './sections/ServerFallbackTimelineSection';
import { recoveryModelOverviewContent } from './content';

type Props = { locale: Locale };

export const RecoveryModelOverviewPage = ({ locale }: Props) => {
  const c = recoveryModelOverviewContent[locale];

  return (
    <StartPageShell>
      <HeroSection content={c.hero} />
      <QuestionSection content={c.question} />
      <ConceptMapSection content={c.conceptMap} />
      <PendingScenarioSection content={c.pending} />
      <RejectedScenarioSection content={c.rejected} />
      <RenderErrorScenarioSection content={c.renderError} />
      <HydrationMismatchScenarioSection content={c.hydrationMismatch} />
      <ServerFallbackTimelineSection content={c.serverFallback} />
      <CodePathMapSection content={c.codePathMap} />
      <ChecklistSection content={c.checklist} />
      <FinalQuizSection content={c.quiz} />
      <CompletionCTA content={c.cta} />
    </StartPageShell>
  );
};
