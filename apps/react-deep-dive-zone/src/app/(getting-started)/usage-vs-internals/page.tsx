import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  usageVsInternalsContent,
  UsageVsInternalsPage,
} from '@/components/getting-started/usage-vs-internals';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = usageVsInternalsContent[locale];

  return {
    title:
      locale === 'en'
        ? 'Using React vs Learning React Internals — React Lab'
        : 'React 사용법과 내부 구조 학습의 차이 — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <UsageVsInternalsPage locale={locale} />;
};

export default Page;
