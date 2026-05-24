import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../start/_shared/StartPageShell';

import { DomNotChangedWarning } from './sections/DomNotChangedWarning';
import { NextRenderPhaseCTA } from './sections/NextRenderPhaseCTA';
import { PhaseComparisonTable } from './sections/PhaseComparisonTable';
import { PreviousChapterFlow } from './sections/PreviousChapterFlow';
import { RenderPhaseFlowPreview } from './sections/RenderPhaseFlowPreview';
import { RenderPhaseHero } from './sections/RenderPhaseHero';
import { RenderPhaseMiniQuiz } from './sections/RenderPhaseMiniQuiz';
import { RenderPhaseWorkCards } from './sections/RenderPhaseWorkCards';
import { renderPhaseIntroContent } from './content';

type Props = { locale: Locale };

export const RenderPhaseIntroPage = ({ locale }: Props) => {
  const c = renderPhaseIntroContent[locale];

  return (
    <StartPageShell>
      <RenderPhaseHero content={c.hero} />
      <PreviousChapterFlow content={c.previous} />
      <PhaseComparisonTable content={c.comparison} />
      <RenderPhaseWorkCards content={c.work} />
      <RenderPhaseFlowPreview content={c.flowPreview} />
      <DomNotChangedWarning content={c.warning} />
      <RenderPhaseMiniQuiz content={c.quiz} />
      <NextRenderPhaseCTA content={c.cta} />
    </StartPageShell>
  );
};
