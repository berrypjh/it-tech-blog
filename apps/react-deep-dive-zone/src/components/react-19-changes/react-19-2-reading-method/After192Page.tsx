import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/NextStepBanner';
import { StartPageShell } from '../../shared/StartPageShell';

import { AdditionalExpansionPoints } from './sections/AdditionalExpansionPoints';
import { After192Hero } from './sections/After192Hero';
import { CacheSignalFlowSection } from './sections/CacheSignalFlowSection';
import { ExpansionOverviewCards } from './sections/ExpansionOverviewCards';
import { FinalQuizSection } from './sections/FinalQuizSection';
import { PartialPreRenderingFlowSection } from './sections/PartialPreRenderingFlowSection';
import { ReleaseDiffReadingGuide } from './sections/ReleaseDiffReadingGuide';
import { ResumeFlowSection } from './sections/ResumeFlowSection';
import { SuspenseBatchingSection } from './sections/SuspenseBatchingSection';
import { TodayQuestionCard } from './sections/TodayQuestionCard';
import { VersionComparisonTable } from './sections/VersionComparisonTable';
import { after192Content } from './content';

type Props = { locale: Locale };

export const After192Page = ({ locale }: Props) => {
  const c = after192Content[locale];

  return (
    <StartPageShell>
      <After192Hero content={c.hero} />
      <TodayQuestionCard content={c.question} />
      <ExpansionOverviewCards content={c.overview} />
      <CacheSignalFlowSection content={c.cacheSignal} />
      <PartialPreRenderingFlowSection content={c.ppr} />
      <ResumeFlowSection content={c.resume} />
      <SuspenseBatchingSection content={c.batching} />
      <AdditionalExpansionPoints content={c.additional} />
      <VersionComparisonTable content={c.versionTable} />
      <ReleaseDiffReadingGuide content={c.releaseDiff} />
      <FinalQuizSection content={c.quiz} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
