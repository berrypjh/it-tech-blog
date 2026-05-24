import { getServerLocale } from '@it-tech-blog/preferences/server';

import { notAllFilesContent, NotAllFilesPage } from '@/components/getting-started/not-all-files';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = notAllFilesContent[locale];

  return {
    title:
      locale === 'en'
        ? "You don't need to read every file — React Lab"
        : '모든 파일을 읽지 않아도 되는 이유 — React Lab',
    description: c.hero.description.join(' '),
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <NotAllFilesPage locale={locale} />;
};

export default Page;
