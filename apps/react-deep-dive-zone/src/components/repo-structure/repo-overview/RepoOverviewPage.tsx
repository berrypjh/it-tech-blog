import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/NextStepBanner';
import { StartPageShell } from '../../shared/StartPageShell';

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
      <RepoOverviewHero content={c.hero} />
      <RepoOverwhelmCard content={c.overwhelm} />
      <RepoRootMiniMap content={c.miniMap} />
      <RootDirectorySummary content={c.directory} sectionId={DIRECTORY_SECTION_ID} />
      <RootFilesSummary content={c.rootFiles} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
