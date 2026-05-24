import { getServerLocale } from '@it-tech-blog/preferences/server';

import { mutationPhaseContent, MutationPhasePage } from '@/components/commit-phase/mutation-phase';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = mutationPhaseContent[locale];

  return {
    title:
      locale === 'en'
        ? 'Mutation Phase: where real host tree changes happen — React Lab'
        : 'Mutation Phase: 실제 host tree를 변경하는 핵심 단계 — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <MutationPhasePage locale={locale} />;
};

export default Page;
