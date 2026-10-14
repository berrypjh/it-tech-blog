import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout } from '@it-tech-blog/ui';

import { PageNav } from '@/components/shared/PageNav';

import { CategoriesSection } from './sections/CategoriesSection';
import { LoopSection } from './sections/LoopSection';
import { MisconceptionsSection } from './sections/MisconceptionsSection';
import { PageHeader } from './sections/PageHeader';
import { PrinciplesSection } from './sections/PrinciplesSection';
import { ProblemSection } from './sections/ProblemSection';
import { ReferencesSection } from './sections/ReferencesSection';
import { SplitSection } from './sections/SplitSection';
import { SummarySection } from './sections/SummarySection';
import { TraceSection } from './sections/TraceSection';
import { getToc } from './toc';

export const FailureDiagnosisPage = ({ locale }: { locale: Locale }) => (
  <DocLayout toc={Object.values(getToc(locale))}>
    <PageHeader locale={locale} />
    <ProblemSection locale={locale} />
    <PrinciplesSection locale={locale} />
    <CategoriesSection locale={locale} />
    <SplitSection locale={locale} />
    <TraceSection locale={locale} />
    <LoopSection locale={locale} />
    <MisconceptionsSection locale={locale} />
    <SummarySection locale={locale} />
    <ReferencesSection locale={locale} />
    <PageNav locale={locale} prev="when-to-use-llms" next="success-criteria" />
  </DocLayout>
);
