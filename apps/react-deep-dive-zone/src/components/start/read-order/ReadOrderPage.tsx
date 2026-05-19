import type { Locale } from '@it-tech-blog/preferences';

import { CoreFilesByStage } from './sections/CoreFilesByStage';
import { DeferredTopicsGrid } from './sections/DeferredTopicsGrid';
import { DifficultyMap } from './sections/DifficultyMap';
import { FirstThreeFiles } from './sections/FirstThreeFiles';
import { NextPageBanner } from './sections/NextPageBanner';
import { PersonalizedLearningPaths } from './sections/PersonalizedLearningPaths';
import { ReadingOrderHero } from './sections/ReadingOrderHero';
import { RecommendedSequenceTimeline } from './sections/RecommendedSequenceTimeline';
import { readOrderContent } from './content';

type Props = { locale: Locale };

export const ReadOrderPage = ({ locale }: Props) => {
  const c = readOrderContent[locale];

  return (
    <article className="mx-auto w-full max-w-[1200px] px-lg sm:px-xl lg:px-2xl py-xl lg:py-2xl">
      <div className="flex flex-col gap-xl lg:gap-2xl">
        <ReadingOrderHero content={c.hero} />

        {/* 02 + 03 combined board — lg에서는 좌 34% / 우 66%로 하나의 학습 보드처럼 보이게 */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.34fr)_minmax(0,_0.66fr)] gap-xl lg:gap-2xl items-start">
          <RecommendedSequenceTimeline content={c.sequence} />
          <CoreFilesByStage content={c.coreFiles} />
        </div>

        <DeferredTopicsGrid content={c.deferred} />
        <DifficultyMap content={c.difficulty} />
        <FirstThreeFiles content={c.firstThree} />
        <PersonalizedLearningPaths content={c.paths} />
        <NextPageBanner content={c.nextStep} />
      </div>
    </article>
  );
};
