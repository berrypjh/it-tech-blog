import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../shared/StartPageShell';

import { CodeCheckpointSection } from './sections/CodeCheckpointSection';
import { DuplicateRootGuardSection } from './sections/DuplicateRootGuardSection';
import { EnsureRootHero } from './sections/EnsureRootHero';
import { MicrotaskConceptSection } from './sections/MicrotaskConceptSection';
import { MiniQuizSection } from './sections/MiniQuizSection';
import { NextStepCTA } from './sections/NextStepCTA';
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
      <CodeCheckpointSection content={c.checkpoint} />
      <MicrotaskConceptSection content={c.microtask} />
      <DuplicateRootGuardSection content={c.duplicate} />
      <MiniQuizSection content={c.quiz} />
      <NextStepCTA content={c.next} />
    </StartPageShell>
  );
};
