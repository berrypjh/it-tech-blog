import { getServerLocale } from '@it-tech-blog/preferences/server';

import { AccessibilityIntroPage, type IntroLocale } from '@/components/start/intro';

const titles = {
  ko: '웹접근성이란? — A11y Lab',
  en: 'What is Web Accessibility? — A11y Lab',
};

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const lang = (locale as IntroLocale) ?? 'ko';
  return { title: titles[lang] };
};

const IntroPage = async () => {
  const locale = await getServerLocale();
  const lang = ((locale as IntroLocale) ?? 'ko') as IntroLocale;
  return <AccessibilityIntroPage locale={lang} />;
};

export default IntroPage;
