import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { ElementKeyHero } from './sections/ElementKeyHero';
import { ElementKeyPosition } from './sections/ElementKeyPosition';
import { FiberReuseConnection } from './sections/FiberReuseConnection';
import { KeyMisconceptions } from './sections/KeyMisconceptions';
import { KeyPropsSeparation } from './sections/KeyPropsSeparation';
import { KeySourceCheckpoint } from './sections/KeySourceCheckpoint';
import { ListKeyScene } from './sections/ListKeyScene';
import { reactElementKeySeparatedContent } from './content';

type Props = { locale: Locale };

export const ReactElementKeySeparatedPage = ({ locale }: Props) => {
  const c = reactElementKeySeparatedContent[locale];

  return (
    <StartPageShell>
      <ElementKeyHero content={c.hero} />
      <ListKeyScene content={c.list} />
      <ElementKeyPosition content={c.position} />
      <KeyPropsSeparation content={c.separation} />
      <KeySourceCheckpoint content={c.checkpoint} />
      <KeyMisconceptions content={c.misconceptions} />
      <FiberReuseConnection content={c.fiber} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
