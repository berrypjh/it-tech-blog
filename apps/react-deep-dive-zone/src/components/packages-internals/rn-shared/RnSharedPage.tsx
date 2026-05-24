import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../start/_shared/StartPageShell';

import { AxisSection } from './sections/AxisSection';
import { BenefitSection } from './sections/BenefitSection';
import { CommonReconcilerSection } from './sections/CommonReconcilerSection';
import { CompareSection } from './sections/CompareSection';
import { ConceptSection } from './sections/ConceptSection';
import { ModesSection } from './sections/ModesSection';
import { RnHero } from './sections/RnHero';
import { RnNextCTA } from './sections/RnNextCTA';
import { rnContent } from './content';

type Props = { locale: Locale };

const COMMON_SECTION_ID = 'section-common';
const BENEFIT_SECTION_ID = 'section-benefit';

export const RnSharedPage = ({ locale }: Props) => {
  const c = rnContent[locale];

  return (
    <StartPageShell>
      <RnHero content={c.hero} />
      <AxisSection content={c.axis} />
      <CompareSection content={c.compare} />
      <CommonReconcilerSection content={c.common} sectionId={COMMON_SECTION_ID} />
      <ModesSection content={c.modes} />
      <BenefitSection content={c.benefit} sectionId={BENEFIT_SECTION_ID} />
      <ConceptSection content={c.concept} />
      <RnNextCTA content={c.nextStep} />
    </StartPageShell>
  );
};
