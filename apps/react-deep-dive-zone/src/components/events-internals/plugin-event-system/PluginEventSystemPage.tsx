import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { EventKinds } from './sections/EventKinds';
import { ExtractToProcess } from './sections/ExtractToProcess';
import { PluginEventSystemCodeCheckpoint } from './sections/PluginEventSystemCodeCheckpoint';
import { PluginEventSystemHero } from './sections/PluginEventSystemHero';
import { PluginRegistryTable } from './sections/PluginRegistryTable';
import { pluginEventSystemContent } from './content';

type Props = { locale: Locale };

export const PluginEventSystemPage = ({ locale }: Props) => {
  const c = pluginEventSystemContent[locale];

  return (
    <StartPageShell>
      <PluginEventSystemHero content={c.hero} />
      <EventKinds content={c.kinds} />
      <PluginRegistryTable content={c.plugins} />
      <ExtractToProcess content={c.extraction} />
      <PluginEventSystemCodeCheckpoint content={c.checkpoint} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
