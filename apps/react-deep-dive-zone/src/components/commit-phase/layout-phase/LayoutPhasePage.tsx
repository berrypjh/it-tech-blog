import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/NextStepBanner';
import { StartPageShell } from '../../shared/StartPageShell';

import { ClassLifecycleAndGuaranteeSection } from './sections/ClassLifecycleAndGuaranteeSection';
import { LayoutCodeCheckpointSection } from './sections/LayoutCodeCheckpointSection';
import { LayoutHeroSection } from './sections/LayoutHeroSection';
import { LayoutQuizSection } from './sections/LayoutQuizSection';
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
      <LayoutCodeCheckpointSection content={c.checkpoint} />
      <LayoutQuizSection quiz={c.quiz} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
