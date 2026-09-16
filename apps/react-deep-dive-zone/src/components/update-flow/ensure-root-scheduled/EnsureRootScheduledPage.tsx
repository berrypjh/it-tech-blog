import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { DuplicateRootGuardSection } from './sections/DuplicateRootGuardSection';
import { EnsureRootCodeCheckpoint } from './sections/EnsureRootCodeCheckpoint';
import { EnsureRootHero } from './sections/EnsureRootHero';
import { MicrotaskConceptSection } from './sections/MicrotaskConceptSection';
import { RootScheduleVisualizationSection } from './sections/RootScheduleVisualizationSection';
import { TwoRolesSection } from './sections/TwoRolesSection';
import { ensureRootScheduledContent } from './content';

type Props = { locale: Locale };

export const EnsureRootScheduledPage = ({ locale }: Props) => {
  const c = ensureRootScheduledContent[locale];

  return (
    <StartPageShell>
      <EnsureRootHero content={c.hero} />
      <TwoRolesSection content={c.roles} />
      <RootScheduleVisualizationSection content={c.visualization} />
      <EnsureRootCodeCheckpoint content={c.checkpoint} />
      <MicrotaskConceptSection content={c.microtask} />
      <DuplicateRootGuardSection content={c.duplicate} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
