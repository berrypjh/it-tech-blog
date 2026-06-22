import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { ApiToImplementationToTestFlow } from './sections/ApiToImplementationToTestFlow';
import { GitHubLearningHero } from './sections/GitHubLearningHero';
import { GitHubLearningRoutine } from './sections/GitHubLearningRoutine';
import { GitHubPerspectiveCards } from './sections/GitHubPerspectiveCards';
import { ReactGitHubReadingList } from './sections/ReactGitHubReadingList';
import { RepositoryStructureExplorer } from './sections/RepositoryStructureExplorer';
import { whyOpenSourceContent } from './content';

type Props = { locale: Locale };

export const WhyOpenSourceLearningPage = ({ locale }: Props) => {
  const c = whyOpenSourceContent[locale];

  return (
    <StartPageShell>
      <GitHubLearningHero content={c.hero} />
      <GitHubPerspectiveCards content={c.perspectives} />
      <ReactGitHubReadingList content={c.readingPriorities} />
      <RepositoryStructureExplorer content={c.repoExplorer} />
      <ApiToImplementationToTestFlow content={c.chain} />
      <GitHubLearningRoutine content={c.routine} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
