import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  correctVersionDiffContent,
  CorrectVersionDiffPage,
} from '@/components/source-reading-checklist/correct-version-diff';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = correctVersionDiffContent[locale];

  return {
    title:
      locale === 'en'
        ? 'Read release notes and version tags together — Source reading checklist'
        : '버전 차이를 교정한다 — 실전 소스코드 읽기 체크리스트',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <CorrectVersionDiffPage locale={locale} />;
};

export default Page;
