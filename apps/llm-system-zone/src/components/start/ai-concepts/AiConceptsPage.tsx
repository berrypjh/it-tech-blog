import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout } from '@it-tech-blog/ui';

import { PageNav } from '@/components/shared/PageNav';

import { AxesSection } from './sections/AxesSection';
import { CompareSection } from './sections/CompareSection';
import { GenerativeSection } from './sections/GenerativeSection';
import { LanguageSection } from './sections/LanguageSection';
import { PageHeader } from './sections/PageHeader';
import { ProblemSection } from './sections/ProblemSection';
import { ReferencesSection } from './sections/ReferencesSection';
import { SummarySection } from './sections/SummarySection';
import { getToc } from './toc';

export const AiConceptsPage = ({ locale }: { locale: Locale }) => (
  <DocLayout toc={Object.values(getToc(locale))}>
    <PageHeader locale={locale} />
    <ProblemSection locale={locale} />
    <AxesSection locale={locale} />
    <GenerativeSection locale={locale} />
    <LanguageSection locale={locale} />
    <CompareSection locale={locale} />
    <SummarySection locale={locale} />
    <ReferencesSection locale={locale} />
    <PageNav locale={locale} prev="software-differences" next="when-to-use-llms" />
  </DocLayout>
);
