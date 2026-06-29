import type { Locale } from '@it-tech-blog/preferences';

import { FinalLaunchBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { BeginVsCompleteCompare } from './sections/BeginVsCompleteCompare';
import { BubblePropertiesPreview } from './sections/BubblePropertiesPreview';
import { CompleteWorkCodeCheckpoint } from './sections/CompleteWorkCodeCheckpoint';
import { CompleteWorkHero } from './sections/CompleteWorkHero';
import { CompleteWorkMoveDirection } from './sections/CompleteWorkMoveDirection';
import { FinalChecklist } from './sections/FinalChecklist';
import { RenderPhaseSummary } from './sections/RenderPhaseSummary';
import { SiblingParentTreeWalk } from './sections/SiblingParentTreeWalk';
import { completeWorkContent } from './content';

type Props = { locale: Locale };

export const CompleteWorkPage = ({ locale }: Props) => {
  const c = completeWorkContent[locale];

  return (
    <StartPageShell>
      <CompleteWorkHero content={c.hero} />
      <BeginVsCompleteCompare content={c.compare} />
      <CompleteWorkMoveDirection content={c.direction} />
      <SiblingParentTreeWalk content={c.treeWalk} />
      <BubblePropertiesPreview content={c.bubble} />
      <CompleteWorkCodeCheckpoint content={c.code} />
      <RenderPhaseSummary content={c.summary} />
      <FinalChecklist content={c.checklist} />
      <FinalLaunchBanner content={c.finale} />
    </StartPageShell>
  );
};
