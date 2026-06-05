import type { Locale } from '@it-tech-blog/preferences';

import { FinalLaunchBanner } from '../../shared/FinalLaunchBanner';
import { StartPageShell } from '../../shared/StartPageShell';

import { CreateRootPracticePanel } from './sections/CreateRootPracticePanel';
import { ElementToFiberPracticePanel } from './sections/ElementToFiberPracticePanel';
import { ExplorationRoutineHero } from './sections/ExplorationRoutineHero';
import { FinalExplorationRoutineSteps } from './sections/FinalExplorationRoutineSteps';
import { FinalReadinessChecklist } from './sections/FinalReadinessChecklist';
import { QuestionBasedPathCards } from './sections/QuestionBasedPathCards';
import { ReadingFlowDiagram } from './sections/ReadingFlowDiagram';
import { explorationContent } from './content';

type Props = { locale: Locale };

const ROUTINE_SECTION_ID = 'section-routine';

export const ReactRepositoryExplorationRoutinePage = ({ locale }: Props) => {
  const c = explorationContent[locale];

  return (
    <StartPageShell>
      <ExplorationRoutineHero content={c.hero} />
      <FinalExplorationRoutineSteps content={c.routine} sectionId={ROUTINE_SECTION_ID} />
      <QuestionBasedPathCards content={c.paths} />
      <ReadingFlowDiagram content={c.flow} />
      <CreateRootPracticePanel content={c.practice1} />
      <ElementToFiberPracticePanel content={c.practice2} />
      <FinalReadinessChecklist content={c.checklist} />
      <FinalLaunchBanner content={c.finale} />
    </StartPageShell>
  );
};
