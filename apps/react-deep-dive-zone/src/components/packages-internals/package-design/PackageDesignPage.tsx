import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../shared/StartPageShell';

import { BridgeSection } from './sections/BridgeSection';
import { ChecklistSection } from './sections/ChecklistSection';
import { FinalDiagramSection } from './sections/FinalDiagramSection';
import { PdFinalCTA } from './sections/PdFinalCTA';
import { PdHero } from './sections/PdHero';
import { RecapSection } from './sections/RecapSection';
import { UserFlowSection } from './sections/UserFlowSection';
import { ValuesSection } from './sections/ValuesSection';
import { packageDesignContent } from './content';

type Props = { locale: Locale };

const FINAL_DIAGRAM_SECTION_ID = 'section-final-diagram';
const CHECKLIST_SECTION_ID = 'section-checklist';

export const PackageDesignPage = ({ locale }: Props) => {
  const c = packageDesignContent[locale];

  return (
    <StartPageShell>
      <PdHero content={c.hero} />
      <RecapSection content={c.recap} />
      <ValuesSection content={c.values} />
      <FinalDiagramSection content={c.finalDiagram} sectionId={FINAL_DIAGRAM_SECTION_ID} />
      <UserFlowSection content={c.userFlow} />
      <ChecklistSection content={c.checklist} sectionId={CHECKLIST_SECTION_ID} />
      <BridgeSection content={c.bridge} />
      <PdFinalCTA content={c.finalCta} />
    </StartPageShell>
  );
};
