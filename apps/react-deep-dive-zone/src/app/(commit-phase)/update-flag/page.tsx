import { getServerLocale } from '@it-tech-blog/preferences/server';

import { updatePhaseContent, UpdatePhasePage } from '@/components/commit-phase/update-phase';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = updatePhaseContent[locale];

  return {
    title:
      locale === 'en'
        ? 'Update: how DOM props and text are updated — React Lab'
        : 'Update: 기존 DOM 속성과 텍스트는 어떻게 갱신되는가? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <UpdatePhasePage locale={locale} />;
};

export default Page;
