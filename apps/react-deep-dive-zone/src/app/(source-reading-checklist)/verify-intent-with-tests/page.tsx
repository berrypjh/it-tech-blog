import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  testAsDocContent,
  VerifyIntentWithTestsPage,
} from '@/components/source-reading-checklist/verify-intent-with-tests';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = testAsDocContent[locale];

  return {
    title:
      locale === 'en'
        ? 'Test code is executable documentation — Source reading checklist'
        : '테스트로 의도를 확인한다 — 실전 소스코드 읽기 체크리스트',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <VerifyIntentWithTestsPage locale={locale} />;
};

export default Page;
