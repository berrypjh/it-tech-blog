import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../shared/StartPageShell';

import { CacheComponentsCompare } from './sections/CacheComponentsCompare';
import { Next16Hero } from './sections/Next16Hero';
import { NextPageCTA } from './sections/NextPageCTA';
import { OutdatedMaterialChecklist } from './sections/OutdatedMaterialChecklist';
import { ReadingAxisCards } from './sections/ReadingAxisCards';
import { VersionShiftTimeline } from './sections/VersionShiftTimeline';
import { next16Content } from './content';

type Props = { locale: Locale };

export const Next16SourceBasisPage = ({ locale }: Props) => {
  const c = next16Content[locale];

  return (
    <StartPageShell>
      <Next16Hero content={c.hero} />
      <VersionShiftTimeline content={c.timeline} />
      <ReadingAxisCards content={c.axes} />
      <CacheComponentsCompare content={c.cache} />
      <OutdatedMaterialChecklist content={c.checklist} />
      <NextPageCTA content={c.nextStep} />
    </StartPageShell>
  );
};
