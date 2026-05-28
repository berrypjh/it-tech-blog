import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../shared/StartPageShell';

import { CommitRootCodeCheckpointSection } from './sections/CommitRootCodeCheckpointSection';
import { CommitRootHeroSection } from './sections/CommitRootHeroSection';
import { CommitRootModernCorrectionSection } from './sections/CommitRootModernCorrectionSection';
import { CommitRootPositionSection } from './sections/CommitRootPositionSection';
import { CommitRootPreparationSection } from './sections/CommitRootPreparationSection';
import { CommitTimelineOverviewSection } from './sections/CommitTimelineOverviewSection';
import { NextBeforeMutationCTA } from './sections/NextBeforeMutationCTA';
import { RenderToCommitFlowSection } from './sections/RenderToCommitFlowSection';
import { RootCommitMeaningSection } from './sections/RootCommitMeaningSection';
import { commitRootContent } from './content';

type Props = { locale: Locale };

export const CommitRootPage = ({ locale }: Props) => {
  const c = commitRootContent[locale];

  return (
    <StartPageShell>
      <CommitRootHeroSection content={c.hero} />
      <RenderToCommitFlowSection content={c.renderToCommit} />
      <CommitRootPositionSection content={c.position} />
      <CommitRootPreparationSection content={c.preparation} />
      <CommitTimelineOverviewSection content={c.timeline} />
      <CommitRootCodeCheckpointSection content={c.checkpoint} />
      <RootCommitMeaningSection content={c.rootMeaning} />
      <CommitRootModernCorrectionSection content={c.modern} />
      <NextBeforeMutationCTA content={c.cta} />
    </StartPageShell>
  );
};
