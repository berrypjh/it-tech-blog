import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../getting-started/_shared/StartPageShell';

import { CodeCheckpointSection } from './sections/CodeCheckpointSection';
import { EnqueueHero } from './sections/EnqueueHero';
import { EnqueueUpdateMeaningSection } from './sections/EnqueueUpdateMeaningSection';
import { FourElementsSection } from './sections/FourElementsSection';
import { FullFunctionFlowSection } from './sections/FullFunctionFlowSection';
import { MiniQuizSection } from './sections/MiniQuizSection';
import { NextStepCTA } from './sections/NextStepCTA';
import { RootReasonSection } from './sections/RootReasonSection';
import { enqueueConcurrentHookUpdateContent } from './content';

type Props = { locale: Locale };

export const EnqueueConcurrentHookUpdatePage = ({ locale }: Props) => {
  const c = enqueueConcurrentHookUpdateContent[locale];

  return (
    <StartPageShell>
      <EnqueueHero content={c.hero} />
      <FullFunctionFlowSection content={c.flow} />
      <FourElementsSection content={c.elements} />
      <CodeCheckpointSection content={c.checkpoint} />
      <EnqueueUpdateMeaningSection content={c.meaning} />
      <RootReasonSection content={c.rootReason} />
      <MiniQuizSection content={c.quiz} />
      <NextStepCTA content={c.next} />
    </StartPageShell>
  );
};
