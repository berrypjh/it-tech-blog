import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { CurrentTreeTransitionSection } from './sections/CurrentTreeTransitionSection';
import { InputRefExampleSection } from './sections/InputRefExampleSection';
import { RefCodeCheckpointSection } from './sections/RefCodeCheckpointSection';
import { RefDetachAttachTimelineSection } from './sections/RefDetachAttachTimelineSection';
import { RefLifecycleAndMeaningSection } from './sections/RefLifecycleAndMeaningSection';
import { RenderRefRiskSection } from './sections/RenderRefRiskSection';
import { RootCurrentHeroSection } from './sections/RootCurrentHeroSection';
import { RootCurrentRefQuizSection } from './sections/RootCurrentRefQuizSection';
import { rootCurrentRefContent } from './content';

type Props = { locale: Locale };

export const RootCurrentRefPage = ({ locale }: Props) => {
  const c = rootCurrentRefContent[locale];

  return (
    <StartPageShell>
      <RootCurrentHeroSection content={c.hero} />
      <CurrentTreeTransitionSection content={c.transition} />
      <RefDetachAttachTimelineSection content={c.refTimeline} />
      <InputRefExampleSection content={c.inputRef} />
      <RefCodeCheckpointSection content={c.checkpoint} />
      <RenderRefRiskSection content={c.risk} />
      <RefLifecycleAndMeaningSection lifecycle={c.lifecycle} meaning={c.meaning} />
      <RootCurrentRefQuizSection quiz={c.quiz} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
