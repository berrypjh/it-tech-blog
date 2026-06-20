import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/NextStepBanner';
import { StartPageShell } from '../../shared/StartPageShell';

import { CreateFiberHero } from './sections/CreateFiberHero';
import { DevModeDebugInfo } from './sections/DevModeDebugInfo';
import { ElementFieldMapping } from './sections/ElementFieldMapping';
import { FunctionCallFlow } from './sections/FunctionCallFlow';
import { InputOutputStructure } from './sections/InputOutputStructure';
import { SourceCodeCheckpoint } from './sections/SourceCodeCheckpoint';
import { createFiberFromElementContent } from './content';

type Props = { locale: Locale };

export const CreateFiberFromElementPage = ({ locale }: Props) => {
  const c = createFiberFromElementContent[locale];

  return (
    <StartPageShell>
      <CreateFiberHero content={c.hero} />
      <InputOutputStructure content={c.io} />
      <ElementFieldMapping content={c.mapping} />
      <SourceCodeCheckpoint content={c.checkpoint} />
      <FunctionCallFlow content={c.flow} />
      <DevModeDebugInfo content={c.devInfo} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
