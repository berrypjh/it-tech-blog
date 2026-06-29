import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { ChangeExamples } from './sections/ChangeExamples';
import { FlagsAndReorder } from './sections/FlagsAndReorder';
import { MarkChangesCodeCheckpoint } from './sections/MarkChangesCodeCheckpoint';
import { MarkChangesHero } from './sections/MarkChangesHero';
import { MarkChangesQuiz } from './sections/MarkChangesQuiz';
import { RenderVsCommit } from './sections/RenderVsCommit';
import { WhyTwoPhases } from './sections/WhyTwoPhases';
import { markChangesContent } from './content';

type Props = { locale: Locale };

export const MarkChangesPage = ({ locale }: Props) => {
  const c = markChangesContent[locale];

  return (
    <StartPageShell>
      <MarkChangesHero content={c.hero} />
      <ChangeExamples content={c.examples} />
      <FlagsAndReorder content={c.flagsAndReorder} />
      <MarkChangesCodeCheckpoint content={c.code} />
      <RenderVsCommit content={c.renderCommit} />
      <WhyTwoPhases content={c.whyTwoPhases} />
      <MarkChangesQuiz content={c.quiz} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
