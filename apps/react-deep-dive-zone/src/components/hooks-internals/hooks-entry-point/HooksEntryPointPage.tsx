import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { HookByHookTable } from './sections/HookByHookTable';
import { HookEntryFlowOverview } from './sections/HookEntryFlowOverview';
import { HooksEntryCodeCheckpoint } from './sections/HooksEntryCodeCheckpoint';
import { HooksEntryPointHero } from './sections/HooksEntryPointHero';
import { WhyDispatcherExists } from './sections/WhyDispatcherExists';
import { hooksEntryPointContent } from './content';

type Props = { locale: Locale };

export const HooksEntryPointPage = ({ locale }: Props) => {
  const c = hooksEntryPointContent[locale];

  return (
    <StartPageShell>
      <HooksEntryPointHero content={c.hero} />
      <HookEntryFlowOverview content={c.overview} />
      <WhyDispatcherExists content={c.dispatcher} />
      <HookByHookTable content={c.hookTable} />
      <HooksEntryCodeCheckpoint content={c.checkpoint} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
