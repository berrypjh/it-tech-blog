import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  useSuspenseErrorModelContent,
  UseSuspenseErrorModelPage,
} from '@/components/react-19-changes/use-suspense-error-model';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = useSuspenseErrorModelContent[locale];

  return {
    title:
      locale === 'en'
        ? 'use() × Suspense / Error Boundary — React Lab'
        : 'use()는 Suspense / Error Boundary 흐름에 무엇을 추가했나? — React Lab',
    description: c.hero.subtitleLines.join(' '),
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <UseSuspenseErrorModelPage locale={locale} />;
};

export default Page;
