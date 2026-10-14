import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout } from '@it-tech-blog/ui';

import { PageNav } from '@/components/shared/PageNav';

import { BoundarySection } from './sections/BoundarySection';
import { DeterministicSection } from './sections/DeterministicSection';
import { LayersSection } from './sections/LayersSection';
import { MisconceptionsSection } from './sections/MisconceptionsSection';
import { PageHeader } from './sections/PageHeader';
import { ProblemSection } from './sections/ProblemSection';
import { ReferencesSection } from './sections/ReferencesSection';
import { SummarySection } from './sections/SummarySection';
import { TypesSection } from './sections/TypesSection';
import { VariationSection } from './sections/VariationSection';
import { VocabSection } from './sections/VocabSection';
import { getToc } from './toc';

export const SoftwareDifferencesPage = ({ locale }: { locale: Locale }) => (
  <DocLayout toc={Object.values(getToc(locale))}>
    <PageHeader locale={locale} />
    <ProblemSection locale={locale} />
    <DeterministicSection locale={locale} />
    <VariationSection locale={locale} />
    <LayersSection locale={locale} />
    <TypesSection locale={locale} />
    <VocabSection locale={locale} />
    <BoundarySection locale={locale} />
    <MisconceptionsSection locale={locale} />
    <SummarySection locale={locale} />
    <ReferencesSection locale={locale} />
    <PageNav locale={locale} prev="intro" next="ai-concepts" />
  </DocLayout>
);
