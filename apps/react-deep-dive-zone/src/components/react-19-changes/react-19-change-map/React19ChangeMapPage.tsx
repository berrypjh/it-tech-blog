import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { ChangeMapCodeCheckpoint } from './sections/ChangeMapCodeCheckpoint';
import { ChangeMapHero } from './sections/ChangeMapHero';
import { ChapterRoadmap } from './sections/ChapterRoadmap';
import { ListVsStructure } from './sections/ListVsStructure';
import { PreviousChapterMap } from './sections/PreviousChapterMap';
import { SixAxesCards } from './sections/SixAxesCards';
import { VersionTimeline } from './sections/VersionTimeline';
import { react19ChangeMapContent } from './content';

type Props = { locale: Locale };

export const React19ChangeMapPage = ({ locale }: Props) => {
  const c = react19ChangeMapContent[locale];

  return (
    <StartPageShell>
      <ChangeMapHero content={c.hero} />
      <ListVsStructure content={c.trap} />
      <SixAxesCards content={c.axes} />
      <VersionTimeline content={c.versions} />
      <PreviousChapterMap content={c.bridgeMap} />
      <ChapterRoadmap content={c.roadmap} />
      <ChangeMapCodeCheckpoint content={c.checkpoint} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
