import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  callPathCompressionContent,
  CompressCallPathPage,
} from '@/components/source-reading-checklist/compress-call-path';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = callPathCompressionContent[locale];

  return {
    title:
      locale === 'en'
        ? 'Restore the update flow as a single call path — Source reading checklist'
        : '호출 경로를 압축한다 — 실전 소스코드 읽기 체크리스트',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <CompressCallPathPage locale={locale} />;
};

export default Page;
