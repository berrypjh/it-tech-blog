import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { ComparisonSection } from './sections/ComparisonSection';
import { DomExampleSection } from './sections/DomExampleSection';
import { HostConfigSection } from './sections/HostConfigSection';
import { RoleSummarySection } from './sections/RoleSummarySection';
import { RvrHero } from './sections/RvrHero';
import { SharedFlowSection } from './sections/SharedFlowSection';
import { rvrContent } from './content';

type Props = { locale: Locale };

export const RvrPage = ({ locale }: Props) => {
  const c = rvrContent[locale];

  return (
    <StartPageShell>
      <RvrHero content={c.hero} />
      <RoleSummarySection content={c.summary} />
      <ComparisonSection content={c.comparison} />
      <HostConfigSection content={c.hostConfig} />
      <DomExampleSection content={c.domExample} />
      <SharedFlowSection content={c.flow} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
