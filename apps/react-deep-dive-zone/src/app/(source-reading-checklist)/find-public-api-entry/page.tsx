import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  findPublicApiEntryContent,
  FindPublicApiEntryPage,
} from '@/components/source-reading-checklist/find-public-api-entry';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = findPublicApiEntryContent[locale];

  return {
    title:
      locale === 'en'
        ? 'Find the public API entry first — Source reading checklist'
        : 'Public API 입구를 먼저 찾는다 — 실전 소스코드 읽기 체크리스트',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <FindPublicApiEntryPage locale={locale} />;
};

export default Page;
