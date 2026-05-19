import type { Locale } from '@it-tech-blog/preferences';

import { FinalCtaBanner } from './sections/FinalCtaBanner';
import { FullLearningStagesSection } from './sections/FullLearningStagesSection';
import { LearningRoadmapHeroSection } from './sections/LearningRoadmapHeroSection';
import { roadmapContent } from './content';

export const AccessibilityLearningRoadmapPage = ({ locale }: { locale: Locale }) => {
  const c = roadmapContent[locale] ?? roadmapContent.ko;
  return (
    <div className="relative mx-auto w-full max-w-[1280px] px-lg py-xl sm:px-xl lg:px-2xl lg:py-2xl">
      <div className="flex flex-col gap-xl lg:gap-2xl">
        <LearningRoadmapHeroSection content={c.hero} />
        <FullLearningStagesSection content={c.stages} />
        <FinalCtaBanner content={c.finalCta} />
      </div>
    </div>
  );
};
