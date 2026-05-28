import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../shared/StartPageShell';

import { HooksClassConnection } from './sections/HooksClassConnection';
import { SetStateFlow } from './sections/SetStateFlow';
import { StateFieldVsQueueField } from './sections/StateFieldVsQueueField';
import { StateQueueChecklist } from './sections/StateQueueChecklist';
import { StateQueueCodeCheckpoint } from './sections/StateQueueCodeCheckpoint';
import { StateQueueComparison } from './sections/StateQueueComparison';
import { StateQueueHero } from './sections/StateQueueHero';
import { StateQueueMiniQuiz } from './sections/StateQueueMiniQuiz';
import { StateQueueNextCTA } from './sections/StateQueueNextCTA';
import { fiberStateAndQueueContent } from './content';

type Props = { locale: Locale };

export const FiberStateUpdateQueuePage = ({ locale }: Props) => {
  const c = fiberStateAndQueueContent[locale];

  return (
    <StartPageShell>
      <StateQueueHero content={c.hero} />
      <StateQueueComparison content={c.comparison} />
      <SetStateFlow content={c.setStateFlow} />
      <StateFieldVsQueueField content={c.roleFlow} />
      <StateQueueCodeCheckpoint content={c.checkpoint} />
      <HooksClassConnection content={c.connections} />
      <StateQueueMiniQuiz content={c.quiz} />
      <StateQueueChecklist content={c.checklist} />
      <StateQueueNextCTA content={c.next} />
    </StartPageShell>
  );
};
