import type { Locale } from '@it-tech-blog/preferences';

import { FollowQuestionFlow } from './sections/FollowQuestionFlow';
import { MiniExplorationTool } from './sections/MiniExplorationTool';
import { NextPageBanner } from './sections/NextPageBanner';
import { QuestionCenteredCards } from './sections/QuestionCenteredCards';
import { QuestionToSourceMap } from './sections/QuestionToSourceMap';
import { SelectiveReadingHero } from './sections/SelectiveReadingHero';
import { TenMinuteMission } from './sections/TenMinuteMission';
import { WrongVsGoodApproach } from './sections/WrongVsGoodApproach';
import { notAllFilesContent } from './content';

type Props = { locale: Locale };

export const NotAllFilesPage = ({ locale }: Props) => {
  const c = notAllFilesContent[locale];

  return (
    <article className="mx-auto w-full max-w-[1200px] px-lg sm:px-xl lg:px-2xl py-xl lg:py-2xl">
      <div className="flex flex-col gap-xl lg:gap-2xl">
        <SelectiveReadingHero content={c.hero} />
        <WrongVsGoodApproach content={c.approaches} />
        <QuestionCenteredCards content={c.questions} />
        <QuestionToSourceMap content={c.mapping} />
        <FollowQuestionFlow content={c.followFlow} />
        <MiniExplorationTool content={c.miniTool} />
        <TenMinuteMission content={c.mission} />
        <NextPageBanner content={c.nextStep} />
      </div>
    </article>
  );
};
