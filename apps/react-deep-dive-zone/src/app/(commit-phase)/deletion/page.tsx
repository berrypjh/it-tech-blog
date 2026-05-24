import { getServerLocale } from '@it-tech-blog/preferences/server';

import { deletionContent, DeletionPage } from '@/components/commit-phase/deletion';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = deletionContent[locale];

  return {
    title:
      locale === 'en'
        ? 'Deletion: more than DOM removal — React Lab'
        : 'Deletion: 삭제는 DOM 제거만이 아니다 — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <DeletionPage locale={locale} />;
};

export default Page;
