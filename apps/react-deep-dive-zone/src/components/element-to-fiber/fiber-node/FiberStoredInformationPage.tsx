import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { ElementFiberMappingTable } from './sections/ElementFiberMappingTable';
import { FiberInfoGroups } from './sections/FiberInfoGroups';
import { FiberStoredInfoHero } from './sections/FiberStoredInfoHero';
import { SourceCodeCheckpoint } from './sections/SourceCodeCheckpoint';
import { StructureExpansionVisualization } from './sections/StructureExpansionVisualization';
import { WhyFieldsNeeded } from './sections/WhyFieldsNeeded';
import { fiberStoredInformationContent } from './content';

type Props = { locale: Locale };

export const FiberStoredInformationPage = ({ locale }: Props) => {
  const c = fiberStoredInformationContent[locale];

  return (
    <StartPageShell>
      <FiberStoredInfoHero content={c.hero} />
      <ElementFiberMappingTable content={c.mapping} />
      <FiberInfoGroups content={c.groups} />
      <SourceCodeCheckpoint content={c.checkpoint} />
      <StructureExpansionVisualization content={c.expansion} />
      <WhyFieldsNeeded content={c.reasons} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
