import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout } from '@it-tech-blog/ui';

import { PageNav } from '@/components/shared/PageNav';

import { CompareSection } from './sections/CompareSection';
import { ExperimentSection } from './sections/ExperimentSection';
import { FlowSection } from './sections/FlowSection';
import { HandoffSection } from './sections/HandoffSection';
import { InspectionSection } from './sections/InspectionSection';
import { MisconceptionsSection } from './sections/MisconceptionsSection';
import { PageHeader } from './sections/PageHeader';
import { PurposeSection } from './sections/PurposeSection';
import { RecordSection } from './sections/RecordSection';
import { ReferencesSection } from './sections/ReferencesSection';
import { SummarySection } from './sections/SummarySection';
import { ThresholdSection } from './sections/ThresholdSection';
import { WrapupSection } from './sections/WrapupSection';
import { getToc } from './toc';

export const NotebookToServicePage = ({ locale }: { locale: Locale }) => (
  <DocLayout toc={Object.values(getToc(locale))}>
    <PageHeader locale={locale} />
    <PurposeSection locale={locale} />
    <InspectionSection locale={locale} />
    <ExperimentSection locale={locale} />
    <ThresholdSection locale={locale} />
    <RecordSection locale={locale} />
    <CompareSection locale={locale} />
    <HandoffSection locale={locale} />
    <FlowSection locale={locale} />
    <MisconceptionsSection locale={locale} />
    <WrapupSection locale={locale} />
    <SummarySection locale={locale} />
    <ReferencesSection locale={locale} />
    <PageNav locale={locale} prev="success-criteria" />
  </DocLayout>
);
