import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../getting-started/_shared/StartPageShell';

import { CorePackageSelector } from './sections/CorePackageSelector';
import { LaterPackagesGrid } from './sections/LaterPackagesGrid';
import { PackageQuickQuiz } from './sections/PackageQuickQuiz';
import { PackageRelationshipDiagram } from './sections/PackageRelationshipDiagram';
import { PackagesHero } from './sections/PackagesHero';
import { PackagesLandscape } from './sections/PackagesLandscape';
import { PackagesNextStepCTA } from './sections/PackagesNextStepCTA';
import { ReactClientCheckpoint } from './sections/ReactClientCheckpoint';
import { packagesDirectoryContent } from './content';

type Props = { locale: Locale };

const LANDSCAPE_SECTION_ID = 'section-landscape';

export const PackagesDirectoryPage = ({ locale }: Props) => {
  const c = packagesDirectoryContent[locale];

  return (
    <StartPageShell>
      <PackagesHero content={c.hero} landscapeId={LANDSCAPE_SECTION_ID} />
      <PackagesLandscape content={c.landscape} sectionId={LANDSCAPE_SECTION_ID} />
      <CorePackageSelector content={c.selector} />
      <PackageRelationshipDiagram content={c.diagram} />
      <ReactClientCheckpoint content={c.checkpoint} />
      <LaterPackagesGrid content={c.later} />
      <PackageQuickQuiz content={c.quiz} />
      <PackagesNextStepCTA content={c.nextStep} />
    </StartPageShell>
  );
};
