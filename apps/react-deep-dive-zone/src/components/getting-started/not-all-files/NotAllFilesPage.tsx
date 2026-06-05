import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/NextStepBanner';
import { StartPageShell } from '../../shared/StartPageShell';

import { FollowQuestionFlow } from './sections/FollowQuestionFlow';
import { QuestionCenteredCards } from './sections/QuestionCenteredCards';
import { QuestionToSourceMap } from './sections/QuestionToSourceMap';
import { SelectiveReadingHero } from './sections/SelectiveReadingHero';
import { WrongVsGoodApproach } from './sections/WrongVsGoodApproach';
import { notAllFilesContent } from './content';

type Props = { locale: Locale };

export const NotAllFilesPage = ({ locale }: Props) => {
  const c = notAllFilesContent[locale];

  return (
    <StartPageShell>
      <SelectiveReadingHero content={c.hero} />
      <WrongVsGoodApproach content={c.approaches} />
      <QuestionCenteredCards content={c.questions} />
      <QuestionToSourceMap content={c.mapping} />
      <FollowQuestionFlow content={c.followFlow} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
