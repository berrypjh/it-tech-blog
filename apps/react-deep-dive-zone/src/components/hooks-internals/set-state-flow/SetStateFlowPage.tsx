import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { DispatchSetStateFlow } from './sections/DispatchSetStateFlow';
import { RecordVsApplyPhases } from './sections/RecordVsApplyPhases';
import { SetStateCodeCheckpoint } from './sections/SetStateCodeCheckpoint';
import { SetStateFlowHero } from './sections/SetStateFlowHero';
import { UpdateObjectAndQueue } from './sections/UpdateObjectAndQueue';
import { ValueVsUpdaterAction } from './sections/ValueVsUpdaterAction';
import { setStateFlowContent } from './content';

type Props = { locale: Locale };

export const SetStateFlowPage = ({ locale }: Props) => {
  const c = setStateFlowContent[locale];

  return (
    <StartPageShell>
      <SetStateFlowHero content={c.hero} />
      <DispatchSetStateFlow content={c.dispatchFlow} />
      <UpdateObjectAndQueue content={c.updateShape} />
      <RecordVsApplyPhases content={c.phases} />
      <ValueVsUpdaterAction content={c.batching} />
      <SetStateCodeCheckpoint content={c.checkpoint} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
