import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { HeadOwnership } from './sections/HeadOwnership';
import { HoistingSteps } from './sections/HoistingSteps';
import { MetadataCodeCheckpoint } from './sections/MetadataCodeCheckpoint';
import { MetadataHero } from './sections/MetadataHero';
import { PlacementRuleTable } from './sections/PlacementRuleTable';
import { ResourceKindCards } from './sections/ResourceKindCards';
import { metadataResourceContent } from './content';

type Props = { locale: Locale };

export const MetadataResourceReactDomPage = ({ locale }: Props) => {
  const c = metadataResourceContent[locale];

  return (
    <StartPageShell>
      <MetadataHero content={c.hero} />
      <HeadOwnership content={c.before} />
      <ResourceKindCards content={c.resources} />
      <HoistingSteps content={c.hoisting} />
      <PlacementRuleTable content={c.rules} />
      <MetadataCodeCheckpoint content={c.checkpoint} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
