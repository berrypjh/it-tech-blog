import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { BindReasonCards } from './sections/BindReasonCards';
import { FiberQueueDispatchDiagram } from './sections/FiberQueueDispatchDiagram';
import { KeySummaryBanner } from './sections/KeySummaryBanner';
import { MiniQuizSection } from './sections/MiniQuizSection';
import { MountStateCodeCheckpoint } from './sections/MountStateCodeCheckpoint';
import { MountStateFlowSection } from './sections/MountStateFlowSection';
import { PublicApiInternalCompare } from './sections/PublicApiInternalCompare';
import { SetStateMemoryHero } from './sections/SetStateMemoryHero';
import { dispatchSetStateContent } from './content';

type Props = { locale: Locale };

export const DispatchSetStatePage = ({ locale }: Props) => {
  const c = dispatchSetStateContent[locale];

  return (
    <StartPageShell>
      <SetStateMemoryHero content={c.hero} />
      <PublicApiInternalCompare content={c.compare} />
      <MountStateFlowSection content={c.flow} />
      <MountStateCodeCheckpoint content={c.checkpoint} />
      <BindReasonCards content={c.bindReasons} />
      <FiberQueueDispatchDiagram content={c.relationship} />
      <MiniQuizSection content={c.quiz} />
      <KeySummaryBanner content={c.summary} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
