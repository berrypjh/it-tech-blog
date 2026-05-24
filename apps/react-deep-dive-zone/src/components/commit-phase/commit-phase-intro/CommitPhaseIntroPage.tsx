import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../start/_shared/StartPageShell';

import { CommitFlagsSection } from './sections/CommitFlagsSection';
import { CommitKeySummarySection } from './sections/CommitKeySummarySection';
import { CommitMiniQuizSection } from './sections/CommitMiniQuizSection';
import { CommitPhaseHero } from './sections/CommitPhaseHero';
import { CommitPhaseMapSection } from './sections/CommitPhaseMapSection';
import { CommitWorkItemsSection } from './sections/CommitWorkItemsSection';
import { NextCommitRootCTA } from './sections/NextCommitRootCTA';
import { PhaseComparisonTableSection } from './sections/PhaseComparisonTableSection';
import { PreviousChapterConnection } from './sections/PreviousChapterConnection';
import { commitPhaseIntroContent } from './content';

type Props = { locale: Locale };

export const CommitPhaseIntroPage = ({ locale }: Props) => {
  const c = commitPhaseIntroContent[locale];

  return (
    <StartPageShell>
      <CommitPhaseHero content={c.hero} />
      <PreviousChapterConnection content={c.previous} />
      <PhaseComparisonTableSection content={c.comparison} />
      <CommitWorkItemsSection content={c.work} />
      <CommitPhaseMapSection content={c.map} />
      <CommitFlagsSection content={c.flags} />
      <CommitKeySummarySection content={c.summary} />
      <CommitMiniQuizSection content={c.quiz} />
      <NextCommitRootCTA content={c.cta} />
    </StartPageShell>
  );
};
