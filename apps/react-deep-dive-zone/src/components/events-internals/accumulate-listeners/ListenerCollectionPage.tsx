import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../shared/StartPageShell';

import { AccumulateSinglePhaseFlow } from './sections/AccumulateSinglePhaseFlow';
import { BubbleListenerCollection } from './sections/BubbleListenerCollection';
import { CaptureListenerCollection } from './sections/CaptureListenerCollection';
import { DomFiberTreeCompare } from './sections/DomFiberTreeCompare';
import { FollowAlongMission } from './sections/FollowAlongMission';
import { InteractiveListenerCollector } from './sections/InteractiveListenerCollector';
import { KeyTakeaways } from './sections/KeyTakeaways';
import { ListenerCollectionHero } from './sections/ListenerCollectionHero';
import { NestedJsxExample } from './sections/NestedJsxExample';
import { NextPageCTA } from './sections/NextPageCTA';
import { RealCodePreview } from './sections/RealCodePreview';
import { TodayQuestionBanner } from './sections/TodayQuestionBanner';
import { listenerCollectionContent } from './content';

type Props = { locale: Locale };

export const ListenerCollectionPage = ({ locale }: Props) => {
  const c = listenerCollectionContent[locale];

  return (
    <StartPageShell>
      <ListenerCollectionHero content={c.hero} />
      <TodayQuestionBanner content={c.question} />
      <NestedJsxExample content={c.nested} />
      <DomFiberTreeCompare content={c.compare} />
      <CaptureListenerCollection content={c.capture} />
      <BubbleListenerCollection content={c.bubble} />
      <AccumulateSinglePhaseFlow content={c.accumulate} />
      <RealCodePreview content={c.realCode} />
      <InteractiveListenerCollector content={c.collector} />
      <FollowAlongMission content={c.mission} />
      <KeyTakeaways content={c.takeaways} />
      <NextPageCTA content={c.cta} />
    </StartPageShell>
  );
};
