import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { PreventVsStop } from './sections/PreventVsStop';
import { SyntheticEventCodeCheckpoint } from './sections/SyntheticEventCodeCheckpoint';
import { SyntheticEventHero } from './sections/SyntheticEventHero';
import { SyntheticEventStructure } from './sections/SyntheticEventStructure';
import { WhyWrapReasons } from './sections/WhyWrapReasons';
import { syntheticEventContent } from './content';

type Props = { locale: Locale };

export const SyntheticEventPage = ({ locale }: Props) => {
  const c = syntheticEventContent[locale];

  return (
    <StartPageShell>
      <SyntheticEventHero content={c.hero} />
      <SyntheticEventStructure content={c.structure} />
      <PreventVsStop content={c.control} />
      <WhyWrapReasons content={c.reasons} />
      <SyntheticEventCodeCheckpoint content={c.checkpoint} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
