import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { EventMappingHero } from './sections/EventMappingHero';
import { EventNameConverter } from './sections/EventNameConverter';
import { FollowAlongMission } from './sections/FollowAlongMission';
import { KeyTakeaways } from './sections/KeyTakeaways';
import { PropNativeEventCompare } from './sections/PropNativeEventCompare';
import { RealCodePreview } from './sections/RealCodePreview';
import { RegisterSimpleEventsFlow } from './sections/RegisterSimpleEventsFlow';
import { SimpleVsSpecialMapping } from './sections/SimpleVsSpecialMapping';
import { TodayQuestionBanner } from './sections/TodayQuestionBanner';
import { TwoPhaseRegistrationPreview } from './sections/TwoPhaseRegistrationPreview';
import { onClickClickContent } from './content';

type Props = { locale: Locale };

export const OnClickClickMappingPage = ({ locale }: Props) => {
  const c = onClickClickContent[locale];

  return (
    <StartPageShell>
      <EventMappingHero content={c.hero} />
      <TodayQuestionBanner content={c.question} />
      <PropNativeEventCompare content={c.compare} />
      <SimpleVsSpecialMapping content={c.mapping} />
      <RegisterSimpleEventsFlow content={c.flow} />
      <EventNameConverter content={c.converter} />
      <RealCodePreview content={c.realCode} />
      <TwoPhaseRegistrationPreview content={c.twoPhase} />
      <FollowAlongMission content={c.mission} />
      <KeyTakeaways content={c.takeaways} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
