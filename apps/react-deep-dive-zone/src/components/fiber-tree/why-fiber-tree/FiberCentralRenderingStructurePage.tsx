import type { Locale } from '@it-tech-blog/preferences';

import { FinalLaunchBanner } from '../../shared/FinalLaunchBanner';
import { StartPageShell } from '../../shared/StartPageShell';

import { FiberChapterCompleteHero } from './sections/FiberChapterCompleteHero';
import { FiberClosingMessage } from './sections/FiberClosingMessage';
import { FiberFinalChecklist } from './sections/FiberFinalChecklist';
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
      <FiberFinalChecklist content={c.checklist} />
      <FiberNextChapterPreview content={c.nextPreview} />
      <FiberClosingMessage content={c.closing} />
      <FinalLaunchBanner content={c.finale} />
    </StartPageShell>
  );
};
