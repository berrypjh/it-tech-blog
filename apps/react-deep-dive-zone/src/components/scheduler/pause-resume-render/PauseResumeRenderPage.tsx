import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { PauseResumeCodeCheckpoint } from './sections/PauseResumeCodeCheckpoint';
import { PauseResumeHero } from './sections/PauseResumeHero';
import { StopGranularity } from './sections/StopGranularity';
import { WorkLoopSteps } from './sections/WorkLoopSteps';
import { YieldConditions } from './sections/YieldConditions';
import { pauseResumeRenderContent } from './content';

type Props = { locale: Locale };

export const PauseResumeRenderPage = ({ locale }: Props) => {
  const c = pauseResumeRenderContent[locale];

  return (
    <StartPageShell>
      <PauseResumeHero content={c.hero} />
      <WorkLoopSteps content={c.workLoop} />
      <YieldConditions content={c.conditions} />
      <StopGranularity content={c.granularity} />
      <PauseResumeCodeCheckpoint content={c.checkpoint} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
