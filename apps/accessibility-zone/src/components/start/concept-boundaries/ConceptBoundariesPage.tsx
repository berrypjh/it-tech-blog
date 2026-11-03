import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout } from '@it-tech-blog/ui';

import { NextPage } from '@/components/shared/PageLink';

import { ConceptsSection } from './sections/ConceptsSection';
import { GapsSection } from './sections/GapsSection';
import { LevelsSection } from './sections/LevelsSection';
import { PageHeader } from './sections/PageHeader';
import { ReferencesSection } from './sections/ReferencesSection';
import { SummarySection } from './sections/SummarySection';
import { getToc } from './toc';

export const ConceptBoundariesPage = ({ locale }: { locale: Locale }) => (
  <DocLayout toc={Object.values(getToc(locale))}>
    <PageHeader locale={locale} />
    <ConceptsSection locale={locale} />
    <GapsSection locale={locale} />
    <LevelsSection locale={locale} />
    <SummarySection locale={locale} />
    <ReferencesSection locale={locale} />
    <NextPage locale={locale} id="barrier-report" />
  </DocLayout>
);
