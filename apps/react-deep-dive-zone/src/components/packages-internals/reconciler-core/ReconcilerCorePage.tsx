import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../shared/StartPageShell';

import { AdvancedLearningSection } from './sections/AdvancedLearningSection';
import { CheckpointSection } from './sections/CheckpointSection';
import { ConceptCheckSection } from './sections/ConceptCheckSection';
import { ElementFiberSection } from './sections/ElementFiberSection';
import { PositionSection } from './sections/PositionSection';
import { ReconcilerHero } from './sections/ReconcilerHero';
import { ReconcilerNextCTA } from './sections/ReconcilerNextCTA';
import { ResponsibilitiesSection } from './sections/ResponsibilitiesSection';
import { reconcilerContent } from './content';

type Props = { locale: Locale };

const ELEMENT_FIBER_SECTION_ID = 'section-element-fiber';
const CHECKPOINT_SECTION_ID = 'section-checkpoint';

export const ReconcilerCorePage = ({ locale }: Props) => {
  const c = reconcilerContent[locale];

  return (
    <StartPageShell>
      <ReconcilerHero content={c.hero} />
      <PositionSection content={c.position} />
      <ResponsibilitiesSection content={c.responsibilities} />
      <ElementFiberSection content={c.elementFiber} sectionId={ELEMENT_FIBER_SECTION_ID} />
      <CheckpointSection content={c.checkpoint} sectionId={CHECKPOINT_SECTION_ID} />
      <AdvancedLearningSection content={c.advanced} />
      <ConceptCheckSection content={c.concept} />
      <ReconcilerNextCTA content={c.nextStep} />
    </StartPageShell>
  );
};
