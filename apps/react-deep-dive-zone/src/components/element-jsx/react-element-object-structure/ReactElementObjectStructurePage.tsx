import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { ElementFieldCards } from './sections/ElementFieldCards';
import { ElementLearningCheck } from './sections/ElementLearningCheck';
import { ElementObjectHero } from './sections/ElementObjectHero';
import { ElementShapeOverview } from './sections/ElementShapeOverview';
import { ElementSourceCheckpoint } from './sections/ElementSourceCheckpoint';
import { IsValidElementTable } from './sections/IsValidElementTable';
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
      <IsValidElementTable content={c.isValid} />
      <PlainObjectComparison content={c.compare} />
      <ElementLearningCheck content={c.learningCheck} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
