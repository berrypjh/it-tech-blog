import { getServerLocale } from '@it-tech-blog/preferences/server';

import { AccessibilityIntroPage } from '@/components/start/intro';

const titles = {
  ko: '웹접근성이란? — A11y Lab',
  en: 'What is Web Accessibility? — A11y Lab',
};

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  return { title: titles[locale] };
};

const IntroPage = async () => {
  const locale = await getServerLocale();
  return <AccessibilityIntroPage locale={locale} />;
};

export default IntroPage;
