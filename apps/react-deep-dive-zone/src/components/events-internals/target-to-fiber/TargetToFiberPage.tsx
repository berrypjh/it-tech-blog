import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { DomFiberGap } from './sections/DomFiberGap';
import { DomToFiberConversion } from './sections/DomToFiberConversion';
import { InternalKeyMechanism } from './sections/InternalKeyMechanism';
import { TargetToFiberCodeCheckpoint } from './sections/TargetToFiberCodeCheckpoint';
import { TargetToFiberHero } from './sections/TargetToFiberHero';
import { targetToFiberContent } from './content';

type Props = { locale: Locale };

export const TargetToFiberPage = ({ locale }: Props) => {
  const c = targetToFiberContent[locale];

  return (
    <StartPageShell>
      <TargetToFiberHero content={c.hero} />
      <DomFiberGap content={c.gap} />
      <DomToFiberConversion content={c.conversion} />
      <InternalKeyMechanism content={c.internalKey} />
      <TargetToFiberCodeCheckpoint content={c.checkpoint} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
