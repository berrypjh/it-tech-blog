import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../shared/StartPageShell';

import { DocsCodeTestConnector } from './sections/DocsCodeTestConnector';
import { DocsGapCards } from './sections/DocsGapCards';
import { DocsLimitsHero } from './sections/DocsLimitsHero';
import { DocsSentenceTransformer } from './sections/DocsSentenceTransformer';
import { DocsStrengthCards } from './sections/DocsStrengthCards';
import { NextPageCTA } from './sections/NextPageCTA';
import { docsLimitsContent } from './content';

type Props = { locale: Locale };

export const DocsLimitsPage = ({ locale }: Props) => {
  const c = docsLimitsContent[locale];

  return (
    <StartPageShell>
      <DocsLimitsHero content={c.hero} />
      <DocsStrengthCards content={c.strengths} />
      <DocsGapCards content={c.gaps} />
      <DocsCodeTestConnector content={c.connector} />
      <DocsSentenceTransformer content={c.transformer} />
      <NextPageCTA content={c.nextStep} />
    </StartPageShell>
  );
};
