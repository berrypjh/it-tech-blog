import { BeforeAfterSection } from './sections/BeforeAfterSection';
import { CorePrinciplesSection } from './sections/CorePrinciplesSection';
import { HandsOnExperienceSection } from './sections/HandsOnExperienceSection';
import { IntroHeroSection } from './sections/IntroHeroSection';
import { NextLessonCta } from './sections/NextLessonCta';
import { introContent, type IntroLocale } from './content';

export const AccessibilityIntroPage = ({ locale }: { locale: IntroLocale }) => {
  const c = introContent[locale] ?? introContent.ko;
  return (
    <div className="relative mx-auto w-full max-w-[1280px] px-mdl py-xl sm:px-xlg lg:px-xxl lg:py-xxl">
      <div className="flex flex-col gap-xl lg:gap-xxl">
        <IntroHeroSection content={c.hero} />
        <CorePrinciplesSection content={c.principles} />
        <BeforeAfterSection content={c.comparison} />
        <HandsOnExperienceSection content={c.handsOn} />
        <NextLessonCta content={c.cta} />
      </div>
    </div>
  );
};
