import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { HydrationStartCodeCheckpoint } from './sections/HydrationStartCodeCheckpoint';
import { HydrationStartHero } from './sections/HydrationStartHero';
import { HydrationStartSteps } from './sections/HydrationStartSteps';
import { ModuleStateTable } from './sections/ModuleStateTable';
import { RootCompare } from './sections/RootCompare';
import { hydrationStartContent } from './content';

type Props = { locale: Locale };

export const HydrationStartPage = ({ locale }: Props) => {
  const c = hydrationStartContent[locale];

  return (
    <StartPageShell>
      <HydrationStartHero content={c.hero} />
      <RootCompare content={c.compare} />
      <HydrationStartSteps content={c.steps} />
      <ModuleStateTable content={c.states} />
      <HydrationStartCodeCheckpoint content={c.checkpoint} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
