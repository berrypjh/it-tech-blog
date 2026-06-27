import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { AxisSection } from './sections/AxisSection';
import { BenefitSection } from './sections/BenefitSection';
import { CommonReconcilerSection } from './sections/CommonReconcilerSection';
import { CompareSection } from './sections/CompareSection';
import { ModesSection } from './sections/ModesSection';
import { RnHero } from './sections/RnHero';
import { rnContent } from './content';

type Props = { locale: Locale };

export const RnSharedPage = ({ locale }: Props) => {
  const c = rnContent[locale];

  return (
    <StartPageShell>
      <RnHero content={c.hero} />
      <AxisSection content={c.axis} />
      <CompareSection content={c.compare} />
      <CommonReconcilerSection content={c.common} />
      <ModesSection content={c.modes} />
      <BenefitSection content={c.benefit} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
