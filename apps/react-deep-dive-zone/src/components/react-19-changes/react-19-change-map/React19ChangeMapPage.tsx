import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../shared/StartPageShell';

import { ChangeAxisGridSection } from './sections/ChangeAxisGridSection';
import { ChangeLayerClassifierSection } from './sections/ChangeLayerClassifierSection';
import { FeatureListTrapSection } from './sections/FeatureListTrapSection';
import { FollowAlongMissionSection } from './sections/FollowAlongMissionSection';
import { HeroSection } from './sections/HeroSection';
import { KeyTakeawaysSection } from './sections/KeyTakeawaysSection';
import { NextTopicCTA } from './sections/NextTopicCTA';
import { PageVersionNote } from './sections/PageVersionNote';
import { PreviousTopicConnectionMapSection } from './sections/PreviousTopicConnectionMapSection';
import { TenPageRoadmapSection } from './sections/TenPageRoadmapSection';
import { VersionTimelineSection } from './sections/VersionTimelineSection';
import { react19ChangeMapContent } from './content';

type Props = { locale: Locale };

export const React19ChangeMapPage = ({ locale }: Props) => {
  const c = react19ChangeMapContent[locale];

  return (
    <StartPageShell>
      <HeroSection content={c.hero} />
      <FeatureListTrapSection content={c.featureListTrap} />
      <ChangeAxisGridSection content={c.changeAxes} />
      <VersionTimelineSection content={c.versionTimeline} />
      <PreviousTopicConnectionMapSection content={c.previousTopicMap} />
      <TenPageRoadmapSection content={c.tenPageRoadmap} />
      <ChangeLayerClassifierSection content={c.changeLayerClassifier} />
      <FollowAlongMissionSection content={c.followAlongMission} />
      <KeyTakeawaysSection content={c.keyTakeaways} />
      <NextTopicCTA content={c.nextCTA} />
      <PageVersionNote content={c.versionNote} />
    </StartPageShell>
  );
};
