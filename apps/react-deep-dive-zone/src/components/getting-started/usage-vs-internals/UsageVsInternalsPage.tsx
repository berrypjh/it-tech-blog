import type { Locale } from '@it-tech-blog/preferences';

import { NextStepBanner } from '../../shared/banner';
import { StartPageShell } from '../../shared/shell';

import { CoreTakeawayBanner } from './sections/CoreTakeawayBanner';
import { CounterUpdateFlow } from './sections/CounterUpdateFlow';
import { InternalFlowDemo } from './sections/InternalFlowDemo';
import { InterpretationTable } from './sections/InterpretationTable';
import { PerspectiveComparison } from './sections/PerspectiveComparison';
import { SourceCodeReferenceCards } from './sections/SourceCodeReferenceCards';
import { UsageVsInternalsHero } from './sections/UsageVsInternalsHero';
import { usageVsInternalsContent } from './content';

type Props = { locale: Locale };

export const UsageVsInternalsPage = ({ locale }: Props) => {
  const c = usageVsInternalsContent[locale];

  return (
    <StartPageShell>
      <UsageVsInternalsHero content={c.hero} />
      <PerspectiveComparison content={c.perspectives} />
      <CounterUpdateFlow content={c.flow} />
      <InternalFlowDemo content={c.demo} />
      <InterpretationTable content={c.table} />
      <SourceCodeReferenceCards content={c.sourceCode} />
      <CoreTakeawayBanner content={c.takeaway} />
      <NextStepBanner content={c.nextStep} />
    </StartPageShell>
  );
};
