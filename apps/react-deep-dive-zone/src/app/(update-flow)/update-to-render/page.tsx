import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  updateToRenderSummaryContent,
  UpdateToRenderSummaryPage,
} from '@/components/updates/update-to-render-summary';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = updateToRenderSummaryContent[locale];

  return {
    title:
      locale === 'en'
        ? 'From setState to Render Phase — the full update flow — React Lab'
        : '업데이트 요청이 Render Phase로 이어지는 전체 흐름 — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <UpdateToRenderSummaryPage locale={locale} />;
};

export default Page;
