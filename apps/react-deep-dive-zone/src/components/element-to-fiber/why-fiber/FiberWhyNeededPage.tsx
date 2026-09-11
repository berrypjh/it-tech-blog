import type { Locale } from '@it-tech-blog/preferences';

import { FinalLaunchBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { ChapterCoreFive } from './sections/ChapterCoreFive';
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
      <NextChapterPreview content={c.preview} />
      <FinalLaunchBanner content={c.finale} />
    </StartPageShell>
  );
};
