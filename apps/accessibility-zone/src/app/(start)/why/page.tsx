import { getServerLocale } from '@it-tech-blog/preferences/server';

import { AccessibilityImportancePage } from '@/components/start/why';
import { importanceContent } from '@/components/start/why/content';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  return { title: importanceContent[locale].meta.pageTitle };
};

const WhyPage = async () => {
  const locale = await getServerLocale();
  return <AccessibilityImportancePage locale={locale} />;
};

export default WhyPage;
