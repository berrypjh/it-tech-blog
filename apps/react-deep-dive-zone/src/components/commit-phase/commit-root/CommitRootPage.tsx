import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { CommitRootCodeCheckpointSection } from './sections/CommitRootCodeCheckpointSection';
import { CommitRootHeroSection } from './sections/CommitRootHeroSection';
import { CommitRootModernCorrectionSection } from './sections/CommitRootModernCorrectionSection';
import { CommitRootPositionSection } from './sections/CommitRootPositionSection';
import { CommitRootPreparationSection } from './sections/CommitRootPreparationSection';
import { CommitTimelineOverviewSection } from './sections/CommitTimelineOverviewSection';
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
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
