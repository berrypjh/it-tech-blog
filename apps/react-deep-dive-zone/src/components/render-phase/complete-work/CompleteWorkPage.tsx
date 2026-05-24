import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../start/_shared/StartPageShell';

import { BeginVsCompleteCompare } from './sections/BeginVsCompleteCompare';
import { BubblePropertiesPreview } from './sections/BubblePropertiesPreview';
import { CompleteWorkCodeCheckpoint } from './sections/CompleteWorkCodeCheckpoint';
import { CompleteWorkCTA } from './sections/CompleteWorkCTA';
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
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1.05fr)_minmax(0,_0.95fr)] gap-md lg:gap-lg">
        <RenderPhaseSummary content={c.summary} />
        <FinalChecklist content={c.checklist} />
      </div>
      <CompleteWorkCTA content={c.cta} />
    </StartPageShell>
  );
};
