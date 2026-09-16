import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { ClassLifecycleAndGuaranteeSection } from './sections/ClassLifecycleAndGuaranteeSection';
import { LayoutCodeCheckpoint } from './sections/LayoutCodeCheckpoint';
import { LayoutHeroSection } from './sections/LayoutHeroSection';
import { LayoutWorkItemsSection } from './sections/LayoutWorkItemsSection';
import { TooltipMeasurementExampleSection } from './sections/TooltipMeasurementExampleSection';
import { UseLayoutEffectTimingSection } from './sections/UseLayoutEffectTimingSection';
import { layoutPhaseContent } from './content';

type Props = { locale: Locale };

export const LayoutPhasePage = ({ locale }: Props) => {
  const c = layoutPhaseContent[locale];

  return (
    <StartPageShell>
      <LayoutHeroSection content={c.hero} />
      <LayoutWorkItemsSection content={c.workItems} />
      <UseLayoutEffectTimingSection content={c.timing} />
      <TooltipMeasurementExampleSection content={c.tooltip} />
      <ClassLifecycleAndGuaranteeSection
        classLifecycle={c.classLifecycle}
        guarantee={c.guarantee}
      />
      <LayoutCodeCheckpoint content={c.checkpoint} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
