import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/NextStepBanner';
import { StartPageShell } from '../../shared/StartPageShell';

import { HostRootExample } from './sections/HostRootExample';
import { StateNodeByTag } from './sections/StateNodeByTag';
import { StateNodeChecklist } from './sections/StateNodeChecklist';
import { StateNodeCodeCheckpoint } from './sections/StateNodeCodeCheckpoint';
import { StateNodeHero } from './sections/StateNodeHero';
import { StateNodeMiniQuiz } from './sections/StateNodeMiniQuiz';
import { StateNodeMisconception } from './sections/StateNodeMisconception';
import { WhyStateNodeMatters } from './sections/WhyStateNodeMatters';
import { fiberStateNodeContent } from './content';

type Props = { locale: Locale };

export const FiberStateNodePage = ({ locale }: Props) => {
  const c = fiberStateNodeContent[locale];

  return (
    <StartPageShell>
      <StateNodeHero content={c.hero} />
      <StateNodeMisconception content={c.misconception} />
      <StateNodeByTag content={c.byTag} />
      <HostRootExample content={c.hostRoot} />
      <StateNodeCodeCheckpoint content={c.checkpoint} />
      <WhyStateNodeMatters content={c.reasons} />
      <StateNodeMiniQuiz content={c.quiz} />
      <StateNodeChecklist content={c.checklist} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
