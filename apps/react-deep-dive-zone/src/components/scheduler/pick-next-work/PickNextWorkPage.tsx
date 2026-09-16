import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { MicrotaskTiming } from './sections/MicrotaskTiming';
import { PickNextWorkCodeCheckpoint } from './sections/PickNextWorkCodeCheckpoint';
import { PickNextWorkHero } from './sections/PickNextWorkHero';
import { SelectionFilters } from './sections/SelectionFilters';
import { SyncAsyncPaths } from './sections/SyncAsyncPaths';
import { pickNextWorkContent } from './content';

type Props = { locale: Locale };

export const PickNextWorkPage = ({ locale }: Props) => {
  const c = pickNextWorkContent[locale];

  return (
    <StartPageShell>
      <PickNextWorkHero content={c.hero} />
      <MicrotaskTiming content={c.microtask} />
      <SelectionFilters content={c.filters} />
      <SyncAsyncPaths content={c.paths} />
      <PickNextWorkCodeCheckpoint content={c.checkpoint} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
