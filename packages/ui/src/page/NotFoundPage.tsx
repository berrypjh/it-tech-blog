import Link from 'next/link';

import type { Locale } from '@it-tech-blog/preferences';

import { PageContainer } from './PageContainer';

const content = {
  ko: {
    code: '404',
    title: '페이지를 찾을 수 없습니다',
    description: '요청하신 페이지가 존재하지 않거나 이동되었습니다.',
    back: '홈으로 돌아가기',
  },
  en: {
    code: '404',
    title: 'Page not found',
    description: "The page you're looking for doesn't exist or has been moved.",
    back: 'Back to home',
  },
};

export const NotFoundPage = ({ homeHref, locale }: { homeHref: string; locale: Locale }) => {
  const c = content[locale] ?? content.ko;

  return (
    <PageContainer>
      <div className="flex flex-col items-start gap-lg py-3xl">
        <span className="font-mono text-5xl font-black text-text-primary">{c.code}</span>

        <h1 className="text-xl font-bold text-text-default">{c.title}</h1>

        <p className="text-xsm text-text-light">{c.description}</p>

        <Link
          href={homeHref}
          className="mt-sm text-xsm font-medium text-text-primary hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stroke-primary rounded-xs"
        >
          {c.back}
        </Link>
      </div>
    </PageContainer>
  );
};
