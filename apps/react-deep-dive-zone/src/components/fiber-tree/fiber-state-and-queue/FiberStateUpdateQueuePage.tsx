import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { HooksClassConnection } from './sections/HooksClassConnection';
import { SetStateFlow } from './sections/SetStateFlow';
import { StateFieldVsQueueField } from './sections/StateFieldVsQueueField';
import { StateQueueCodeCheckpoint } from './sections/StateQueueCodeCheckpoint';
import { StateQueueComparison } from './sections/StateQueueComparison';
import { StateQueueHero } from './sections/StateQueueHero';
import { StateQueueMiniQuiz } from './sections/StateQueueMiniQuiz';
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
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
