import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../shared/StartPageShell';

import { BeforeAfterUpdateState } from './sections/BeforeAfterUpdateState';
import { DispatchSetStateFlow } from './sections/DispatchSetStateFlow';
import { FollowCodeMission } from './sections/FollowCodeMission';
import { KeyTakeaways } from './sections/KeyTakeaways';
import { NextPageCTA } from './sections/NextPageCTA';
import { QueuePendingCircularList } from './sections/QueuePendingCircularList';
import { RealUpdateCodePreview } from './sections/RealUpdateCodePreview';
import { RenderVsCommitComparison } from './sections/RenderVsCommitComparison';
import { SetStateHero } from './sections/SetStateHero';
import { ThreeSetStateExperiment } from './sections/ThreeSetStateExperiment';
import { TodayQuestionCard } from './sections/TodayQuestionCard';
import { UpdateObjectStructure } from './sections/UpdateObjectStructure';
import { setStateFlowContent } from './content';

type Props = { locale: Locale };

export const SetStateUpdateFlowPage = ({ locale }: Props) => {
  const c = setStateFlowContent[locale];

  return (
    <StartPageShell>
      <SetStateHero content={c.hero} />
      <TodayQuestionCard content={c.question} />
      <BeforeAfterUpdateState content={c.beforeAfter} />
      <DispatchSetStateFlow content={c.dispatchFlow} />
      <UpdateObjectStructure content={c.updateObject} />
      <QueuePendingCircularList content={c.queueCircular} />
      <RealUpdateCodePreview content={c.realCode} />
      <RenderVsCommitComparison content={c.renderVsCommit} />
      <ThreeSetStateExperiment content={c.experiment} />
      <FollowCodeMission content={c.mission} />
      <KeyTakeaways content={c.summary} />
      <NextPageCTA content={c.cta} />
    </StartPageShell>
  );
};
