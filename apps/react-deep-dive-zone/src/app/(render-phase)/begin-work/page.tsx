import { getServerLocale } from '@it-tech-blog/preferences/server';

import { beginWorkContent, BeginWorkPage } from '@/components/render-phase/begin-work';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = beginWorkContent[locale];

  return {
    title:
      locale === 'en'
        ? 'beginWork: descending to start child computation — React Lab'
        : 'beginWork: 아래로 내려가며 자식 계산을 시작한다 — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <BeginWorkPage locale={locale} />;
};

export default Page;
