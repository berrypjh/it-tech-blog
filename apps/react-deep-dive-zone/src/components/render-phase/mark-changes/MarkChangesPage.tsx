import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../getting-started/_shared/StartPageShell';

import { ChangeExamples } from './sections/ChangeExamples';
import { FlagsAndReorder } from './sections/FlagsAndReorder';
import { MarkChangesCodeCheckpoint } from './sections/MarkChangesCodeCheckpoint';
import { MarkChangesHero } from './sections/MarkChangesHero';
import { MarkChangesQuizAndCTA } from './sections/MarkChangesQuizAndCTA';
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
      <MarkChangesQuizAndCTA quiz={c.quiz} cta={c.cta} />
    </StartPageShell>
  );
};
