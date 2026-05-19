import type { Locale } from '@it-tech-blog/preferences';

import { CoreTakeawayBanner } from './sections/CoreTakeawayBanner';
import { CounterUpdateFlow } from './sections/CounterUpdateFlow';
import { InternalFlowDemo } from './sections/InternalFlowDemo';
import { InterpretationTable } from './sections/InterpretationTable';
import { NextPageCallout } from './sections/NextPageCallout';
import { PerspectiveComparison } from './sections/PerspectiveComparison';
import { SourceCodeReferenceCards } from './sections/SourceCodeReferenceCards';
import { UsageVsInternalsHero } from './sections/UsageVsInternalsHero';
import { usageVsInternalsContent } from './content';

type Props = { locale: Locale };

export const UsageVsInternalsPage = ({ locale }: Props) => {
  const c = usageVsInternalsContent[locale];

  return (
    <article className="mx-auto w-full max-w-[1200px] px-lg sm:px-xl lg:px-2xl py-xl lg:py-2xl">
      <div className="flex flex-col gap-xl lg:gap-2xl">
        <UsageVsInternalsHero content={c.hero} />
        <PerspectiveComparison content={c.perspectives} />
        <CounterUpdateFlow content={c.flow} />
        <InternalFlowDemo content={c.demo} />
        <InterpretationTable content={c.table} />
        <SourceCodeReferenceCards content={c.sourceCode} />
        <CoreTakeawayBanner content={c.takeaway} />
        <NextPageCallout content={c.nextStep} />
      </div>
    </article>
  );
};
