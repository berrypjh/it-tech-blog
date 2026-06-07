import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/NextStepBanner';
import { StartPageShell } from '../../shared/StartPageShell';

import { CheckpointSection } from './sections/CheckpointSection';
import { ClientServerSection } from './sections/ClientServerSection';
import { CompareSection } from './sections/CompareSection';
import { ConcernsSection } from './sections/ConcernsSection';
import { CreateHydrateFlowSection } from './sections/CreateHydrateFlowSection';
import { ReactDomHero } from './sections/ReactDomHero';
import { reactDomContent } from './content';

type Props = { locale: Locale };

const FLOW_SECTION_ID = 'section-flow';
const CHECKPOINT_SECTION_ID = 'section-checkpoint';

export const ReactDomPackagePage = ({ locale }: Props) => {
  const c = reactDomContent[locale];

  return (
    <StartPageShell>
      <ReactDomHero content={c.hero} />
      <CompareSection content={c.compare} />
      <ClientServerSection content={c.clientServer} />
      <CreateHydrateFlowSection content={c.flow} sectionId={FLOW_SECTION_ID} />
      <CheckpointSection content={c.checkpoint} sectionId={CHECKPOINT_SECTION_ID} />
      <ConcernsSection content={c.concerns} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
