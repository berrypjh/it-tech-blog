import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/NextStepBanner';
import { StartPageShell } from '../../shared/StartPageShell';

import { ExtensionComparisonTable } from './sections/ExtensionComparisonTable';
import { ExtensionMap } from './sections/ExtensionMap';
import { FollowCodeMission } from './sections/FollowCodeMission';
import { KeyTakeaways } from './sections/KeyTakeaways';
import { LearningPriority } from './sections/LearningPriority';
import { React19HooksHero } from './sections/React19HooksHero';
import { TodayQuestionCard } from './sections/TodayQuestionCard';
import { UseActionStateSection } from './sections/UseActionStateSection';
import { UseApiSection } from './sections/UseApiSection';
import { UseEffectEventSection } from './sections/UseEffectEventSection';
import { UseOptimisticSection } from './sections/UseOptimisticSection';
import { react19HooksContent } from './content';

type Props = { locale: Locale };

export const React19HooksExtensionPage = ({ locale }: Props) => {
  const c = react19HooksContent[locale];

  return (
    <StartPageShell>
      <React19HooksHero content={c.hero} />
      <TodayQuestionCard content={c.question} />
      <ExtensionMap content={c.extensionMap} />
      <UseApiSection content={c} />
      <UseActionStateSection content={c} />
      <UseOptimisticSection content={c} />
      <UseEffectEventSection content={c} />
      <ExtensionComparisonTable content={c.compareTable} />
      <LearningPriority content={c.priority} />
      <FollowCodeMission content={c.mission} />
      <KeyTakeaways content={c.summary} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
