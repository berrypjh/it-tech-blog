import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../shared/StartPageShell';

import { FeatureTraceRoutine } from './sections/FeatureTraceRoutine';
import { GithubReadingHero } from './sections/GithubReadingHero';
import { GithubReadingSources } from './sections/GithubReadingSources';
import { GithubSearchPractice } from './sections/GithubSearchPractice';
import { PracticeMissionAndCTA } from './sections/PracticeMissionAndCTA';
import { StableCanaryCompare } from './sections/StableCanaryCompare';
import { githubReadingContent } from './content';

type Props = { locale: Locale };

export const GithubReadingMethodPage = ({ locale }: Props) => {
  const c = githubReadingContent[locale];

  return (
    <StartPageShell>
      <GithubReadingHero content={c.hero} />
      <GithubReadingSources content={c.sources} />
      <FeatureTraceRoutine content={c.routine} />
      <GithubSearchPractice content={c.search} />
      <StableCanaryCompare content={c.compare} />
      <PracticeMissionAndCTA content={c.mission} nextStep={c.nextStep} />
    </StartPageShell>
  );
};
