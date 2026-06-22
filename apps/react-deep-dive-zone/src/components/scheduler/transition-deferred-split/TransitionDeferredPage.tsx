import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../shared/shell';

import { DeferredLanePath } from './sections/DeferredLanePath';
import { DeferredValueUserCode } from './sections/DeferredValueUserCode';
import { ResponsivenessSimulationBoard } from './sections/ResponsivenessSimulationBoard';
import { StartTransitionUserCode } from './sections/StartTransitionUserCode';
import { TransitionDeferredCodePreview } from './sections/TransitionDeferredCodePreview';
import { TransitionDeferredHero } from './sections/TransitionDeferredHero';
import { TransitionDeferredKeyTakeaways } from './sections/TransitionDeferredKeyTakeaways';
import { TransitionDeferredMission } from './sections/TransitionDeferredMission';
import { TransitionDeferredQuestionPanel } from './sections/TransitionDeferredQuestionPanel';
import { TransitionLanePath } from './sections/TransitionLanePath';
import { TransitionProblemSection } from './sections/TransitionProblemSection';
import { transitionDeferredContent } from './content';

type Props = { locale: Locale };

export const TransitionDeferredPage = ({ locale }: Props) => {
  const c = transitionDeferredContent[locale];

  return (
    <StartPageShell>
      <TransitionDeferredHero content={c.hero} />
      <TransitionDeferredQuestionPanel content={c.question} />
      <TransitionProblemSection content={c.problem} />
      <StartTransitionUserCode content={c.startTransition} />
      <TransitionLanePath content={c.transitionFlow} />
      <DeferredValueUserCode content={c.deferredValue} />
      <DeferredLanePath content={c.deferredTimeline} />
      <TransitionDeferredCodePreview content={c.codePreview} />
      <ResponsivenessSimulationBoard content={c.simulation} />
      <TransitionDeferredMission content={c.mission} />
      <TransitionDeferredKeyTakeaways content={c.takeaways} />
    </StartPageShell>
  );
};
