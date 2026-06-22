import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { FollowAlongMissionSection } from './sections/FollowAlongMissionSection';
import { HeroSection } from './sections/HeroSection';
import { KeySummarySection } from './sections/KeySummarySection';
import { NoteTemplateSection } from './sections/NoteTemplateSection';
import { SourcesSection } from './sections/SourcesSection';
import { TermCompareSection } from './sections/TermCompareSection';
import { TodayQuestionSection } from './sections/TodayQuestionSection';
import { VersionTagsSection } from './sections/VersionTagsSection';
import { VersionTimelineSection } from './sections/VersionTimelineSection';
import { WhyOldSection } from './sections/WhyOldSection';
import { correctVersionDiffContent } from './content';

type Props = { locale: Locale };

export const CorrectVersionDiffPage = ({ locale }: Props) => {
  const c = correctVersionDiffContent[locale];

  return (
    <StartPageShell>
      <HeroSection content={c.hero} />
      <TodayQuestionSection content={c.todayQuestion} />
      <WhyOldSection content={c.whyOld} />
      <VersionTagsSection content={c.versionTags} />
      <SourcesSection content={c.sources} />
      <TermCompareSection content={c.termCompare} />
      <VersionTimelineSection content={c.timeline} />
      <NoteTemplateSection content={c.noteTemplate} />
      <FollowAlongMissionSection content={c.mission} />
      <KeySummarySection content={c.summary} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
