import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../getting-started/_shared/StartPageShell';

import { FirstThreeMinutesGuide } from './sections/FirstThreeMinutesGuide';
import { RepoExplorationQuiz } from './sections/RepoExplorationQuiz';
import { RepoNextStepCTA } from './sections/RepoNextStepCTA';
import { RepoOverviewHero } from './sections/RepoOverviewHero';
import { RepoOverwhelmCard } from './sections/RepoOverwhelmCard';
import { RepoRootMiniMap } from './sections/RepoRootMiniMap';
import { RootDirectorySummary } from './sections/RootDirectorySummary';
import { RootFilesSummary } from './sections/RootFilesSummary';
import { repoOverviewContent } from './content';

type Props = { locale: Locale };

const DIRECTORY_SECTION_ID = 'section-directory';

export const RepoOverviewPage = ({ locale }: Props) => {
  const c = repoOverviewContent[locale];

  return (
    <StartPageShell>
      <RepoOverviewHero content={c.hero} nextSectionId={DIRECTORY_SECTION_ID} />
      <RepoOverwhelmCard content={c.overwhelm} />
      <RepoRootMiniMap content={c.miniMap} />
      <RootDirectorySummary content={c.directory} sectionId={DIRECTORY_SECTION_ID} />
      <RootFilesSummary content={c.rootFiles} />
      <FirstThreeMinutesGuide content={c.timeline} />
      <RepoExplorationQuiz content={c.quiz} />
      <RepoNextStepCTA content={c.nextStep} />
    </StartPageShell>
  );
};
