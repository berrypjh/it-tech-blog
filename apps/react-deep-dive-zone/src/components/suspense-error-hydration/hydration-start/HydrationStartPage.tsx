import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../shared/StartPageShell';

import { CodePreviewSection } from './sections/CodePreviewSection';
import { CreateVsHydrateSection } from './sections/CreateVsHydrateSection';
import { DomFiberMatcherSection } from './sections/DomFiberMatcherSection';
import { EnterFlowSection } from './sections/EnterFlowSection';
import { FollowAlongSection } from './sections/FollowAlongSection';
import { HeroSection } from './sections/HeroSection';
import { HydrationStatesSection } from './sections/HydrationStatesSection';
import { NextCTA } from './sections/NextCTA';
import { QuestionSection } from './sections/QuestionSection';
import { ServerHtmlAndCallSection } from './sections/ServerHtmlAndCallSection';
import { TakeawaysSection } from './sections/TakeawaysSection';
import { hydrationStartContent } from './content';

type Props = { locale: Locale };

export const HydrationStartPage = ({ locale }: Props) => {
  const c = hydrationStartContent[locale];

  return (
    <StartPageShell>
      <HeroSection content={c.hero} />
      <QuestionSection content={c.question} />
      <CreateVsHydrateSection content={c.compare} />
      <ServerHtmlAndCallSection serverHtml={c.serverHtml} hydrateCall={c.hydrateCall} />
      <EnterFlowSection content={c.enterFlow} />
      <HydrationStatesSection content={c.states} />
      <CodePreviewSection content={c.code} />
      <DomFiberMatcherSection content={c.matcher} />
      <FollowAlongSection content={c.followAlong} />
      <TakeawaysSection content={c.takeaways} />
      <NextCTA content={c.cta} />
    </StartPageShell>
  );
};
