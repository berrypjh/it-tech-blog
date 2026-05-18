import { FinalCtaBanner } from './sections/FinalCtaBanner';
import { FullLearningStagesSection } from './sections/FullLearningStagesSection';
import { LearningRoadmapHeroSection } from './sections/LearningRoadmapHeroSection';
import { roadmapContent, type RoadmapLocale } from './content';

export const AccessibilityLearningRoadmapPage = ({ locale }: { locale: RoadmapLocale }) => {
  const c = roadmapContent[locale] ?? roadmapContent.ko;
  return (
    <div className="relative mx-auto w-full max-w-[1280px] px-mdl py-xl sm:px-xlg lg:px-xxl lg:py-xxl">
      <div className="flex flex-col gap-xl lg:gap-xxl">
        <LearningRoadmapHeroSection content={c.hero} />
        <FullLearningStagesSection content={c.stages} />
        <FinalCtaBanner content={c.finalCta} />
      </div>
    </div>
  );
};
