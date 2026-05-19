import type { Locale } from '@it-tech-blog/preferences';

import { ApiToImplementationToTestFlow } from './sections/ApiToImplementationToTestFlow';
import { GitHubLearningHero } from './sections/GitHubLearningHero';
import { GitHubLearningRoutine } from './sections/GitHubLearningRoutine';
import { GitHubPerspectiveCards } from './sections/GitHubPerspectiveCards';
import { NextPageBanner } from './sections/NextPageBanner';
import { QuickStartResourceCards } from './sections/QuickStartResourceCards';
import { ReactGitHubReadingList } from './sections/ReactGitHubReadingList';
import { RepositoryStructureExplorer } from './sections/RepositoryStructureExplorer';
import { whyOpenSourceContent } from './content';

type Props = { locale: Locale };

export const WhyOpenSourceLearningPage = ({ locale }: Props) => {
  const c = whyOpenSourceContent[locale];

  return (
    <article className="mx-auto w-full max-w-[1200px] px-lg sm:px-xl lg:px-2xl py-xl lg:py-2xl">
      <div className="flex flex-col gap-xl lg:gap-2xl">
        <GitHubLearningHero content={c.hero} />
        <GitHubPerspectiveCards content={c.perspectives} />
        <ReactGitHubReadingList content={c.readingPriorities} />
        <RepositoryStructureExplorer content={c.repoExplorer} />
        <ApiToImplementationToTestFlow content={c.chain} />
        <GitHubLearningRoutine content={c.routine} />
        <QuickStartResourceCards content={c.quickStart} />
        <NextPageBanner content={c.nextStep} />
      </div>
    </article>
  );
};
