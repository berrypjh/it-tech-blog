import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { ListenerCoverage } from './sections/ListenerCoverage';
import { NonDelegatedEvents } from './sections/NonDelegatedEvents';
import { RootNativeEventCodeCheckpoint } from './sections/RootNativeEventCodeCheckpoint';
import { RootNativeEventHero } from './sections/RootNativeEventHero';
import { RootSetupFlow } from './sections/RootSetupFlow';
import { rootNativeEventContent } from './content';

type Props = { locale: Locale };

export const RootNativeEventPage = ({ locale }: Props) => {
  const c = rootNativeEventContent[locale];

  return (
    <StartPageShell>
      <RootNativeEventHero content={c.hero} />
      <RootSetupFlow content={c.setup} />
      <ListenerCoverage content={c.coverage} />
      <NonDelegatedEvents content={c.exceptions} />
      <RootNativeEventCodeCheckpoint content={c.checkpoint} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
