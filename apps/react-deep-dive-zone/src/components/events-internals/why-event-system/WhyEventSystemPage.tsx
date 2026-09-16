import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { EventPipelineOverview } from './sections/EventPipelineOverview';
import { ListenerMisconception } from './sections/ListenerMisconception';
import { SourceEntryFiles } from './sections/SourceEntryFiles';
import { WhyEventSystemCodeCheckpoint } from './sections/WhyEventSystemCodeCheckpoint';
import { WhyEventSystemHero } from './sections/WhyEventSystemHero';
import { whyEventSystemContent } from './content';

type Props = { locale: Locale };

export const WhyEventSystemPage = ({ locale }: Props) => {
  const c = whyEventSystemContent[locale];

  return (
    <StartPageShell>
      <WhyEventSystemHero content={c.hero} />
      <ListenerMisconception content={c.misconception} />
      <EventPipelineOverview content={c.pipeline} />
      <SourceEntryFiles content={c.entryFiles} />
      <WhyEventSystemCodeCheckpoint content={c.checkpoint} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
