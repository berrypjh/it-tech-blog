import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../getting-started/_shared/StartPageShell';

import { ElementFieldCards } from './sections/ElementFieldCards';
import { ElementLearningCheck } from './sections/ElementLearningCheck';
import { ElementObjectHero } from './sections/ElementObjectHero';
import { ElementShapeOverview } from './sections/ElementShapeOverview';
import { ElementSourceCheckpoint } from './sections/ElementSourceCheckpoint';
import { IsValidElementPlayground } from './sections/IsValidElementPlayground';
import { NextTypeCta } from './sections/NextTypeCta';
import { PlainObjectComparison } from './sections/PlainObjectComparison';
import { reactElementObjectStructureContent } from './content';

type Props = { locale: Locale };

export const ReactElementObjectStructurePage = ({ locale }: Props) => {
  const c = reactElementObjectStructureContent[locale];

  return (
    <StartPageShell>
      <ElementObjectHero content={c.hero} />
      <ElementShapeOverview content={c.overview} />
      <ElementFieldCards content={c.fields} />
      <ElementSourceCheckpoint content={c.checkpoint} />
      <IsValidElementPlayground content={c.isValid} />
      <PlainObjectComparison content={c.compare} />
      <ElementLearningCheck content={c.learningCheck} />
      <NextTypeCta content={c.next} />
    </StartPageShell>
  );
};
