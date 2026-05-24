import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../getting-started/_shared/StartPageShell';

import { ContextLaneSimulator } from './sections/ContextLaneSimulator';
import { RequestUpdateLaneBranchFlow } from './sections/RequestUpdateLaneBranchFlow';
import { RequestUpdateLaneCodePreview } from './sections/RequestUpdateLaneCodePreview';
import { RequestUpdateLaneHero } from './sections/RequestUpdateLaneHero';
import { RequestUpdateLaneKeyTakeaways } from './sections/RequestUpdateLaneKeyTakeaways';
import { RequestUpdateLaneMission } from './sections/RequestUpdateLaneMission';
import { RequestUpdateLaneNextCTA } from './sections/RequestUpdateLaneNextCTA';
import { RequestUpdateLaneQuestionPanel } from './sections/RequestUpdateLaneQuestionPanel';
import { SameSetStateDifferentLane } from './sections/SameSetStateDifferentLane';
import { requestUpdateLaneContent } from './content';

type Props = { locale: Locale };

export const RequestUpdateLanePage = ({ locale }: Props) => {
  const c = requestUpdateLaneContent[locale];

  return (
    <StartPageShell>
      <RequestUpdateLaneHero content={c.hero} />
      <RequestUpdateLaneQuestionPanel content={c.question} />
      <SameSetStateDifferentLane content={c.sameSetState} />
      <RequestUpdateLaneBranchFlow content={c.branchFlow} />
      <RequestUpdateLaneCodePreview content={c.code} />
      <ContextLaneSimulator content={c.simulator} />
      <RequestUpdateLaneMission content={c.mission} />
      <RequestUpdateLaneKeyTakeaways content={c.takeaways} />
      <RequestUpdateLaneNextCTA content={c.cta} />
    </StartPageShell>
  );
};
