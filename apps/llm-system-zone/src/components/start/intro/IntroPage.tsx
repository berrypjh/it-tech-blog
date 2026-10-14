import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout } from '@it-tech-blog/ui';

import { PageNav } from '@/components/shared/PageNav';

import { ExampleSection } from './sections/ExampleSection';
import { FlowSection } from './sections/FlowSection';
import { MisconceptionsSection } from './sections/MisconceptionsSection';
import { PageHeader } from './sections/PageHeader';
import { PartsSection } from './sections/PartsSection';
import { ProblemSection } from './sections/ProblemSection';
import { ReferencesSection } from './sections/ReferencesSection';
import { RolesSection } from './sections/RolesSection';
import { SummarySection } from './sections/SummarySection';
import { WhatIsSection } from './sections/WhatIsSection';
import { getToc } from './toc';

export const IntroPage = ({ locale }: { locale: Locale }) => (
  <DocLayout toc={Object.values(getToc(locale))}>
    <PageHeader locale={locale} />
    <ProblemSection locale={locale} />
    <WhatIsSection locale={locale} />
    <RolesSection locale={locale} />
    <FlowSection locale={locale} />
    <PartsSection locale={locale} />
    <ExampleSection locale={locale} />
    <MisconceptionsSection locale={locale} />
    <SummarySection locale={locale} />
    <ReferencesSection locale={locale} />
    <PageNav locale={locale} next="software-differences" />
  </DocLayout>
);
