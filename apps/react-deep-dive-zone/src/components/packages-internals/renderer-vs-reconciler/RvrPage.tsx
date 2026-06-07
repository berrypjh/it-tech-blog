import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/NextStepBanner';
import { StartPageShell } from '../../shared/StartPageShell';

import { ComparisonSection } from './sections/ComparisonSection';
import { DomExampleSection } from './sections/DomExampleSection';
import { HostConfigSection } from './sections/HostConfigSection';
import { RoleSummarySection } from './sections/RoleSummarySection';
import { RvrHero } from './sections/RvrHero';
import { SharedFlowSection } from './sections/SharedFlowSection';
import { rvrContent } from './content';

type Props = { locale: Locale };

const HOST_CONFIG_SECTION_ID = 'section-host-config';
const DOM_EXAMPLE_SECTION_ID = 'section-dom-example';

export const RvrPage = ({ locale }: Props) => {
  const c = rvrContent[locale];

  return (
    <StartPageShell>
      <RvrHero content={c.hero} />
      <RoleSummarySection content={c.summary} />
      <ComparisonSection content={c.comparison} />
      <HostConfigSection content={c.hostConfig} sectionId={HOST_CONFIG_SECTION_ID} />
      <DomExampleSection content={c.domExample} sectionId={DOM_EXAMPLE_SECTION_ID} />
      <SharedFlowSection content={c.flow} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
