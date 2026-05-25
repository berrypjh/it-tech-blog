import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  reconstructContent,
  ReconstructWithWordsAndFlowPage,
} from '@/components/source-reading-checklist/reconstruct-with-words-and-flow';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = reconstructContent[locale];

  return {
    title:
      locale === 'en'
        ? 'Reconstruct in your own words — Source reading checklist (completion)'
        : '내 말과 흐름도로 재구성한다 — 실전 소스코드 읽기 체크리스트 (완료)',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <ReconstructWithWordsAndFlowPage locale={locale} />;
};

export default Page;
