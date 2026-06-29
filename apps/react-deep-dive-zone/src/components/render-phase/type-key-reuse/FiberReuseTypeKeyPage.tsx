import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { DifferentKeyCase } from './sections/DifferentKeyCase';
import { DifferentTypeCase } from './sections/DifferentTypeCase';
import { FiberReuseCodeCheckpoint } from './sections/FiberReuseCodeCheckpoint';
import { FiberReuseHero } from './sections/FiberReuseHero';
import { FiberReuseQuiz } from './sections/FiberReuseQuiz';
import { SameKeySameTypeCase } from './sections/SameKeySameTypeCase';
import { StatePreservationConnection } from './sections/StatePreservationConnection';
import { typeKeyReuseContent } from './content';

type Props = { locale: Locale };

export const FiberReuseTypeKeyPage = ({ locale }: Props) => {
  const c = typeKeyReuseContent[locale];

  return (
    <StartPageShell>
      <FiberReuseHero content={c.hero} />
      <SameKeySameTypeCase content={c.sameKeyType} />
      <DifferentKeyCase content={c.differentKey} />
      <DifferentTypeCase content={c.differentType} />
      <FiberReuseCodeCheckpoint content={c.code} />
      <StatePreservationConnection content={c.statePreserve} />
      <FiberReuseQuiz content={c.quiz} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
