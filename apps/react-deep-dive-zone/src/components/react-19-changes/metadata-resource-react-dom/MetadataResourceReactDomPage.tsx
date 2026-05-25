import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../getting-started/_shared/StartPageShell';

import { FollowAlongMission } from './sections/FollowAlongMission';
import { HeadHoistingFlow } from './sections/HeadHoistingFlow';
import { HeadHoistingSimulator } from './sections/HeadHoistingSimulator';
import { InternalCodePreviewSection } from './sections/InternalCodePreviewSection';
import { KeyTakeaways } from './sections/KeyTakeaways';
import { MetadataExampleSection } from './sections/MetadataExampleSection';
import { MetadataHero } from './sections/MetadataHero';
import { NextPageCTA } from './sections/NextPageCTA';
import { PreviousHeadManagementProblems } from './sections/PreviousHeadManagementProblems';
import { ReactTreeDomHeadSplit } from './sections/ReactTreeDomHeadSplit';
import { ResourceComponentsGrid } from './sections/ResourceComponentsGrid';
import { SsrSuspenseConnectionSection } from './sections/SsrSuspenseConnectionSection';
import { TodayQuestionCard } from './sections/TodayQuestionCard';
import { metadataResourceContent } from './content';

type Props = { locale: Locale };

export const MetadataResourceReactDomPage = ({ locale }: Props) => {
  const c = metadataResourceContent[locale];

  return (
    <StartPageShell>
      <MetadataHero content={c.hero} />
      <TodayQuestionCard content={c.question} />
      <PreviousHeadManagementProblems content={c.priorProblems} />
      <MetadataExampleSection content={c.example} />
      <ReactTreeDomHeadSplit content={c.treeDomSplit} />
      <ResourceComponentsGrid content={c.resources} />
      <HeadHoistingFlow content={c.hoistingFlow} />
      <SsrSuspenseConnectionSection content={c.ssrSuspense} />
      <InternalCodePreviewSection content={c.internalCode} />
      <HeadHoistingSimulator content={c.simulator} />
      <FollowAlongMission content={c.mission} />
      <KeyTakeaways content={c.takeaways} />
      <NextPageCTA content={c.nextCTA} />
    </StartPageShell>
  );
};
