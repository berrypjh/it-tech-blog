import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../getting-started/_shared/StartPageShell';

import { BadGoodCompareSection } from './sections/BadGoodCompareSection';
import { FileFirstFailsSection } from './sections/FileFirstFailsSection';
import { FollowAlongMissionSection } from './sections/FollowAlongMissionSection';
import { FourQuestionTypesSection } from './sections/FourQuestionTypesSection';
import { HeroSection } from './sections/HeroSection';
import { KeySummarySection } from './sections/KeySummarySection';
import { NextCTASection } from './sections/NextCTASection';
import { QuestionConverterSection } from './sections/QuestionConverterSection';
import { QuestionToEntryFlowSection } from './sections/QuestionToEntryFlowSection';
import { ThreeReactExamplesSection } from './sections/ThreeReactExamplesSection';
import { TodayQuestionSection } from './sections/TodayQuestionSection';
import { startWithQuestionContent } from './content';

type Props = { locale: Locale };

export const StartWithQuestionPage = ({ locale }: Props) => {
  const c = startWithQuestionContent[locale];

  return (
    <StartPageShell>
      <HeroSection content={c.hero} />
      <TodayQuestionSection content={c.todayQuestion} />
      <FileFirstFailsSection content={c.fileFirstFails} />
      <BadGoodCompareSection content={c.badGoodCompare} />
      <FourQuestionTypesSection content={c.readingTypes} />
      <QuestionToEntryFlowSection content={c.questionToEntry} />
      <ThreeReactExamplesSection content={c.reactExamples} />
      <QuestionConverterSection content={c.converter} />
      <FollowAlongMissionSection content={c.mission} />
      <KeySummarySection content={c.summary} />
      <NextCTASection content={c.nextCta} />
    </StartPageShell>
  );
};
