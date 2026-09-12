import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { CommitPhasePreview } from './sections/CommitPhasePreview';
import { FlagsCodeCheckpoint } from './sections/FlagsCodeCheckpoint';
import { FlagsEffectsHero } from './sections/FlagsEffectsHero';
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
      <CommitPhasePreview content={c.commitPreview} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
