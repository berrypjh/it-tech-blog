import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { CurrentTreeTransitionSection } from './sections/CurrentTreeTransitionSection';
import { InputRefExampleSection } from './sections/InputRefExampleSection';
import { RefCodeCheckpoint } from './sections/RefCodeCheckpoint';
import { RefDetachAttachTimelineSection } from './sections/RefDetachAttachTimelineSection';
import { RefLifecycleSection } from './sections/RefLifecycleSection';
import { RenderRefRiskSection } from './sections/RenderRefRiskSection';
import { RootCurrentHeroSection } from './sections/RootCurrentHeroSection';
import { RootCurrentMeaningSection } from './sections/RootCurrentMeaningSection';
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
      <RefCodeCheckpoint content={c.checkpoint} />
      <RenderRefRiskSection content={c.risk} />
      <RefLifecycleSection content={c.lifecycle} />
      <RootCurrentMeaningSection content={c.meaning} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
