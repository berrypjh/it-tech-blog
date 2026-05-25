import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  recoveryModelOverviewContent,
  RecoveryModelOverviewPage,
} from '@/components/suspense-error-hydration/recovery-model-overview';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = recoveryModelOverviewContent[locale];

  return {
    title:
      locale === 'en'
        ? 'Wrap-up · One recovery model for Suspense / Error / Hydration — React Lab'
        : 'Suspense / Error / Hydration, 하나의 복구 모델로 정리해보자 — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <RecoveryModelOverviewPage locale={locale} />;
};

export default Page;
