import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { CallbackCards } from './sections/CallbackCards';
import { ErrorReportingCodeCheckpoint } from './sections/ErrorReportingCodeCheckpoint';
import { ErrorReportingHero } from './sections/ErrorReportingHero';
import { RoutingTable } from './sections/RoutingTable';
import { WhatChanged } from './sections/WhatChanged';
import { react19ErrorReportingContent } from './content';

type Props = { locale: Locale };

export const React19ErrorReportingPage = ({ locale }: Props) => {
  const c = react19ErrorReportingContent[locale];

  return (
    <StartPageShell>
      <ErrorReportingHero content={c.hero} />
      <WhatChanged content={c.change} />
      <CallbackCards content={c.callbacks} />
      <RoutingTable content={c.routing} />
      <ErrorReportingCodeCheckpoint content={c.checkpoint} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
