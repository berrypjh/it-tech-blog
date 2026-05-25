import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  IdentifyPhasePage,
  phaseDetectionContent,
} from '@/components/source-reading-checklist/identify-phase';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = phaseDetectionContent[locale];

  return {
    title:
      locale === 'en'
        ? 'Identify whether it is Render, Commit, or Scheduling — Source reading checklist'
        : 'phase를 판별한다 — 실전 소스코드 읽기 체크리스트',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <IdentifyPhasePage locale={locale} />;
};

export default Page;
