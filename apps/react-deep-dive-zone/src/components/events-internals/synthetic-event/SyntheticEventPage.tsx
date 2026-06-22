import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { EventMethodComparison } from './sections/EventMethodComparison';
import { FollowAlongMission } from './sections/FollowAlongMission';
import { HandlerEventObjectSection } from './sections/HandlerEventObjectSection';
import { InteractiveEventInspector } from './sections/InteractiveEventInspector';
import { KeyTakeaways } from './sections/KeyTakeaways';
import { NativeEventRelationship } from './sections/NativeEventRelationship';
import { PersistModernNote } from './sections/PersistModernNote';
import { PropagationStateFlow } from './sections/PropagationStateFlow';
import { RealCodePreview } from './sections/RealCodePreview';
import { SyntheticEventHero } from './sections/SyntheticEventHero';
import { SyntheticEventStructure } from './sections/SyntheticEventStructure';
import { TodayQuestionBanner } from './sections/TodayQuestionBanner';
import { syntheticEventContent } from './content';

type Props = { locale: Locale };

export const SyntheticEventPage = ({ locale }: Props) => {
  const c = syntheticEventContent[locale];

  return (
    <StartPageShell>
      <SyntheticEventHero content={c.hero} />
      <TodayQuestionBanner content={c.question} />
      <HandlerEventObjectSection content={c.handlerE} />
      <SyntheticEventStructure content={c.structure} />
      <NativeEventRelationship content={c.relationship} />
      <EventMethodComparison content={c.methods} />
      <PropagationStateFlow content={c.propagation} />
      <PersistModernNote content={c.persist} />
      <RealCodePreview content={c.realCode} />
      <InteractiveEventInspector content={c.inspector} />
      <FollowAlongMission content={c.mission} />
      <KeyTakeaways content={c.takeaways} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
