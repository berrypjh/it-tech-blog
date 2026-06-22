import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { LaneBitmaskHero } from './sections/LaneBitmaskHero';
import { LaneBitmaskQuestionPanel } from './sections/LaneBitmaskQuestionPanel';
import { LaneCodePreview } from './sections/LaneCodePreview';
import { LaneCombinationInteractive } from './sections/LaneCombinationInteractive';
import { LaneFollowAlongMission } from './sections/LaneFollowAlongMission';
import { LaneKeyTakeaways } from './sections/LaneKeyTakeaways';
import { LaneVsLanesCompare } from './sections/LaneVsLanesCompare';
import { MultipleLanesNeed } from './sections/MultipleLanesNeed';
import { PendingLanesCombination } from './sections/PendingLanesCombination';
import { PriorityNumberVsBitmask } from './sections/PriorityNumberVsBitmask';
import { RepresentativeLaneTable } from './sections/RepresentativeLaneTable';
import { laneBitmaskContent } from './content';

type Props = { locale: Locale };

export const LaneBitmaskPage = ({ locale }: Props) => {
  const c = laneBitmaskContent[locale];

  return (
    <StartPageShell>
      <LaneBitmaskHero content={c.hero} />
      <LaneBitmaskQuestionPanel content={c.question} />
      <LaneVsLanesCompare content={c.laneVsLanes} />
      <PriorityNumberVsBitmask content={c.compare} />
      <RepresentativeLaneTable content={c.representative} />
      <PendingLanesCombination content={c.combination} />
      <MultipleLanesNeed content={c.multi} />
      <LaneCodePreview content={c.code} />
      <LaneCombinationInteractive content={c.interactive} />
      <LaneFollowAlongMission content={c.mission} />
      <LaneKeyTakeaways content={c.takeaways} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
