import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  passiveEffectsContent,
  PassiveEffectsSummaryPage,
} from '@/components/commit-phase/passive-effects';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = passiveEffectsContent[locale];

  return {
    title:
      locale === 'en'
        ? 'Passive Effects and the full Commit flow — React Lab'
        : 'Passive Effects와 전체 Commit 흐름 최종 정리 — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <PassiveEffectsSummaryPage locale={locale} />;
};

export default Page;
