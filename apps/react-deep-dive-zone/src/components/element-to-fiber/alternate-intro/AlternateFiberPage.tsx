import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../shared/StartPageShell';

import { AlternateConnectionDiagram } from './sections/AlternateConnectionDiagram';
import { AlternateHero } from './sections/AlternateHero';
import { CurrentWorkInProgressSection } from './sections/CurrentWorkInProgressSection';
import { DoubleBufferingSection } from './sections/DoubleBufferingSection';
import { NextChapterPreview } from './sections/NextChapterPreview';
import { NextStepCTA } from './sections/NextStepCTA';
import { SourceCodeCheckpoint } from './sections/SourceCodeCheckpoint';
import { WhyAlternateNeeded } from './sections/WhyAlternateNeeded';
import { alternateFiberContent } from './content';

type Props = { locale: Locale };

export const AlternateFiberPage = ({ locale }: Props) => {
  const c = alternateFiberContent[locale];

  return (
    <StartPageShell>
      <AlternateHero content={c.hero} />
      <CurrentWorkInProgressSection content={c.pair} />
      <AlternateConnectionDiagram content={c.connection} />
      <SourceCodeCheckpoint content={c.checkpoint} />
      <DoubleBufferingSection content={c.doubleBuffering} />
      <WhyAlternateNeeded content={c.why} />
      <NextChapterPreview content={c.preview} />
      <NextStepCTA content={c.next} />
    </StartPageShell>
  );
};
