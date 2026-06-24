import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { ChangelogReleasesComparisonTable } from './sections/ChangelogReleasesComparisonTable';
import { ChangelogTimeline } from './sections/ChangelogTimeline';
import { ChangeToCodeTrace } from './sections/ChangeToCodeTrace';
import { LatestReleaseExample } from './sections/LatestReleaseExample';
import { SourceChoiceScenarioCards } from './sections/SourceChoiceScenarioCards';
import { VersionContextHero } from './sections/VersionContextHero';
import { changelogContent } from './content';

type Props = { locale: Locale };

export const ChangelogReleasesPage = ({ locale }: Props) => {
  const c = changelogContent[locale];

  return (
    <StartPageShell>
      <VersionContextHero content={c.hero} />
      <ChangelogReleasesComparisonTable content={c.comparison} />
      <SourceChoiceScenarioCards content={c.scenarios} />
      <LatestReleaseExample content={c.latest} />
      <ChangelogTimeline content={c.timeline} />
      <ChangeToCodeTrace content={c.trace} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
