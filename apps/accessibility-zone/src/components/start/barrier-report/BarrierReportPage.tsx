import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout } from '@it-tech-blog/ui';

import { ExampleSection } from './sections/ExampleSection';
import { PageHeader } from './sections/PageHeader';
import { ReferencesSection } from './sections/ReferencesSection';
import { ReviewSection } from './sections/ReviewSection';
import { ScreenSection } from './sections/ScreenSection';
import { SummarySection } from './sections/SummarySection';
import { WhatIsSection } from './sections/WhatIsSection';
import { WriteSection } from './sections/WriteSection';
import { getToc } from './toc';

export const BarrierReportPage = ({ locale }: { locale: Locale }) => (
  <DocLayout toc={Object.values(getToc(locale))}>
    <PageHeader locale={locale} />
    <WhatIsSection locale={locale} />
    <ScreenSection locale={locale} />
    <ExampleSection locale={locale} />
    <WriteSection locale={locale} />
    <ReviewSection locale={locale} />
    <SummarySection locale={locale} />
    <ReferencesSection locale={locale} />
  </DocLayout>
);
