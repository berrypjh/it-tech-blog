import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { DispatchPriorityHero } from './sections/DispatchPriorityHero';
import { DispatchWrapperCompare } from './sections/DispatchWrapperCompare';
import { EventPriorityTable } from './sections/EventPriorityTable';
import { EventUrgencyCards } from './sections/EventUrgencyCards';
import { FollowAlongMission } from './sections/FollowAlongMission';
import { InteractivePriorityLab } from './sections/InteractivePriorityLab';
import { KeyTakeaways } from './sections/KeyTakeaways';
import { PriorityWrapperFlow } from './sections/PriorityWrapperFlow';
import { RealCodePreview } from './sections/RealCodePreview';
import { TodayQuestionBanner } from './sections/TodayQuestionBanner';
import { UpdatePriorityContext } from './sections/UpdatePriorityContext';
import { dispatchSelectionContent } from './content';

type Props = { locale: Locale };

export const NativeEventDispatchPriorityPage = ({ locale }: Props) => {
  const c = dispatchSelectionContent[locale];

  return (
    <StartPageShell>
      <DispatchPriorityHero content={c.hero} />
      <TodayQuestionBanner content={c.question} />
      <EventUrgencyCards content={c.urgency} />
      <EventPriorityTable content={c.table} />
      <PriorityWrapperFlow content={c.flow} />
      <DispatchWrapperCompare content={c.wrappers} />
      <UpdatePriorityContext content={c.updatePriority} />
      <InteractivePriorityLab content={c.lab} />
      <RealCodePreview content={c.realCode} />
      <FollowAlongMission content={c.mission} />
      <KeyTakeaways content={c.takeaways} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
