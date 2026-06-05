import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/NextStepBanner';
import { StartPageShell } from '../../shared/StartPageShell';

import { DispatchCreationFlow } from './sections/DispatchCreationFlow';
import { FollowCodeMission } from './sections/FollowCodeMission';
import { HookInternalStructure } from './sections/HookInternalStructure';
import { KeyTakeaways } from './sections/KeyTakeaways';
import { MountStateImplPreview } from './sections/MountStateImplPreview';
import { TodayQuestionCard } from './sections/TodayQuestionCard';
import { UseStateDissectionExperiment } from './sections/UseStateDissectionExperiment';
import { UseStateFullProcess } from './sections/UseStateFullProcess';
import { UseStateInternalsHero } from './sections/UseStateInternalsHero';
import { useStateInternalsContent } from './content';

type Props = { locale: Locale };

export const UseStateInternalsPage = ({ locale }: Props) => {
  const c = useStateInternalsContent[locale];

  return (
    <StartPageShell>
      <UseStateInternalsHero content={c.hero} />
      <TodayQuestionCard content={c.question} />
      <UseStateFullProcess content={c.fullProcess} />
      <HookInternalStructure content={c.hookStructure} />
      <MountStateImplPreview content={c.mountStateImpl} />
      <DispatchCreationFlow content={c.dispatch} />
      <UseStateDissectionExperiment content={c.experiment} />
      <FollowCodeMission content={c.mission} />
      <KeyTakeaways content={c.summary} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
