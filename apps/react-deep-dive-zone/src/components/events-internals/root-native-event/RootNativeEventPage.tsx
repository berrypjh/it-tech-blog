import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../shared/StartPageShell';

import { AllNativeEventsGrid } from './sections/AllNativeEventsGrid';
import { CreateRootCodeStart } from './sections/CreateRootCodeStart';
import { EventSetupHero } from './sections/EventSetupHero';
import { ExceptionEventHints } from './sections/ExceptionEventHints';
import { FollowAlongMission } from './sections/FollowAlongMission';
import { KeyTakeaways } from './sections/KeyTakeaways';
import { ListenToAllSupportedEventsFlow } from './sections/ListenToAllSupportedEventsFlow';
import { NextPageCTA } from './sections/NextPageCTA';
import { RealCodePreview } from './sections/RealCodePreview';
import { RootContainerVisualization } from './sections/RootContainerVisualization';
import { TodayQuestionBanner } from './sections/TodayQuestionBanner';
import { rootNativeEventContent } from './content';

type Props = { locale: Locale };

export const RootNativeEventPage = ({ locale }: Props) => {
  const c = rootNativeEventContent[locale];

  return (
    <StartPageShell>
      <EventSetupHero content={c.hero} />
      <TodayQuestionBanner content={c.question} />
      <CreateRootCodeStart content={c.createRoot} />
      <RootContainerVisualization content={c.rootViz} />
      <ListenToAllSupportedEventsFlow content={c.flow} />
      <AllNativeEventsGrid content={c.allEvents} />
      <RealCodePreview content={c.realCode} />
      <ExceptionEventHints content={c.exceptions} />
      <FollowAlongMission content={c.mission} />
      <KeyTakeaways content={c.takeaways} />
      <NextPageCTA content={c.cta} />
    </StartPageShell>
  );
};
