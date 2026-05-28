import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../shared/StartPageShell';

import { CompletionCTASection } from './sections/CompletionCTASection';
import { CourseLoopSection } from './sections/CourseLoopSection';
import { FinalChecklistSection } from './sections/FinalChecklistSection';
import { FiveStepSection } from './sections/FiveStepSection';
import { FlowBuilderSection } from './sections/FlowBuilderSection';
import { FlowDiagramSection } from './sections/FlowDiagramSection';
import { HeroSection } from './sections/HeroSection';
import { OneSentenceSection } from './sections/OneSentenceSection';
import { ReadingNoteSection } from './sections/ReadingNoteSection';
import { TodayQuestionSection } from './sections/TodayQuestionSection';
import { WhyReconstructSection } from './sections/WhyReconstructSection';
import { reconstructContent } from './content';

type Props = { locale: Locale };

export const ReconstructWithWordsAndFlowPage = ({ locale }: Props) => {
  const c = reconstructContent[locale];

  return (
    <StartPageShell>
      <HeroSection content={c.hero} />
      <TodayQuestionSection content={c.todayQuestion} />
      <WhyReconstructSection content={c.whyReconstruct} />
      <OneSentenceSection content={c.oneSentence} />
      <FiveStepSection content={c.fiveStep} />
      <FlowDiagramSection content={c.flowDiagram} />
      <ReadingNoteSection content={c.readingNote} />
      <FlowBuilderSection content={c.builder} />
      <FinalChecklistSection content={c.checklist} />
      <CourseLoopSection content={c.courseLoop} />
      <CompletionCTASection content={c.completion} />
    </StartPageShell>
  );
};
