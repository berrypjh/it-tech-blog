import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../shared/StartPageShell';

import { CommentSection } from './sections/CommentSection';
import { DevBranchSection } from './sections/DevBranchSection';
import { FeatureFlagSection } from './sections/FeatureFlagSection';
import { FlowTypeSection } from './sections/FlowTypeSection';
import { FollowAlongMissionSection } from './sections/FollowAlongMissionSection';
import { HeroSection } from './sections/HeroSection';
import { KeySummarySection } from './sections/KeySummarySection';
import { LabelingInteractionSection } from './sections/LabelingInteractionSection';
import { NextCTASection } from './sections/NextCTASection';
import { TemplateSection } from './sections/TemplateSection';
import { TodayQuestionSection } from './sections/TodayQuestionSection';
import { WhyBranchySection } from './sections/WhyBranchySection';
import { stripFlagCommentNoiseContent } from './content';

type Props = { locale: Locale };

export const StripFlagCommentNoisePage = ({ locale }: Props) => {
  const c = stripFlagCommentNoiseContent[locale];

  return (
    <StartPageShell>
      <HeroSection content={c.hero} />
      <TodayQuestionSection content={c.todayQuestion} />
      <WhyBranchySection content={c.whyBranchy} />
      <DevBranchSection content={c.devBranch} />
      <FeatureFlagSection content={c.featureFlag} />
      <FlowTypeSection content={c.flowType} />
      <CommentSection content={c.comment} />
      <LabelingInteractionSection content={c.labelingInteraction} />
      <TemplateSection content={c.template} />
      <FollowAlongMissionSection content={c.mission} />
      <KeySummarySection content={c.summary} />
      <NextCTASection content={c.nextCta} />
    </StartPageShell>
  );
};
