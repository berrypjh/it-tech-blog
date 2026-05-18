import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  AccessibilityDisabilitiesPage,
  type DisabilitiesLocale,
} from '@/components/start/disabilities';
import { disabilitiesContent } from '@/components/start/disabilities/content';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const lang = ((locale as DisabilitiesLocale) ?? 'ko') as DisabilitiesLocale;
  return { title: disabilitiesContent[lang].meta.pageTitle };
};

const DisabilitiesPage = async () => {
  const locale = await getServerLocale();
  const lang = ((locale as DisabilitiesLocale) ?? 'ko') as DisabilitiesLocale;
  return <AccessibilityDisabilitiesPage locale={lang} />;
};

export default DisabilitiesPage;
