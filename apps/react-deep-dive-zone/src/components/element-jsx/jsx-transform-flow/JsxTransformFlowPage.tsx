import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../shared/StartPageShell';

import { CodeTransformExamples } from './sections/CodeTransformExamples';
import { CompileFlowSteps } from './sections/CompileFlowSteps';
import { FunctionCallBenefits } from './sections/FunctionCallBenefits';
import { JsxTransformHero } from './sections/JsxTransformHero';
import { React19TransformReasons } from './sections/React19TransformReasons';
import { TransformComparison } from './sections/TransformComparison';
import { TransformNextPageCta } from './sections/TransformNextPageCta';
import { TransformQuickQuiz } from './sections/TransformQuickQuiz';
import { jsxTransformFlowContent } from './content';

type Props = { locale: Locale };

export const JsxTransformFlowPage = ({ locale }: Props) => {
  const c = jsxTransformFlowContent[locale];

  return (
    <StartPageShell>
      <JsxTransformHero content={c.hero} />
      <CompileFlowSteps content={c.compileFlow} />
      <TransformComparison content={c.comparison} />
      <React19TransformReasons content={c.react19} />
      <CodeTransformExamples content={c.examples} />
      <FunctionCallBenefits content={c.benefits} />
      <TransformQuickQuiz content={c.quiz} />
      <TransformNextPageCta content={c.next} />
    </StartPageShell>
  );
};
