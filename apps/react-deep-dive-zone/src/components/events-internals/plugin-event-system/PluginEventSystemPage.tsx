import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../getting-started/_shared/StartPageShell';

import { DispatchEventForPluginFlow } from './sections/DispatchEventForPluginFlow';
import { DispatchEventsForPluginsResponsibilities } from './sections/DispatchEventsForPluginsResponsibilities';
import { DispatchQueueCreation } from './sections/DispatchQueueCreation';
import { ExtractEventsFlow } from './sections/ExtractEventsFlow';
import { FollowAlongMission } from './sections/FollowAlongMission';
import { FormActionEventPluginSupplement } from './sections/FormActionEventPluginSupplement';
import { KeyTakeaways } from './sections/KeyTakeaways';
import { NextPageCTA } from './sections/NextPageCTA';
import { PluginRoleCards } from './sections/PluginRoleCards';
import { PluginSystemHero } from './sections/PluginSystemHero';
import { RealCodePreview } from './sections/RealCodePreview';
import { TodayQuestionBanner } from './sections/TodayQuestionBanner';
import { WhyPluginSystem } from './sections/WhyPluginSystem';
import { pluginEventSystemContent } from './content';

type Props = { locale: Locale };

export const PluginEventSystemPage = ({ locale }: Props) => {
  const c = pluginEventSystemContent[locale];

  return (
    <StartPageShell>
      <PluginSystemHero content={c.hero} />
      <TodayQuestionBanner content={c.question} />
      <WhyPluginSystem content={c.why} />
      <DispatchEventForPluginFlow content={c.dispatchRoute} />
      <DispatchEventsForPluginsResponsibilities content={c.responsibilities} />
      <ExtractEventsFlow content={c.extract} />
      <PluginRoleCards content={c.pluginRoles} />
      <DispatchQueueCreation content={c.queue} />
      <RealCodePreview content={c.realCode} />
      <FormActionEventPluginSupplement content={c.formAction} />
      <FollowAlongMission content={c.mission} />
      <KeyTakeaways content={c.takeaways} />
      <NextPageCTA content={c.cta} />
    </StartPageShell>
  );
};
