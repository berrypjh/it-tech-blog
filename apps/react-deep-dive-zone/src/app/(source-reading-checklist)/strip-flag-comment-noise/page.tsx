import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  stripFlagCommentNoiseContent,
  StripFlagCommentNoisePage,
} from '@/components/source-reading-checklist/strip-flag-comment-noise';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = stripFlagCommentNoiseContent[locale];

  return {
    title:
      locale === 'en'
        ? 'Feature flags, types, and comments first — Source reading checklist'
        : 'feature flag와 주석으로 노이즈를 걷어낸다 — 실전 소스코드 읽기 체크리스트',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <StripFlagCommentNoisePage locale={locale} />;
};

export default Page;
