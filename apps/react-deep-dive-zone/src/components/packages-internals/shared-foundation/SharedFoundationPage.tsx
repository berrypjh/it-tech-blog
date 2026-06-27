import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { ClientImportSection } from './sections/ClientImportSection';
import { ConnectionDiagram } from './sections/ConnectionDiagram';
import { FilesSection } from './sections/FilesSection';
import { SharedHero } from './sections/SharedHero';
import { SymbolsCheckpoint } from './sections/SymbolsCheckpoint';
import { WhyShared } from './sections/WhyShared';
import { sharedContent } from './content';

type Props = { locale: Locale };

export const SharedFoundationPage = ({ locale }: Props) => {
  const c = sharedContent[locale];

  return (
    <StartPageShell>
      <SharedHero content={c.hero} />
      <WhyShared content={c.why} />
      <FilesSection content={c.files} />
      <SymbolsCheckpoint content={c.symbolsCheckpoint} />
      <ClientImportSection content={c.clientImport} />
      <ConnectionDiagram content={c.connection} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
