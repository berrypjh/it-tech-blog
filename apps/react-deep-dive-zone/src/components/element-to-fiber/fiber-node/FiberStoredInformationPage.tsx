import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../start/_shared/StartPageShell';

import { ElementFiberMappingTable } from './sections/ElementFiberMappingTable';
import { FiberInfoGroups } from './sections/FiberInfoGroups';
import { FiberStoredInfoHero } from './sections/FiberStoredInfoHero';
import { MiniQuestionCard } from './sections/MiniQuestionCard';
import { NextStepCTA } from './sections/NextStepCTA';
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
      <MiniQuestionCard content={c.miniQuestion} />
      <NextStepCTA content={c.next} />
    </StartPageShell>
  );
};
