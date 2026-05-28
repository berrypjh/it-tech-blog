import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../shared/StartPageShell';

import { EventMappingHero } from './sections/EventMappingHero';
import { EventNameConverter } from './sections/EventNameConverter';
import { FollowAlongMission } from './sections/FollowAlongMission';
import { KeyTakeaways } from './sections/KeyTakeaways';
import { NextPageCTA } from './sections/NextPageCTA';
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
      <NextPageCTA content={c.cta} />
    </StartPageShell>
  );
};
