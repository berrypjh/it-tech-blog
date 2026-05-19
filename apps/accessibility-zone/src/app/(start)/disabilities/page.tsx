import { getServerLocale } from '@it-tech-blog/preferences/server';

import { AccessibilityDisabilitiesPage } from '@/components/start/disabilities';
import { disabilitiesContent } from '@/components/start/disabilities/content';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  return { title: disabilitiesContent[locale].meta.pageTitle };
};

const DisabilitiesPage = async () => {
  const locale = await getServerLocale();
  return <AccessibilityDisabilitiesPage locale={locale} />;
};

export default DisabilitiesPage;
