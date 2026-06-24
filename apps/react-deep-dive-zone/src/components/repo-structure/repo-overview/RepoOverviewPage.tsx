import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { RepoOverviewHero } from './sections/RepoOverviewHero';
import { RepoOverwhelmCard } from './sections/RepoOverwhelmCard';
import { RepoRootMiniMap } from './sections/RepoRootMiniMap';
import { RootDirectorySummary } from './sections/RootDirectorySummary';
import { RootFilesSummary } from './sections/RootFilesSummary';
import { repoOverviewContent } from './content';

type Props = { locale: Locale };

export const RepoOverviewPage = ({ locale }: Props) => {
  const c = repoOverviewContent[locale];

  return (
    <StartPageShell>
      <RepoOverviewHero content={c.hero} />
      <RepoOverwhelmCard content={c.overwhelm} />
      <RepoRootMiniMap content={c.miniMap} />
      <RootDirectorySummary content={c.directory} />
      <RootFilesSummary content={c.rootFiles} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
