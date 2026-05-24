import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../getting-started/_shared/StartPageShell';

import { CommitExecutionPath } from './sections/CommitExecutionPath';
import { DependenciesComparisonFlow } from './sections/DependenciesComparisonFlow';
import { DependenciesExperiment } from './sections/DependenciesExperiment';
import { EffectFullFlow } from './sections/EffectFullFlow';
import { EffectObjectStructure } from './sections/EffectObjectStructure';
import { FollowCodeMission } from './sections/FollowCodeMission';
import { KeyTakeaways } from './sections/KeyTakeaways';
import { MisconceptionReality } from './sections/MisconceptionReality';
import { NextPageCTA } from './sections/NextPageCTA';
import { RealEffectCodePreview } from './sections/RealEffectCodePreview';
import { TodayQuestionCard } from './sections/TodayQuestionCard';
import { UseEffectHero } from './sections/UseEffectHero';
import { useEffectInternalsContent } from './content';

type Props = { locale: Locale };

export const UseEffectInternalsPage = ({ locale }: Props) => {
  const c = useEffectInternalsContent[locale];

  return (
    <StartPageShell>
      <UseEffectHero content={c.hero} />
      <TodayQuestionCard content={c.question} />
      <MisconceptionReality content={c.misconception} />
      <EffectFullFlow content={c.effectFlow} />
      <EffectObjectStructure content={c.effectObject} />
      <DependenciesComparisonFlow content={c.depsCompare} />
      <RealEffectCodePreview content={c.realCode} />
      <CommitExecutionPath content={c.commitPath} />
      <DependenciesExperiment content={c.depsExperiment} />
      <FollowCodeMission content={c.mission} />
      <KeyTakeaways content={c.summary} />
      <NextPageCTA content={c.cta} />
    </StartPageShell>
  );
};
