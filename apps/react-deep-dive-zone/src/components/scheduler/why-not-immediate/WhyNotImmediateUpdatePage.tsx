import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { ActualProcessingFlow } from './sections/ActualProcessingFlow';
import { CodeFlowPreview } from './sections/CodeFlowPreview';
import { FollowAlongMission } from './sections/FollowAlongMission';
import { ImmediateRenderingCases } from './sections/ImmediateRenderingCases';
import { IntuitionVsActualFlow } from './sections/IntuitionVsActualFlow';
import { SchedulerComparisonTable } from './sections/SchedulerComparisonTable';
import { SchedulerIntroHero } from './sections/SchedulerIntroHero';
import { SchedulerKeyTakeaways } from './sections/SchedulerKeyTakeaways';
import { TodayQuestionPanel } from './sections/TodayQuestionPanel';
import { whyNotImmediateContent } from './content';

type Props = { locale: Locale };

export const WhyNotImmediateUpdatePage = ({ locale }: Props) => {
  const c = whyNotImmediateContent[locale];

  return (
    <StartPageShell>
      <SchedulerIntroHero content={c.hero} />
      <TodayQuestionPanel content={c.question} />
      <IntuitionVsActualFlow content={c.intuition} />
      <ImmediateRenderingCases content={c.scenarios} />
      <ActualProcessingFlow content={c.flow} />
      <SchedulerComparisonTable content={c.comparison} />
      <CodeFlowPreview content={c.code} />
      <FollowAlongMission content={c.mission} />
      <SchedulerKeyTakeaways content={c.takeaways} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
