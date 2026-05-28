import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../shared/StartPageShell';

import { ExampleFlowWalkthrough } from './sections/ExampleFlowWalkthrough';
import { FlowCompletionWorkshop } from './sections/FlowCompletionWorkshop';
import { FlowPerspectiveHero } from './sections/FlowPerspectiveHero';
import { NextPageBanner } from './sections/NextPageBanner';
import { SixStageQuestionCards } from './sections/SixStageQuestionCards';
import { StageFileMappingTable } from './sections/StageFileMappingTable';
import { StageRecognitionQuiz } from './sections/StageRecognitionQuiz';
import { readingPerspectiveContent } from './content';

type Props = { locale: Locale };

export const ReadingPerspectivePage = ({ locale }: Props) => {
  const c = readingPerspectiveContent[locale];

  return (
    <StartPageShell>
      <FlowPerspectiveHero content={c.hero} />
      <SixStageQuestionCards content={c.sixStages} />
      <StageFileMappingTable content={c.mapping} />
      <ExampleFlowWalkthrough content={c.example} />
      <StageRecognitionQuiz content={c.quiz} />
      <FlowCompletionWorkshop content={c.workshop} />
      <NextPageBanner content={c.nextStep} />
    </StartPageShell>
  );
};
