import type { Locale } from '@it-tech-blog/preferences';

import { FinalLaunchBanner } from '../../shared/FinalLaunchBanner';
import { StartPageShell } from '../../shared/StartPageShell';

import { ExplorationRoutineHero } from './sections/ExplorationRoutineHero';
import { FinalExplorationRoutineSteps } from './sections/FinalExplorationRoutineSteps';
import { explorationContent } from './content';

type Props = { locale: Locale };

const ROUTINE_SECTION_ID = 'section-routine';

export const ReactRepositoryExplorationRoutinePage = ({ locale }: Props) => {
  const c = explorationContent[locale];

  return (
    <StartPageShell>
      <ExplorationRoutineHero content={c.hero} />
      <FinalExplorationRoutineSteps content={c.routine} sectionId={ROUTINE_SECTION_ID} />
      <FinalLaunchBanner content={c.finale} />
    </StartPageShell>
  );
};
