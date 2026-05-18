import { AssistiveTechnologyHeroSection } from './sections/AssistiveTechnologyHeroSection';
import { AssistiveTechnologyTypesSection } from './sections/AssistiveTechnologyTypesSection';
import { CommonProblemsSection } from './sections/CommonProblemsSection';
import { KeyboardNavigationExperienceSection } from './sections/KeyboardNavigationExperienceSection';
import { KeyTakeawaysSection } from './sections/KeyTakeawaysSection';
import { NextLearningCta } from './sections/NextLearningCta';
import { PracticeQuizSection } from './sections/PracticeQuizSection';
import { ScreenReaderComparisonSection } from './sections/ScreenReaderComparisonSection';
import { ScreenReaderExperienceSection } from './sections/ScreenReaderExperienceSection';
import { assistiveTechContent, type AssistiveTechLocale } from './content';

export const AssistiveTechnologyPage = ({ locale }: { locale: AssistiveTechLocale }) => {
  const c = assistiveTechContent[locale] ?? assistiveTechContent.ko;
  return (
    <div className="relative mx-auto w-full max-w-[1280px] px-mdl py-xl sm:px-xlg lg:px-xxl lg:py-xxl">
      <div className="flex flex-col gap-xl lg:gap-xxl">
        <AssistiveTechnologyHeroSection content={c.hero} />
        <AssistiveTechnologyTypesSection content={c.types} />
        <ScreenReaderExperienceSection content={c.screenReader} />
        <ScreenReaderComparisonSection content={c.comparisons} />
        <KeyboardNavigationExperienceSection content={c.keyboard} />
        <CommonProblemsSection content={c.problems} />
        <PracticeQuizSection content={c.quiz} />
        <KeyTakeawaysSection content={c.takeaways} />
        <NextLearningCta content={c.cta} />
      </div>
    </div>
  );
};
