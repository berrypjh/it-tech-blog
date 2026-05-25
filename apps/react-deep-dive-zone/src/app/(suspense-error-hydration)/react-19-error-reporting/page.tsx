import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  react19ErrorReportingContent,
  React19ErrorReportingPage,
} from '@/components/suspense-error-hydration/react-19-error-reporting';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = react19ErrorReportingContent[locale];

  return {
    title:
      locale === 'en'
        ? 'React 19 split recovery and reporting — React Lab'
        : 'React 19는 복구와 보고를 분리했다 — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <React19ErrorReportingPage locale={locale} />;
};

export default Page;
