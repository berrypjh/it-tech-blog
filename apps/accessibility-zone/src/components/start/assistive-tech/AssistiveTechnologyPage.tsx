import type { Locale } from '@it-tech-blog/preferences';

import { AssistiveTechnologyHeroSection } from './sections/AssistiveTechnologyHeroSection';
import { AssistiveTechnologyTypesSection } from './sections/AssistiveTechnologyTypesSection';
import { CommonProblemsSection } from './sections/CommonProblemsSection';
import { KeyboardNavigationExperienceSection } from './sections/KeyboardNavigationExperienceSection';
import { KeyTakeawaysSection } from './sections/KeyTakeawaysSection';
import { NextLearningCta } from './sections/NextLearningCta';
import { PracticeQuizSection } from './sections/PracticeQuizSection';
import { ScreenReaderComparisonSection } from './sections/ScreenReaderComparisonSection';
import { ScreenReaderExperienceSection } from './sections/ScreenReaderExperienceSection';
import { assistiveTechContent } from './content';

export const AssistiveTechnologyPage = ({ locale }: { locale: Locale }) => {
  const c = assistiveTechContent[locale] ?? assistiveTechContent.ko;
  return (
    <div className="relative mx-auto w-full max-w-[1280px] px-lg py-xl sm:px-xl lg:px-2xl lg:py-2xl">
      <div className="flex flex-col gap-xl lg:gap-2xl">
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
