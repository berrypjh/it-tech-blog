import type { Locale } from '@it-tech-blog/preferences';

import { StartPageShell } from '../../getting-started/_shared/StartPageShell';

import { CallbackTableSection } from './sections/CallbackTableSection';
import { ErrorRouterSection } from './sections/ErrorRouterSection';
import { FollowAlongSection } from './sections/FollowAlongSection';
import { HeroSection } from './sections/HeroSection';
import { LoggingScenariosSection } from './sections/LoggingScenariosSection';
import { NextCTA } from './sections/NextCTA';
import { QuestionSection } from './sections/QuestionSection';
import { RootExampleSection } from './sections/RootExampleSection';
import { RoutingTableSection } from './sections/RoutingTableSection';
import { TakeawaysSection } from './sections/TakeawaysSection';
import { WhyNeededSection } from './sections/WhyNeededSection';
import { react19ErrorReportingContent } from './content';

type Props = { locale: Locale };

export const React19ErrorReportingPage = ({ locale }: Props) => {
  const c = react19ErrorReportingContent[locale];

  return (
    <StartPageShell>
      <HeroSection content={c.hero} />
      <QuestionSection content={c.question} />
      <WhyNeededSection content={c.why} />
      <CallbackTableSection content={c.callbackTable} />
      <RootExampleSection content={c.createRoot} />
      <RootExampleSection content={c.hydrateRoot} note={c.hydrateRoot.note} />
      <RoutingTableSection content={c.routing} />
      <LoggingScenariosSection content={c.scenarios} />
      <ErrorRouterSection content={c.router} />
      <FollowAlongSection content={c.followAlong} />
      <TakeawaysSection content={c.takeaways} />
      <NextCTA content={c.cta} />
    </StartPageShell>
  );
};
