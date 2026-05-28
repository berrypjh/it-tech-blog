import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../shared/StartPageShell';

import { EventMiddleLayer } from './sections/EventMiddleLayer';
import { EventSystemHero } from './sections/EventSystemHero';
import { EventSystemOverview } from './sections/EventSystemOverview';
import { FollowAlongMission } from './sections/FollowAlongMission';
import { KeyTakeaways } from './sections/KeyTakeaways';
import { MisconceptionVsReality } from './sections/MisconceptionVsReality';
import { NextPageCTA } from './sections/NextPageCTA';
import { SourceEntryMap } from './sections/SourceEntryMap';
import { TodayQuestionBanner } from './sections/TodayQuestionBanner';
import { UserOnClickView } from './sections/UserOnClickView';
import { whyEventSystemContent } from './content';

type Props = { locale: Locale };

export const WhyEventSystemPage = ({ locale }: Props) => {
  const c = whyEventSystemContent[locale];

  return (
    <StartPageShell>
      <EventSystemHero content={c.hero} />
      <TodayQuestionBanner content={c.question} />
      <UserOnClickView content={c.userOnClick} />
      <MisconceptionVsReality content={c.misconception} />
      <EventSystemOverview content={c.overview} />
      <EventMiddleLayer content={c.middle} />
      <SourceEntryMap content={c.sourceMap} />
      <FollowAlongMission content={c.mission} />
      <KeyTakeaways content={c.takeaways} />
      <NextPageCTA content={c.cta} />
    </StartPageShell>
  );
};
