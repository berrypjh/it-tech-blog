import type { Locale } from '@it-tech-blog/preferences';

import { FinalLaunchBanner } from '../../shared/FinalLaunchBanner';
import { StartPageShell } from '../../shared/StartPageShell';

import { ChapterCoreFive } from './sections/ChapterCoreFive';
import { ClosingQuote } from './sections/ClosingQuote';
import { FiberProblemCards } from './sections/FiberProblemCards';
import { FiberWhyNeededHero } from './sections/FiberWhyNeededHero';
import { FinalChecklist } from './sections/FinalChecklist';
import { FinalFlowSummary } from './sections/FinalFlowSummary';
import { NextChapterPreview } from './sections/NextChapterPreview';
import { fiberWhyNeededContent } from './content';

type Props = { locale: Locale };

export const FiberWhyNeededPage = ({ locale }: Props) => {
  const c = fiberWhyNeededContent[locale];

  return (
    <StartPageShell>
      <FiberWhyNeededHero content={c.hero} />

      {/* Sections 2 + 3: 2-column on lg */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl lg:gap-2xl items-start">
        <FinalFlowSummary content={c.finalFlow} />
        <ChapterCoreFive content={c.coreFive} />
      </div>

      <FiberProblemCards content={c.problems} />

      {/* Sections 5 + 6: 2-column on lg */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl lg:gap-2xl items-start">
        <FinalChecklist content={c.checklist} />
        <NextChapterPreview content={c.preview} />
      </div>

      <ClosingQuote content={c.quote} />
      <FinalLaunchBanner content={c.finale} />
    </StartPageShell>
  );
};
