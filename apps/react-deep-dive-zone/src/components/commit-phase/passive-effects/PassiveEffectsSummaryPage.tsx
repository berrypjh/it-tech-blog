import type { Locale } from '@it-tech-blog/preferences';

import { FinalLaunchBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { CommitPhaseFullTimelineSection } from './sections/CommitPhaseFullTimelineSection';
import { EffectTimingCompareSection } from './sections/EffectTimingCompareSection';
import { NextChapterPreviewSection } from './sections/NextChapterPreviewSection';
import { PassiveEffectExampleSection } from './sections/PassiveEffectExampleSection';
import { PassiveEffectsHeroSection } from './sections/PassiveEffectsHeroSection';
import { PassiveEffectsPositionSection } from './sections/PassiveEffectsPositionSection';
import { PassiveMountUnmountSection } from './sections/PassiveMountUnmountSection';
import { passiveEffectsContent } from './content';

type Props = { locale: Locale };

export const PassiveEffectsSummaryPage = ({ locale }: Props) => {
  const c = passiveEffectsContent[locale];

  return (
    <StartPageShell>
      <PassiveEffectsHeroSection content={c.hero} />
      <PassiveEffectsPositionSection content={c.position} />
      <EffectTimingCompareSection content={c.compare} />
      <PassiveMountUnmountSection content={c.lifecycle} />
      <PassiveEffectExampleSection content={c.example} />
      <CommitPhaseFullTimelineSection content={c.fullTimeline} />
      <NextChapterPreviewSection content={c.nextChapter} />
      <FinalLaunchBanner content={c.finale} />
    </StartPageShell>
  );
};
