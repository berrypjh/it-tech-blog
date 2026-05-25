import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  mismatchDetectRecoverContent,
  MismatchDetectRecoverPage,
} from '@/components/suspense-error-hydration/mismatch-detect-recover';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = mismatchDetectRecoverContent[locale];

  return {
    title:
      locale === 'en'
        ? 'Hydration Mismatch is a recovery branch — React Lab'
        : 'Hydration Mismatch는 단순 경고가 아니라 복구 분기다 — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <MismatchDetectRecoverPage locale={locale} />;
};

export default Page;
