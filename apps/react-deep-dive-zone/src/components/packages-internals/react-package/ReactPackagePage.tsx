import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../start/_shared/StartPageShell';

import { ApiEntryRoutesSection } from './sections/ApiEntryRoutesSection';
import { ApiGroupsSection } from './sections/ApiGroupsSection';
import { CapabilitiesSection } from './sections/CapabilitiesSection';
import { CodeCheckpointSection } from './sections/CodeCheckpointSection';
import { PublicApiHubSection } from './sections/PublicApiHubSection';
import { QuickQuizSection } from './sections/QuickQuizSection';
import { ReactPackageHero } from './sections/ReactPackageHero';
import { ReactPackageNextCTA } from './sections/ReactPackageNextCTA';
import { reactPackageContent } from './content';

type Props = { locale: Locale };

const HUB_SECTION_ID = 'section-hub';
const ROUTES_SECTION_ID = 'section-routes';

export const ReactPackagePage = ({ locale }: Props) => {
  const c = reactPackageContent[locale];

  return (
    <StartPageShell>
      <ReactPackageHero content={c.hero} />
      <ApiGroupsSection content={c.groups} />
      <PublicApiHubSection content={c.hub} sectionId={HUB_SECTION_ID} />
      <CodeCheckpointSection content={c.checkpoint} />
      <ApiEntryRoutesSection content={c.routes} sectionId={ROUTES_SECTION_ID} />
      <CapabilitiesSection content={c.capabilities} />
      <QuickQuizSection content={c.quiz} />
      <ReactPackageNextCTA content={c.nextStep} />
    </StartPageShell>
  );
};
