import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  beforeMutationContent,
  BeforeMutationPage,
} from '@/components/commit-phase/before-mutation';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = beforeMutationContent[locale];

  return {
    title:
      locale === 'en'
        ? 'Before Mutation Phase: read before mutate — React Lab'
        : 'Before Mutation Phase: DOM이 바뀌기 직전 무엇을 읽고 준비하나? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <BeforeMutationPage locale={locale} />;
};

export default Page;
