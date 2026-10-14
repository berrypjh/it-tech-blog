import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout } from '@it-tech-blog/ui';

import { PageNav } from '@/components/shared/PageNav';

import { CompareSection } from './sections/CompareSection';
import { CriteriaSection } from './sections/CriteriaSection';
import { MisconceptionsSection } from './sections/MisconceptionsSection';
import { MlSection } from './sections/MlSection';
import { PageHeader } from './sections/PageHeader';
import { ReferencesSection } from './sections/ReferencesSection';
import { RetrievalSection } from './sections/RetrievalSection';
import { SplitSection } from './sections/SplitSection';
import { SummarySection } from './sections/SummarySection';
import { TreeSection } from './sections/TreeSection';
import { getToc } from './toc';

export const WhenToUseLlmsPage = ({ locale }: { locale: Locale }) => (
  <DocLayout toc={Object.values(getToc(locale))}>
    <PageHeader locale={locale} />
    <SplitSection locale={locale} />
    <RetrievalSection locale={locale} />
    <MlSection locale={locale} />
    <CompareSection locale={locale} />
    <CriteriaSection locale={locale} />
    <TreeSection locale={locale} />
    <MisconceptionsSection locale={locale} />
    <SummarySection locale={locale} />
    <ReferencesSection locale={locale} />
    <PageNav locale={locale} prev="ai-concepts" next="failure-diagnosis" />
  </DocLayout>
);
