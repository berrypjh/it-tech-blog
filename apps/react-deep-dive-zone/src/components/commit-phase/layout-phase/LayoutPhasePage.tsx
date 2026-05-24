import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../getting-started/_shared/StartPageShell';

import { ClassLifecycleAndGuaranteeSection } from './sections/ClassLifecycleAndGuaranteeSection';
import { LayoutCodeCheckpointSection } from './sections/LayoutCodeCheckpointSection';
import { LayoutHeroSection } from './sections/LayoutHeroSection';
import { LayoutQuizAndNextSection } from './sections/LayoutQuizAndNextSection';
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
      <LayoutQuizAndNextSection quiz={c.quiz} cta={c.cta} />
    </StartPageShell>
  );
};
