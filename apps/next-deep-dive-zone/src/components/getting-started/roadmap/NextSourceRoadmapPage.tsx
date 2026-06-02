import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../shared/StartPageShell';

import { CodeAxisMap } from './sections/CodeAxisMap';
import { FinalChecklistCTA } from './sections/FinalChecklistCTA';
import { FullLearningRoadmap } from './sections/FullLearningRoadmap';
import { PersonaLearningPaths } from './sections/PersonaLearningPaths';
import { PracticeMissions } from './sections/PracticeMissions';
import { RoadmapHero } from './sections/RoadmapHero';
import { roadmapContent } from './content';

type Props = { locale: Locale };

export const NextSourceRoadmapPage = ({ locale }: Props) => {
  const c = roadmapContent[locale];

  return (
    <StartPageShell>
      <RoadmapHero content={c.hero} />
      <FullLearningRoadmap content={c.roadmap} />
      <CodeAxisMap content={c.axes} />
      <PersonaLearningPaths content={c.personas} />
      <PracticeMissions content={c.missions} />
      <FinalChecklistCTA content={c.checklist} nextStep={c.nextStep} />
    </StartPageShell>
  );
};
