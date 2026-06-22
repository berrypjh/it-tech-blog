import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { EagerBailoutCodeCheckpoint } from './sections/EagerBailoutCodeCheckpoint';
import { EagerBailoutFlowSection } from './sections/EagerBailoutFlowSection';
import { EagerBailoutHero } from './sections/EagerBailoutHero';
import { EmptyQueueReasonSection } from './sections/EmptyQueueReasonSection';
import { SameStateExamplesSection } from './sections/SameStateExamplesSection';
import { UpdateVsRenderScheduleSection } from './sections/UpdateVsRenderScheduleSection';
import { eagerBailoutContent } from './content';

type Props = { locale: Locale };

export const EagerBailoutPage = ({ locale }: Props) => {
  const c = eagerBailoutContent[locale];

  return (
    <StartPageShell>
      <EagerBailoutHero content={c.hero} />
      <SameStateExamplesSection content={c.sameStateExamples} />
      <EagerBailoutFlowSection content={c.flow} />
      <EagerBailoutCodeCheckpoint content={c.checkpoint} />
      <EmptyQueueReasonSection content={c.queueReason} />
      <UpdateVsRenderScheduleSection content={c.scheduleTable} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
