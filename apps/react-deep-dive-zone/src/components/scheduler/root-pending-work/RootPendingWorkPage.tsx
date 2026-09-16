import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { LaneLifecycle } from './sections/LaneLifecycle';
import { MarkingSteps } from './sections/MarkingSteps';
import { RootLaneFields } from './sections/RootLaneFields';
import { RootPendingWorkCodeCheckpoint } from './sections/RootPendingWorkCodeCheckpoint';
import { RootPendingWorkHero } from './sections/RootPendingWorkHero';
import { rootPendingWorkContent } from './content';

type Props = { locale: Locale };

export const RootPendingWorkPage = ({ locale }: Props) => {
  const c = rootPendingWorkContent[locale];

  return (
    <StartPageShell>
      <RootPendingWorkHero content={c.hero} />
      <RootLaneFields content={c.fields} />
      <MarkingSteps content={c.marking} />
      <LaneLifecycle content={c.clearing} />
      <RootPendingWorkCodeCheckpoint content={c.checkpoint} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
