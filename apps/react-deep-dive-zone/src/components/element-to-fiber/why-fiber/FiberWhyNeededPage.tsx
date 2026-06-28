import type { Locale } from '@it-tech-blog/preferences';

import { FinalLaunchBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { ChapterCoreFive } from './sections/ChapterCoreFive';
import { ClosingQuote } from './sections/ClosingQuote';
import { FiberProblemCards } from './sections/FiberProblemCards';
import { FiberWhyNeededHero } from './sections/FiberWhyNeededHero';
import { FinalFlowSummary } from './sections/FinalFlowSummary';
import { NextChapterPreview } from './sections/NextChapterPreview';
import { fiberWhyNeededContent } from './content';

type Props = { locale: Locale };

export const FiberWhyNeededPage = ({ locale }: Props) => {
  const c = fiberWhyNeededContent[locale];

  return (
    <StartPageShell>
      <FiberWhyNeededHero content={c.hero} />

      <FinalFlowSummary content={c.finalFlow} />

      <ChapterCoreFive content={c.coreFive} />

      <FiberProblemCards content={c.problems} />

      <NextChapterPreview content={c.preview} />

      <ClosingQuote content={c.quote} />
      <FinalLaunchBanner content={c.finale} />
    </StartPageShell>
  );
};
