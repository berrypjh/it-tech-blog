import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { ContextCarriers } from './sections/ContextCarriers';
import { LaneBranches } from './sections/LaneBranches';
import { SameCallResults } from './sections/SameCallResults';
import { UpdateToLaneCodeCheckpoint } from './sections/UpdateToLaneCodeCheckpoint';
import { UpdateToLaneHero } from './sections/UpdateToLaneHero';
import { updateToLaneContent } from './content';

type Props = { locale: Locale };

export const UpdateToLanePage = ({ locale }: Props) => {
  const c = updateToLaneContent[locale];

  return (
    <StartPageShell>
      <UpdateToLaneHero content={c.hero} />
      <SameCallResults content={c.results} />
      <LaneBranches content={c.branches} />
      <ContextCarriers content={c.carriers} />
      <UpdateToLaneCodeCheckpoint content={c.checkpoint} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
