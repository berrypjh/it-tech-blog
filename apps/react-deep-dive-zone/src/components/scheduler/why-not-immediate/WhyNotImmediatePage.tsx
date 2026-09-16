import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { IntuitionVsReality } from './sections/IntuitionVsReality';
import { RecordToRenderFlow } from './sections/RecordToRenderFlow';
import { UpdateSituations } from './sections/UpdateSituations';
import { WhyNotImmediateCodeCheckpoint } from './sections/WhyNotImmediateCodeCheckpoint';
import { WhyNotImmediateHero } from './sections/WhyNotImmediateHero';
import { whyNotImmediateContent } from './content';

type Props = { locale: Locale };

export const WhyNotImmediatePage = ({ locale }: Props) => {
  const c = whyNotImmediateContent[locale];

  return (
    <StartPageShell>
      <WhyNotImmediateHero content={c.hero} />
      <IntuitionVsReality content={c.intuition} />
      <UpdateSituations content={c.situations} />
      <RecordToRenderFlow content={c.flow} />
      <WhyNotImmediateCodeCheckpoint content={c.checkpoint} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
