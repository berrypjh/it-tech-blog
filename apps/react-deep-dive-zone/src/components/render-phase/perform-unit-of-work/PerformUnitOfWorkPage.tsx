import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../shared/StartPageShell';

import { BeginWorkReturnDecision } from './sections/BeginWorkReturnDecision';
import { CurrentWorkInProgressCompare } from './sections/CurrentWorkInProgressCompare';
import { DescendCompleteFlow } from './sections/DescendCompleteFlow';
import { NextBeginWorkCTA } from './sections/NextBeginWorkCTA';
import { PerformUnitCodeCheckpoint } from './sections/PerformUnitCodeCheckpoint';
import { PerformUnitFlow } from './sections/PerformUnitFlow';
import { PerformUnitHero } from './sections/PerformUnitHero';
import { PerformUnitMiniQuiz } from './sections/PerformUnitMiniQuiz';
import { performUnitContent } from './content';

type Props = { locale: Locale };

export const PerformUnitOfWorkPage = ({ locale }: Props) => {
  const c = performUnitContent[locale];

  return (
    <StartPageShell>
      <PerformUnitHero content={c.hero} />
      <PerformUnitFlow content={c.fullFlow} />
      <CurrentWorkInProgressCompare content={c.compare} />
      <BeginWorkReturnDecision content={c.returnDirection} />
      <PerformUnitCodeCheckpoint content={c.code} />
      <DescendCompleteFlow content={c.descendComplete} />
      <PerformUnitMiniQuiz content={c.quiz} />
      <NextBeginWorkCTA content={c.cta} />
    </StartPageShell>
  );
};
