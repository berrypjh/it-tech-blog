import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { CapabilityTable } from './sections/CapabilityTable';
import { ServerCallSteps } from './sections/ServerCallSteps';
import { ServerComponentsHero } from './sections/ServerComponentsHero';
import { ServerContractCodeCheckpoint } from './sections/ServerContractCodeCheckpoint';
import { ThreeKindCards } from './sections/ThreeKindCards';
import { TwoDirectives } from './sections/TwoDirectives';
import { serverComponentsContractContent } from './content';

type Props = { locale: Locale };

export const ServerComponentsContractPage = ({ locale }: Props) => {
  const c = serverComponentsContractContent[locale];

  return (
    <StartPageShell>
      <ServerComponentsHero content={c.hero} />
      <ThreeKindCards content={c.kinds} />
      <TwoDirectives content={c.directives} />
      <ServerCallSteps content={c.callFlow} />
      <CapabilityTable content={c.capabilities} />
      <ServerContractCodeCheckpoint content={c.checkpoint} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
