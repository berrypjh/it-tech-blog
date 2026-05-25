import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  ClassifyValuesPage,
  valueClassificationContent,
} from '@/components/source-reading-checklist/classify-values';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = valueClassificationContent[locale];

  return {
    title:
      locale === 'en'
        ? 'Classify the value you are looking at first — Source reading checklist'
        : '값을 분류한다 — 실전 소스코드 읽기 체크리스트',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <ClassifyValuesPage locale={locale} />;
};

export default Page;
