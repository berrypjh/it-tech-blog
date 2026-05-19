import { BeforeAfterSection } from './sections/BeforeAfterSection';
import { CorePrinciplesSection } from './sections/CorePrinciplesSection';
import { HandsOnExperienceSection } from './sections/HandsOnExperienceSection';
import { IntroHeroSection } from './sections/IntroHeroSection';
import { NextLessonCta } from './sections/NextLessonCta';
import { introContent, type IntroLocale } from './content';

export const AccessibilityIntroPage = ({ locale }: { locale: IntroLocale }) => {
  const c = introContent[locale] ?? introContent.ko;
  return (
    <div className="relative mx-auto w-full max-w-[1280px] px-lg py-xl sm:px-xl lg:px-2xl lg:py-2xl">
      <div className="flex flex-col gap-xl lg:gap-2xl">
        <IntroHeroSection content={c.hero} />
        <CorePrinciplesSection content={c.principles} />
        <BeforeAfterSection content={c.comparison} />
        <HandsOnExperienceSection content={c.handsOn} />
        <NextLessonCta content={c.cta} />
      </div>
    </div>
  );
};
