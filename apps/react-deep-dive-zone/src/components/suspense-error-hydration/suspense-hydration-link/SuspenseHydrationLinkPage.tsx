import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { BoundaryRoles } from './sections/BoundaryRoles';
import { PlacementTable } from './sections/PlacementTable';
import { StreamingSteps } from './sections/StreamingSteps';
import { SuspenseHydrationCodeCheckpoint } from './sections/SuspenseHydrationCodeCheckpoint';
import { SuspenseHydrationHero } from './sections/SuspenseHydrationHero';
import { suspenseHydrationLinkContent } from './content';

type Props = { locale: Locale };

export const SuspenseHydrationLinkPage = ({ locale }: Props) => {
  const c = suspenseHydrationLinkContent[locale];

  return (
    <StartPageShell>
      <SuspenseHydrationHero content={c.hero} />
      <BoundaryRoles content={c.roles} />
      <StreamingSteps content={c.streaming} />
      <PlacementTable content={c.placement} />
      <SuspenseHydrationCodeCheckpoint content={c.checkpoint} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
