import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { CodeTransformExamples } from './sections/CodeTransformExamples';
import { CompileFlowSteps } from './sections/CompileFlowSteps';
import { FunctionCallBenefits } from './sections/FunctionCallBenefits';
import { JsxTransformHero } from './sections/JsxTransformHero';
import { React19TransformReasons } from './sections/React19TransformReasons';
import { TransformComparison } from './sections/TransformComparison';
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
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
