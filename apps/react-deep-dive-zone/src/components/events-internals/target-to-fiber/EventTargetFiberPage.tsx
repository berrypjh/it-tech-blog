import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/NextStepBanner';
import { StartPageShell } from '../../shared/StartPageShell';

import { BrowserDomTargetSection } from './sections/BrowserDomTargetSection';
import { DomFiberMappingLab } from './sections/DomFiberMappingLab';
import { DomToFiberFlow } from './sections/DomToFiberFlow';
import { FollowAlongMission } from './sections/FollowAlongMission';
import { HydrationBlockedPreview } from './sections/HydrationBlockedPreview';
import { KeyTakeaways } from './sections/KeyTakeaways';
import { PluginEventSystemHandoff } from './sections/PluginEventSystemHandoff';
import { ReactFiberTargetSection } from './sections/ReactFiberTargetSection';
import { RealCodePreview } from './sections/RealCodePreview';
import { TargetFiberHero } from './sections/TargetFiberHero';
import { TodayQuestionBanner } from './sections/TodayQuestionBanner';
import { targetFiberContent } from './content';

type Props = { locale: Locale };

export const EventTargetFiberPage = ({ locale }: Props) => {
  const c = targetFiberContent[locale];

  return (
    <StartPageShell>
      <TargetFiberHero content={c.hero} />
      <TodayQuestionBanner content={c.question} />
      <BrowserDomTargetSection content={c.domTarget} />
      <ReactFiberTargetSection content={c.fiberTarget} />
      <DomToFiberFlow content={c.flow} />
      <HydrationBlockedPreview content={c.hydration} />
      <PluginEventSystemHandoff content={c.handoff} />
      <RealCodePreview content={c.realCode} />
      <DomFiberMappingLab content={c.lab} />
      <FollowAlongMission content={c.mission} />
      <KeyTakeaways content={c.takeaways} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
