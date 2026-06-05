import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/NextStepBanner';
import { StartPageShell } from '../../shared/StartPageShell';

import { ChangelogReleasesComparisonTable } from './sections/ChangelogReleasesComparisonTable';
import { ChangelogTimeline } from './sections/ChangelogTimeline';
import { ChangeToCodeTrace } from './sections/ChangeToCodeTrace';
import { LatestReleaseExample } from './sections/LatestReleaseExample';
import { SourceChoiceScenarioCards } from './sections/SourceChoiceScenarioCards';
import { VersionContextHero } from './sections/VersionContextHero';
import { VersionMemoPanel } from './sections/VersionMemoPanel';
import { changelogContent } from './content';

type Props = { locale: Locale };

const COMPARISON_SECTION_ID = 'section-comparison';

export const ChangelogReleasesPage = ({ locale }: Props) => {
  const c = changelogContent[locale];

  return (
    <StartPageShell>
      <VersionContextHero content={c.hero} />
      <ChangelogReleasesComparisonTable content={c.comparison} sectionId={COMPARISON_SECTION_ID} />
      <SourceChoiceScenarioCards content={c.scenarios} />
      <LatestReleaseExample content={c.latest} />
      <ChangelogTimeline content={c.timeline} />
      <ChangeToCodeTrace content={c.trace} />
      <VersionMemoPanel content={c.memo} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
