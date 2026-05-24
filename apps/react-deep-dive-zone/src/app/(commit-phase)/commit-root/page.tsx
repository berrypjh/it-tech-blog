import { getServerLocale } from '@it-tech-blog/preferences/server';

import { commitRootContent, CommitRootPage } from '@/components/commit-phase/commit-root';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = commitRootContent[locale];

  return {
    title:
      locale === 'en'
        ? 'commitRoot: finishedWork enters the apply pipeline — React Lab'
        : 'commitRoot: finishedWork가 실제 반영 단계로 들어간다 — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <CommitRootPage locale={locale} />;
};

export default Page;
