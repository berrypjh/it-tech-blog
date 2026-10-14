import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout } from '@it-tech-blog/ui';

import { PageNav } from '@/components/shared/PageNav';

import { BaselineSection } from './sections/BaselineSection';
import { BudgetSection } from './sections/BudgetSection';
import { CriteriaSection } from './sections/CriteriaSection';
import { DatasetSection } from './sections/DatasetSection';
import { DecisionSection } from './sections/DecisionSection';
import { FailureSection } from './sections/FailureSection';
import { GoalsSection } from './sections/GoalsSection';
import { GoldenSection } from './sections/GoldenSection';
import { LevelsSection } from './sections/LevelsSection';
import { MisconceptionsSection } from './sections/MisconceptionsSection';
import { PageHeader } from './sections/PageHeader';
import { ProblemSection } from './sections/ProblemSection';
import { ReferencesSection } from './sections/ReferencesSection';
import { SummarySection } from './sections/SummarySection';
import { getToc } from './toc';

export const SuccessCriteriaPage = ({ locale }: { locale: Locale }) => (
  <DocLayout toc={Object.values(getToc(locale))}>
    <PageHeader locale={locale} />
    <ProblemSection locale={locale} />
    <CriteriaSection locale={locale} />
    <LevelsSection locale={locale} />
    <FailureSection locale={locale} />
    <BudgetSection locale={locale} />
    <BaselineSection locale={locale} />
    <GoldenSection locale={locale} />
    <DatasetSection locale={locale} />
    <GoalsSection locale={locale} />
    <DecisionSection locale={locale} />
    <MisconceptionsSection locale={locale} />
    <SummarySection locale={locale} />
    <ReferencesSection locale={locale} />
    <PageNav locale={locale} prev="failure-diagnosis" next="notebook-to-service" />
  </DocLayout>
);
