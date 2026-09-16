import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { RefAsPropCodeCheckpoint } from './sections/RefAsPropCodeCheckpoint';
import { RefAsPropHero } from './sections/RefAsPropHero';
import { RefPathSteps } from './sections/RefPathSteps';
import { VersionDiffTable } from './sections/VersionDiffTable';
import { WhatMovedCards } from './sections/WhatMovedCards';
import { WrapperGap } from './sections/WrapperGap';
import { refAsPropElementShapeContent } from './content';

type Props = { locale: Locale };

export const RefAsPropElementShapePage = ({ locale }: Props) => {
  const c = refAsPropElementShapeContent[locale];

  return (
    <StartPageShell>
      <RefAsPropHero content={c.hero} />
      <WrapperGap content={c.wrapper} />
      <RefPathSteps content={c.path} />
      <WhatMovedCards content={c.changes} />
      <VersionDiffTable content={c.diff} />
      <RefAsPropCodeCheckpoint content={c.checkpoint} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
