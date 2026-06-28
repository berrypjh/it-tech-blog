import type { Locale } from '@it-tech-blog/preferences';

import { FinalLaunchBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { FiberChapterCompleteHero } from './sections/FiberChapterCompleteHero';
import { FiberNextChapterPreview } from './sections/FiberNextChapterPreview';
import { FiberRenderingFlowConnection } from './sections/FiberRenderingFlowConnection';
import { FiberStructureFinalSummary } from './sections/FiberStructureFinalSummary';
import { fiberCentralContent } from './content';

type Props = { locale: Locale };

export const FiberCentralRenderingStructurePage = ({ locale }: Props) => {
  const c = fiberCentralContent[locale];

  return (
    <StartPageShell>
      <FiberChapterCompleteHero hero={c.hero} groups={c.summary.cards} />
      <FiberStructureFinalSummary content={c.summary} />
      <FiberRenderingFlowConnection content={c.flow} />
      <FiberNextChapterPreview content={c.nextPreview} />
      <FinalLaunchBanner content={c.finale} />
    </StartPageShell>
  );
};
