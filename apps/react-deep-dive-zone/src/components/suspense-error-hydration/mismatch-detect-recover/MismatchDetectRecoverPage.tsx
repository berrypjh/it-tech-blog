import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/NextStepBanner';
import { StartPageShell } from '../../shared/StartPageShell';

import { CodePreviewSection } from './sections/CodePreviewSection';
import { CompareTableSection } from './sections/CompareTableSection';
import { FollowAlongSection } from './sections/FollowAlongSection';
import { HeroSection } from './sections/HeroSection';
import { MatchingFailFlowSection } from './sections/MatchingFailFlowSection';
import { MismatchCasesSection } from './sections/MismatchCasesSection';
import { MismatchExperimentSection } from './sections/MismatchExperimentSection';
import { QuestionSection } from './sections/QuestionSection';
import { QueueRecoverFlowSection } from './sections/QueueRecoverFlowSection';
import { SuppressSection } from './sections/SuppressSection';
import { TakeawaysSection } from './sections/TakeawaysSection';
import { ThrowFlowSection } from './sections/ThrowFlowSection';
import { mismatchDetectRecoverContent } from './content';

type Props = { locale: Locale };

export const MismatchDetectRecoverPage = ({ locale }: Props) => {
  const c = mismatchDetectRecoverContent[locale];

  return (
    <StartPageShell>
      <HeroSection content={c.hero} />
      <QuestionSection content={c.question} />
      <MismatchCasesSection content={c.cases} />
      <CompareTableSection content={c.compare} />
      <MatchingFailFlowSection content={c.matchingFail} />
      <ThrowFlowSection content={c.throwFlow} />
      <QueueRecoverFlowSection content={c.queueRecover} />
      <SuppressSection content={c.suppress} />
      <CodePreviewSection content={c.code} />
      <MismatchExperimentSection content={c.experiment} />
      <FollowAlongSection content={c.followAlong} />
      <TakeawaysSection content={c.takeaways} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
