import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  renderPhaseIntroContent,
  RenderPhaseIntroPage,
} from '@/components/render-phase/render-phase-intro';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = renderPhaseIntroContent[locale];

  return {
    title:
      locale === 'en'
        ? 'What Is the Render Phase? — React Lab'
        : 'Render Phase란 무엇인가? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <RenderPhaseIntroPage locale={locale} />;
};

export default Page;
