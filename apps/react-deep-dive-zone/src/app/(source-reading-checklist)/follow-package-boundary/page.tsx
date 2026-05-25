import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  followPackageBoundaryContent,
  FollowPackageBoundaryPage,
} from '@/components/source-reading-checklist/follow-package-boundary';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = followPackageBoundaryContent[locale];

  return {
    title:
      locale === 'en'
        ? 'Follow package boundaries — Source reading checklist'
        : '패키지 경계를 따라간다 — 실전 소스코드 읽기 체크리스트',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <FollowPackageBoundaryPage locale={locale} />;
};

export default Page;
