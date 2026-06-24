import type { Locale } from '@it-tech-blog/preferences';

import { FinalLaunchBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { ExplorationRoutineHero } from './sections/ExplorationRoutineHero';
import { FinalExplorationRoutineSteps } from './sections/FinalExplorationRoutineSteps';
import { explorationContent } from './content';

type Props = { locale: Locale };

export const ReactRepositoryExplorationRoutinePage = ({ locale }: Props) => {
  const c = explorationContent[locale];

  return (
    <StartPageShell>
      <ExplorationRoutineHero content={c.hero} />
      <FinalExplorationRoutineSteps content={c.routine} />
      <FinalLaunchBanner content={c.finale} />
    </StartPageShell>
  );
};
