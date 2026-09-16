import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { ApplySteps } from './sections/ApplySteps';
import { BehaviorTable } from './sections/BehaviorTable';
import { DependencySplit } from './sections/DependencySplit';
import { RoleCards } from './sections/RoleCards';
import { UseEffectEventCodeCheckpoint } from './sections/UseEffectEventCodeCheckpoint';
import { UseEffectEventHero } from './sections/UseEffectEventHero';
import { useEffectEventContent } from './content';

type Props = { locale: Locale };

export const UseEffectEventDesignPage = ({ locale }: Props) => {
  const c = useEffectEventContent[locale];

  return (
    <StartPageShell>
      <UseEffectEventHero content={c.hero} />
      <DependencySplit content={c.deps} />
      <RoleCards content={c.roles} />
      <ApplySteps content={c.apply} />
      <BehaviorTable content={c.behavior} />
      <UseEffectEventCodeCheckpoint content={c.checkpoint} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
