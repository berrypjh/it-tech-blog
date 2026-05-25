import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  errorBoundaryRecoverContent,
  ErrorBoundaryRecoverPage,
} from '@/components/suspense-error-hydration/error-boundary-recover';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = errorBoundaryRecoverContent[locale];

  return {
    title:
      locale === 'en'
        ? 'How does an Error Boundary catch and recover render errors? — React Lab'
        : 'Error Boundary는 렌더링 에러를 어떻게 붙잡고 복구할까? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <ErrorBoundaryRecoverPage locale={locale} />;
};

export default Page;
