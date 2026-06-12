import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/NextStepBanner';
import { StartPageShell } from '../../shared/StartPageShell';

import { ApiEntryRoutes } from './sections/ApiEntryRoutes';
import { ApiGroups } from './sections/ApiGroups';
import { CapabilityComparison } from './sections/CapabilityComparison';
import { PublicApiSourceCheckpoint } from './sections/PublicApiSourceCheckpoint';
import { ReactPackageHero } from './sections/ReactPackageHero';
import { reactPackageContent } from './content';

type Props = { locale: Locale };

const HUB_SECTION_ID = 'section-hub';
const ROUTES_SECTION_ID = 'section-routes';

export const ReactPackagePage = ({ locale }: Props) => {
  const c = reactPackageContent[locale];

  return (
    <StartPageShell>
      <ReactPackageHero content={c.hero} />
      <ApiGroups content={c.groups} />
      <PublicApiSourceCheckpoint content={c.sourceCheckpoint} sectionId={HUB_SECTION_ID} />
      <ApiEntryRoutes content={c.routes} sectionId={ROUTES_SECTION_ID} />
      <CapabilityComparison content={c.capabilities} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
