import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { ActivityCodeCheckpoint } from './sections/ActivityCodeCheckpoint';
import { ActivityHero } from './sections/ActivityHero';
import { HiddenBehaviorCards } from './sections/HiddenBehaviorCards';
import { HideVsRemove } from './sections/HideVsRemove';
import { ModeTable } from './sections/ModeTable';
import { RoundTripSteps } from './sections/RoundTripSteps';
import { activityHiddenUiContent } from './content';

type Props = { locale: Locale };

export const ActivityHiddenUiPage = ({ locale }: Props) => {
  const c = activityHiddenUiContent[locale];

  return (
    <StartPageShell>
      <ActivityHero content={c.hero} />
      <HideVsRemove content={c.versus} />
      <HiddenBehaviorCards content={c.behaviors} />
      <RoundTripSteps content={c.lifecycle} />
      <ModeTable content={c.modes} />
      <ActivityCodeCheckpoint content={c.checkpoint} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
