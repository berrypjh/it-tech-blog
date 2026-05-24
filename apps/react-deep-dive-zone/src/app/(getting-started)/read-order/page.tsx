import { getServerLocale } from '@it-tech-blog/preferences/server';

import { readOrderContent, ReadOrderPage } from '@/components/getting-started/read-order';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = readOrderContent[locale];

  return {
    title:
      locale === 'en'
        ? 'Files to read first vs files to read later — React Lab'
        : '먼저 볼 파일과 나중에 볼 파일 — React Lab',
    description: c.hero.description.join(' '),
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <ReadOrderPage locale={locale} />;
};

export default Page;
