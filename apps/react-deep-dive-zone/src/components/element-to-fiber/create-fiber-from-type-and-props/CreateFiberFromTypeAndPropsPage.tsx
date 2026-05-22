import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../start/_shared/StartPageShell';

import { ClassificationQuiz } from './sections/ClassificationQuiz';
import { JsxToFiberTagCards } from './sections/JsxToFiberTagCards';
import { NextStepCTA } from './sections/NextStepCTA';
import { SourceCodeCheckpoint } from './sections/SourceCodeCheckpoint';
import { SpecialFiberTypes } from './sections/SpecialFiberTypes';
import { TypeBranchMap } from './sections/TypeBranchMap';
import { TypeDecisionHero } from './sections/TypeDecisionHero';
import { TypeShapeComparisonTable } from './sections/TypeShapeComparisonTable';
import { createFiberFromTypeAndPropsContent } from './content';

type Props = { locale: Locale };

export const CreateFiberFromTypeAndPropsPage = ({ locale }: Props) => {
  const c = createFiberFromTypeAndPropsContent[locale];

  return (
    <StartPageShell>
      <TypeDecisionHero content={c.hero} />
      <TypeBranchMap content={c.branchMap} />
      <SourceCodeCheckpoint content={c.checkpoint} />
      <JsxToFiberTagCards content={c.jsxCards} />
      <TypeShapeComparisonTable content={c.comparison} />
      <SpecialFiberTypes content={c.special} />
      <ClassificationQuiz content={c.quiz} />
      <NextStepCTA content={c.next} />
    </StartPageShell>
  );
};
