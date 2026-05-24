import { getServerLocale } from '@it-tech-blog/preferences/server';

import { markChangesContent, MarkChangesPage } from '@/components/render-phase/mark-changes';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = markChangesContent[locale];

  return {
    title:
      locale === 'en'
        ? 'When Placement / Deletion / Move Marks Are Set — React Lab'
        : 'Placement / Deletion / 이동 표시는 언제 남는가? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <MarkChangesPage locale={locale} />;
};

export default Page;
