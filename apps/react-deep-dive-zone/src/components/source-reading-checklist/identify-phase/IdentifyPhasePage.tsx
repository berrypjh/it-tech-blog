import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { FollowAlongMissionSection } from './sections/FollowAlongMissionSection';
import { HeroSection } from './sections/HeroSection';
import { KeySummarySection } from './sections/KeySummarySection';
import { PhaseCodePreviewSection } from './sections/PhaseCodePreviewSection';
import { PhaseDetectionQuizSection } from './sections/PhaseDetectionQuizSection';
import { PhaseRoleComparisonSection } from './sections/PhaseRoleComparisonSection';
import { RepresentativeFilesSection } from './sections/RepresentativeFilesSection';
import { TodayQuestionSection } from './sections/TodayQuestionSection';
import { UpdateFlowSection } from './sections/UpdateFlowSection';
import { WhyPhaseMattersSection } from './sections/WhyPhaseMattersSection';
import { phaseDetectionContent } from './content';

type Props = { locale: Locale };

export const IdentifyPhasePage = ({ locale }: Props) => {
  const c = phaseDetectionContent[locale];

  return (
    <StartPageShell>
      <HeroSection content={c.hero} />
      <TodayQuestionSection content={c.todayQuestion} />
      <WhyPhaseMattersSection content={c.whyPhase} />
      <PhaseRoleComparisonSection content={c.roleComparison} />
      <RepresentativeFilesSection content={c.representativeFiles} />
      <UpdateFlowSection content={c.updateFlow} />
      <PhaseDetectionQuizSection content={c.quiz} />
      <PhaseCodePreviewSection content={c.codePreview} />
      <FollowAlongMissionSection content={c.mission} />
      <KeySummarySection content={c.summary} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
