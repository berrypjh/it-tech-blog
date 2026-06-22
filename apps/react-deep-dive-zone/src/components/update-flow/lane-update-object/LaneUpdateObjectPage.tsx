import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { ActionMeaningSection } from './sections/ActionMeaningSection';
import { KeySummaryBanner } from './sections/KeySummaryBanner';
import { LaneUpdateHero } from './sections/LaneUpdateHero';
import { RequestUpdateLaneSection } from './sections/RequestUpdateLaneSection';
import { UpdateFieldsSection } from './sections/UpdateFieldsSection';
import { UpdateObjectCodeCheckpoint } from './sections/UpdateObjectCodeCheckpoint';
import { UpdateObjectStructureSection } from './sections/UpdateObjectStructureSection';
import { laneUpdateObjectContent } from './content';

type Props = { locale: Locale };

export const LaneUpdateObjectPage = ({ locale }: Props) => {
  const c = laneUpdateObjectContent[locale];

  return (
    <StartPageShell>
      <LaneUpdateHero content={c.hero} />
      <RequestUpdateLaneSection content={c.requestLane} />
      <UpdateObjectStructureSection content={c.structure} />
      <UpdateFieldsSection content={c.fields} />
      <UpdateObjectCodeCheckpoint content={c.checkpoint} />
      <ActionMeaningSection content={c.action} />
      <KeySummaryBanner content={c.summary} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
