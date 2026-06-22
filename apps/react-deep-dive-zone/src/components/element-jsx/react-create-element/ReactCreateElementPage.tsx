import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { CreateElementFlow } from './sections/CreateElementFlow';
import { CreateElementHero } from './sections/CreateElementHero';
import { CreateElementInputStructure } from './sections/CreateElementInputStructure';
import { CreateElementSourceCheckpoint } from './sections/CreateElementSourceCheckpoint';
import { CreateElementTransformCard } from './sections/CreateElementTransformCard';
import { JsxCreateElementComparison } from './sections/JsxCreateElementComparison';
import { JsxRuntimeCreateElementRelation } from './sections/JsxRuntimeCreateElementRelation';
import { reactCreateElementContent } from './content';

type Props = { locale: Locale };

export const ReactCreateElementPage = ({ locale }: Props) => {
  const c = reactCreateElementContent[locale];

  return (
    <StartPageShell>
      <CreateElementHero content={c.hero} />
      <JsxCreateElementComparison content={c.compare} />
      <CreateElementInputStructure content={c.input} />
      <CreateElementSourceCheckpoint content={c.checkpoint} />
      <CreateElementFlow content={c.flow} />
      <JsxRuntimeCreateElementRelation content={c.relation} />
      <CreateElementTransformCard content={c.transform} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
