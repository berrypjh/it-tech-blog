import type { Locale } from '@it-tech-blog/preferences';

import { FinalLaunchBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

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
      <FinalLaunchBanner content={c.finale} />
    </StartPageShell>
  );
};
