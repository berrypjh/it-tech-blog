import { getServerLocale } from '@it-tech-blog/preferences/server';

import { AccessibilityImportancePage, type ImportanceLocale } from '@/components/start/why';
import { importanceContent } from '@/components/start/why/content';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const lang = ((locale as ImportanceLocale) ?? 'ko') as ImportanceLocale;
  return { title: importanceContent[lang].meta.pageTitle };
};

const WhyPage = async () => {
  const locale = await getServerLocale();
  const lang = ((locale as ImportanceLocale) ?? 'ko') as ImportanceLocale;
  return <AccessibilityImportancePage locale={lang} />;
};

export default WhyPage;
