import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/NextStepBanner';
import { StartPageShell } from '../../shared/StartPageShell';

import { ChangeSimulationSection } from './sections/ChangeSimulationSection';
import { CommitPhasePreview } from './sections/CommitPhasePreview';
import { FlagsCodeCheckpoint } from './sections/FlagsCodeCheckpoint';
import { FlagsEffectsHero } from './sections/FlagsEffectsHero';
import { FlagsMiniQuiz } from './sections/FlagsMiniQuiz';
import { FlagsRoleSection } from './sections/FlagsRoleSection';
import { RepresentativeFlagsSection } from './sections/RepresentativeFlagsSection';
import { SubtreeFlagsDeletions } from './sections/SubtreeFlagsDeletions';
import { fiberFlagsContent } from './content';

type Props = { locale: Locale };

export const FiberFlagsEffectsPage = ({ locale }: Props) => {
  const c = fiberFlagsContent[locale];

  return (
    <StartPageShell>
      <FlagsEffectsHero content={c.hero} />
      <FlagsRoleSection content={c.flagsRole} />
      <SubtreeFlagsDeletions content={c.subtree} />
      <RepresentativeFlagsSection content={c.repFlags} />
      <FlagsCodeCheckpoint content={c.checkpoint} />
      <ChangeSimulationSection content={c.simulation} />
      <CommitPhasePreview content={c.commitPreview} />
      <FlagsMiniQuiz content={c.quiz} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
