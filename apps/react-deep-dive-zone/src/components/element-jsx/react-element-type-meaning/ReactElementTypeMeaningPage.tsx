import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/NextStepBanner';
import { StartPageShell } from '../../shared/StartPageShell';

import { ElementTypeHero } from './sections/ElementTypeHero';
import { FiberClassificationPreview } from './sections/FiberClassificationPreview';
import { JsxToTypeRows } from './sections/JsxToTypeRows';
import { TypeComparisonTable } from './sections/TypeComparisonTable';
import { TypeKindCards } from './sections/TypeKindCards';
import { TypeQuickQuiz } from './sections/TypeQuickQuiz';
import { TypeSourceConnection } from './sections/TypeSourceConnection';
import { reactElementTypeMeaningContent } from './content';

type Props = { locale: Locale };

export const ReactElementTypeMeaningPage = ({ locale }: Props) => {
  const c = reactElementTypeMeaningContent[locale];

  return (
    <StartPageShell>
      <ElementTypeHero content={c.hero} />
      <TypeKindCards content={c.kinds} />
      <JsxToTypeRows content={c.rows} />
      <TypeComparisonTable content={c.compare} />
      <TypeSourceConnection content={c.source} />
      <FiberClassificationPreview content={c.fiber} />
      <TypeQuickQuiz content={c.quiz} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
