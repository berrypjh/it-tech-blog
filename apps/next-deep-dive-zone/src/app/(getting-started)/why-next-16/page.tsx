import { getServerLocale } from '@it-tech-blog/preferences/server';

import { next16Content, Next16SourceBasisPage } from '@/components/getting-started/why-next-16';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = next16Content[locale];

  return {
    title:
      locale === 'en'
        ? 'Why Read from the Next.js 16 Codebase — Next Lab'
        : 'Next.js 16 코드를 기준으로 읽는 이유 — Next Lab',
    description: c.hero.highlight.join(' '),
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <Next16SourceBasisPage locale={locale} />;
};

export default Page;
