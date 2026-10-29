import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout } from '@it-tech-blog/ui';

import { NextPage } from '@/components/shared/PageLink';

import { CaseSection } from './sections/CaseSection';
import { MethodsSection } from './sections/MethodsSection';
import { OneTaskSection } from './sections/OneTaskSection';
import { PageHeader } from './sections/PageHeader';
import { PathsSection } from './sections/PathsSection';
import { RealCheckSection } from './sections/RealCheckSection';
import { ReferencesSection } from './sections/ReferencesSection';
import { SummarySection } from './sections/SummarySection';
import { getToc } from './toc';

export const AccessMethodsPage = ({ locale }: { locale: Locale }) => (
  <DocLayout toc={Object.values(getToc(locale))}>
    <PageHeader locale={locale} />
    <PathsSection locale={locale} />
    <MethodsSection locale={locale} />
    <OneTaskSection locale={locale} />
    <RealCheckSection locale={locale} />
    <CaseSection locale={locale} />
    <SummarySection locale={locale} />
    <ReferencesSection locale={locale} />
    <NextPage locale={locale} id="concept-boundaries" />
  </DocLayout>
);
