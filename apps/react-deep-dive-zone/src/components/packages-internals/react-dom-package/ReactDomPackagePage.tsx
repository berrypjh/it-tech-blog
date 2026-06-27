import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { CheckpointSection } from './sections/CheckpointSection';
import { ClientServerSection } from './sections/ClientServerSection';
import { CompareSection } from './sections/CompareSection';
import { ConcernsSection } from './sections/ConcernsSection';
import { CreateHydrateFlowSection } from './sections/CreateHydrateFlowSection';
import { ReactDomHero } from './sections/ReactDomHero';
import { reactDomContent } from './content';

type Props = { locale: Locale };

export const ReactDomPackagePage = ({ locale }: Props) => {
  const c = reactDomContent[locale];

  return (
    <StartPageShell>
      <ReactDomHero content={c.hero} />
      <CompareSection content={c.compare} />
      <ClientServerSection content={c.clientServer} />
      <CreateHydrateFlowSection content={c.flow} />
      <CheckpointSection content={c.checkpoint} />
      <ConcernsSection content={c.concerns} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
