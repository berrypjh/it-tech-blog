import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { ComponentCallPath } from './sections/ComponentCallPath';
import { DispatcherSwitchCompare } from './sections/DispatcherSwitchCompare';
import { RenderWithHooksCodeCheckpoint } from './sections/RenderWithHooksCodeCheckpoint';
import { RenderWithHooksHero } from './sections/RenderWithHooksHero';
import { RenderWithHooksPhases } from './sections/RenderWithHooksPhases';
import { renderWithHooksContent } from './content';

type Props = { locale: Locale };

export const RenderWithHooksPage = ({ locale }: Props) => {
  const c = renderWithHooksContent[locale];

  return (
    <StartPageShell>
      <RenderWithHooksHero content={c.hero} />
      <ComponentCallPath content={c.callPath} />
      <RenderWithHooksPhases content={c.phases} />
      <DispatcherSwitchCompare content={c.dispatcherSwitch} />
      <RenderWithHooksCodeCheckpoint content={c.checkpoint} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
