import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout } from '@it-tech-blog/ui';

import { DesignSystemSection } from './sections/DesignSystemSection';
import { MisconceptionsSection } from './sections/MisconceptionsSection';
import { PageHeader } from './sections/PageHeader';
import { ReferencesSection } from './sections/ReferencesSection';
import { SemanticHtmlSection } from './sections/SemanticHtmlSection';
import { StandardsSection } from './sections/StandardsSection';
import { SummarySection } from './sections/SummarySection';
import { UsabilitySection } from './sections/UsabilitySection';
import { WhatIsSection } from './sections/WhatIsSection';
import { WhoForSection } from './sections/WhoForSection';
import { WhyFrontendSection } from './sections/WhyFrontendSection';
import { getToc } from './toc';

export const IntroPage = ({ locale }: { locale: Locale }) => (
  <DocLayout toc={Object.values(getToc(locale))}>
    <PageHeader locale={locale} />
    <WhatIsSection locale={locale} />
    <WhoForSection locale={locale} />
    <WhyFrontendSection locale={locale} />
    <UsabilitySection locale={locale} />
    <SemanticHtmlSection locale={locale} />
    <DesignSystemSection locale={locale} />
    <StandardsSection locale={locale} />
    <MisconceptionsSection locale={locale} />
    <SummarySection locale={locale} />
    <ReferencesSection locale={locale} />
  </DocLayout>
);
