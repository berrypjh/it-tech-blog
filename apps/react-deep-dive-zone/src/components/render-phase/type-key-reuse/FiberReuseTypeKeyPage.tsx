import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../getting-started/_shared/StartPageShell';

import { DifferentKeyCase } from './sections/DifferentKeyCase';
import { DifferentTypeCase } from './sections/DifferentTypeCase';
import { FiberReuseCodeCheckpoint } from './sections/FiberReuseCodeCheckpoint';
import { FiberReuseHero } from './sections/FiberReuseHero';
import { FiberReuseQuizAndCTA } from './sections/FiberReuseQuizAndCTA';
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
      <FiberReuseQuizAndCTA quiz={c.quiz} cta={c.cta} />
    </StartPageShell>
  );
};
