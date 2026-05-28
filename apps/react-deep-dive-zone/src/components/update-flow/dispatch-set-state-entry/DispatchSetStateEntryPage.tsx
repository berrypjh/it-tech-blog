import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../shared/StartPageShell';

import { CodeReadingMissionSection } from './sections/CodeReadingMissionSection';
import { DispatchCodeCheckpoint } from './sections/DispatchCodeCheckpoint';
import { DispatchInternalSplitSection } from './sections/DispatchInternalSplitSection';
import { DispatchResponsibilitiesSection } from './sections/DispatchResponsibilitiesSection';
import { DispatchSetStateHero } from './sections/DispatchSetStateHero';
import { LaneFirstReasonSection } from './sections/LaneFirstReasonSection';
import { NextStepDarkCTA } from './sections/NextStepDarkCTA';
import { SetCountToDispatchSection } from './sections/SetCountToDispatchSection';
import { dispatchSetStateEntryContent } from './content';

type Props = { locale: Locale };

export const DispatchSetStateEntryPage = ({ locale }: Props) => {
  const c = dispatchSetStateEntryContent[locale];

  return (
    <StartPageShell>
      <DispatchSetStateHero content={c.hero} />
      <SetCountToDispatchSection content={c.compare} />
      <DispatchResponsibilitiesSection content={c.responsibilities} />
      <DispatchCodeCheckpoint content={c.checkpoint} />
      <LaneFirstReasonSection content={c.laneReason} />
      <DispatchInternalSplitSection content={c.splitReason} />
      <CodeReadingMissionSection content={c.mission} />
      <NextStepDarkCTA content={c.cta} />
    </StartPageShell>
  );
};
