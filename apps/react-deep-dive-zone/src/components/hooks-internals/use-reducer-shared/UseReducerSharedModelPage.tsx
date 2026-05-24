import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../getting-started/_shared/StartPageShell';

import { ApiShapeComparison } from './sections/ApiShapeComparison';
import { BasicStateReducerExplanation } from './sections/BasicStateReducerExplanation';
import { FollowCodeMission } from './sections/FollowCodeMission';
import { InternalConnectionMap } from './sections/InternalConnectionMap';
import { KeyTakeaways } from './sections/KeyTakeaways';
import { NextPageCTA } from './sections/NextPageCTA';
import { ReducerUpdateFlow } from './sections/ReducerUpdateFlow';
import { SharedStructureTable } from './sections/SharedStructureTable';
import { TodayQuestionCard } from './sections/TodayQuestionCard';
import { UpdateStateCodePreview } from './sections/UpdateStateCodePreview';
import { UseReducerSharedHero } from './sections/UseReducerSharedHero';
import { WhenDifferenceAppears } from './sections/WhenDifferenceAppears';
import { useReducerSharedContent } from './content';

type Props = { locale: Locale };

export const UseReducerSharedModelPage = ({ locale }: Props) => {
  const c = useReducerSharedContent[locale];

  return (
    <StartPageShell>
      <UseReducerSharedHero content={c.hero} />
      <TodayQuestionCard content={c.question} />
      <ApiShapeComparison content={c.apiCompare} />
      <SharedStructureTable content={c.sharedTable} />
      <BasicStateReducerExplanation content={c.basicReducer} />
      <UpdateStateCodePreview content={c.updateStatePreview} />
      <ReducerUpdateFlow content={c.reducerFlow} />
      <WhenDifferenceAppears content={c.whenDifference} />
      <InternalConnectionMap content={c.connectionMap} />
      <FollowCodeMission content={c.mission} />
      <KeyTakeaways content={c.summary} />
      <NextPageCTA content={c.cta} />
    </StartPageShell>
  );
};
