import Link from 'next/link';

import { getServerLocale } from '@it-tech-blog/preferences/server';

import ThemeToggle from '@/components/theme-toggle';

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

const NotFoundPage = async () => {
  const locale = await getServerLocale();
  const c = content[locale] ?? content.ko;

  return (
    <div className="min-h-screen overflow-hidden">
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] dark:from-[#0a0520] dark:via-[#0d0a28] dark:to-[#1a0f3f]" />

      <ThemeToggle />

      <div className="flex flex-col items-center justify-center min-h-screen gap-mdl px-xlg text-center">
        <span className="text-[96px] font-black tracking-tight text-text-default">{c.code}</span>

        <h1 className="text-xl font-bold text-text-default">{c.title}</h1>

        <p className="text-text-light">{c.description}</p>

        <Link
          href="/"
          className="mt-sm text-xsm font-medium text-text-default underline underline-offset-4 hover:opacity-70 transition-opacity"
        >
          {c.back}
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
