import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { CorePackageSelector } from './sections/CorePackageSelector';
import { LaterPackagesGrid } from './sections/LaterPackagesGrid';
import { PackageRelationshipDiagram } from './sections/PackageRelationshipDiagram';
import { PackagesHero } from './sections/PackagesHero';
import { PackagesLandscape } from './sections/PackagesLandscape';
import { ReactClientCheckpoint } from './sections/ReactClientCheckpoint';
import { packagesDirectoryContent } from './content';

type Props = { locale: Locale };

export const PackagesDirectoryPage = ({ locale }: Props) => {
  const c = packagesDirectoryContent[locale];

  return (
    <StartPageShell>
      <PackagesHero content={c.hero} />
      <PackagesLandscape content={c.landscape} />
      <CorePackageSelector content={c.selector} />
      <PackageRelationshipDiagram content={c.diagram} />
      <ReactClientCheckpoint content={c.checkpoint} />
      <LaterPackagesGrid content={c.later} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
