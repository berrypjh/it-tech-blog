import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  ReactTestCodeImportancePage,
  testCodeContent,
} from '@/components/repo-structure/why-tests';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = testCodeContent[locale];

  return {
    title:
      locale === 'en'
        ? 'Why test code matters — React Lab'
        : '테스트 코드는 왜 소스코드만큼 중요한가? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <ReactTestCodeImportancePage locale={locale} />;
};

export default Page;
