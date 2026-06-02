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
        ? 'Using Next.js vs Learning Its Internals — Next Lab'
        : 'Next.js 사용법과 내부 구조 학습의 차이 — Next Lab',
    description: c.hero.subheading.join(' '),
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <UsageVsInternalsPage locale={locale} />;
};

export default Page;
