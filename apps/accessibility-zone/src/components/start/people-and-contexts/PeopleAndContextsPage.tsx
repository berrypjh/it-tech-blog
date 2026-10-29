import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout } from '@it-tech-blog/ui';

import { NextPage } from '@/components/shared/PageLink';

import { CaseSection } from './sections/CaseSection';
import { CombinedSection } from './sections/CombinedSection';
import { NeedsSection } from './sections/NeedsSection';
import { OneTaskSection } from './sections/OneTaskSection';
import { PageHeader } from './sections/PageHeader';
import { ReferencesSection } from './sections/ReferencesSection';
import { SimulationSection } from './sections/SimulationSection';
import { SummarySection } from './sections/SummarySection';
import { getToc } from './toc';

export const PeopleAndContextsPage = ({ locale }: { locale: Locale }) => (
  <DocLayout toc={Object.values(getToc(locale))}>
    <PageHeader locale={locale} />
    <NeedsSection locale={locale} />
    <CombinedSection locale={locale} />
    <OneTaskSection locale={locale} />
    <SimulationSection locale={locale} />
    <CaseSection locale={locale} />
    <SummarySection locale={locale} />
    <ReferencesSection locale={locale} />
    <NextPage locale={locale} id="access-methods" />
  </DocLayout>
);
