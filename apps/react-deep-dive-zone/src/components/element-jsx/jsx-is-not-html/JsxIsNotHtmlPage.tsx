import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/NextStepBanner';
import { StartPageShell } from '../../shared/StartPageShell';

import { JavaScriptEvidenceCards } from './sections/JavaScriptEvidenceCards';
import { JsxCoreSummary } from './sections/JsxCoreSummary';
import { JsxHeroSection } from './sections/JsxHeroSection';
import { JsxHtmlComparisonTable } from './sections/JsxHtmlComparisonTable';
import { JsxMiniQuizSection } from './sections/JsxMiniQuizSection';
import { JsxUiFitSection } from './sections/JsxUiFitSection';
import { MisconceptionCards } from './sections/MisconceptionCards';
import { jsxIsNotHtmlContent } from './content';

type Props = { locale: Locale };

export const JsxIsNotHtmlPage = ({ locale }: Props) => {
  const c = jsxIsNotHtmlContent[locale];

  return (
    <StartPageShell>
      <JsxHeroSection content={c.hero} />
      <MisconceptionCards content={c.misconception} />
      <JavaScriptEvidenceCards content={c.evidence} />
      <JsxUiFitSection content={c.uiFit} />
      <JsxHtmlComparisonTable content={c.comparison} />
      <JsxMiniQuizSection content={c.quiz} />
      <JsxCoreSummary content={c.summary} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
