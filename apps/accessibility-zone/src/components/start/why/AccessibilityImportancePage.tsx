import { ImportanceHeroSection } from './sections/ImportanceHeroSection';
import { ImportanceReasonsSection } from './sections/ImportanceReasonsSection';
import { NextLearningCta } from './sections/NextLearningCta';
import { ProblemFlowSection } from './sections/ProblemFlowSection';
import { SelfDiagnosisSection } from './sections/SelfDiagnosisSection';
import { SituationExperienceSection } from './sections/SituationExperienceSection';
import { SummaryInsightsSection } from './sections/SummaryInsightsSection';
import { importanceContent, type ImportanceLocale } from './content';

export const AccessibilityImportancePage = ({ locale }: { locale: ImportanceLocale }) => {
  const c = importanceContent[locale] ?? importanceContent.ko;
  return (
    <div className="relative mx-auto w-full max-w-[1280px] px-lg py-xl sm:px-xl lg:px-2xl lg:py-2xl">
      <div className="flex flex-col gap-xl lg:gap-2xl">
        <ImportanceHeroSection content={c.hero} />
        <ImportanceReasonsSection content={c.reasons} />
        <SituationExperienceSection content={c.situation} />
        <ProblemFlowSection content={c.problem} />
        <SelfDiagnosisSection content={c.diagnosis} />
        <SummaryInsightsSection summary={c.summary} insights={c.insights} />
        <NextLearningCta content={c.cta} />
      </div>
    </div>
  );
};
