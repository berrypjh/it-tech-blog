import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { DeferApiComparison } from './sections/DeferApiComparison';
import { TransitionDeferredCodeCheckpoint } from './sections/TransitionDeferredCodeCheckpoint';
import { TransitionDeferredHero } from './sections/TransitionDeferredHero';
import { TwoDeferApis } from './sections/TwoDeferApis';
import { TwoRenderTimeline } from './sections/TwoRenderTimeline';
import { transitionDeferredSplitContent } from './content';

type Props = { locale: Locale };

export const TransitionDeferredSplitPage = ({ locale }: Props) => {
  const c = transitionDeferredSplitContent[locale];

  return (
    <StartPageShell>
      <TransitionDeferredHero content={c.hero} />
      <TwoDeferApis content={c.apis} />
      <DeferApiComparison content={c.compare} />
      <TwoRenderTimeline content={c.timeline} />
      <TransitionDeferredCodeCheckpoint content={c.checkpoint} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
