'use client';

import { useEffect } from 'react';

import { useLocale } from '@it-tech-blog/preferences';

import { ThemeToggle } from '@/components/theme';

const content = {
  ko: {
    code: '500',
    title: '오류가 발생했습니다',
    description: '예상치 못한 문제가 생겼습니다. 잠시 후 다시 시도해주세요.',
    retry: '다시 시도',
  },
  en: {
    code: '500',
    title: 'Something went wrong',
    description: 'An unexpected error occurred. Please try again.',
    retry: 'Try again',
  },
};

const ErrorPage = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
  const { locale } = useLocale();
  const c = content[locale as 'ko' | 'en'] ?? content.ko;

  useEffect(() => {
    // TODO: 에러 트래킹 서비스로 전송
    console.error(error);
  }, [error]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] dark:from-[#0a0520] dark:via-[#0d0a28] dark:to-[#1a0f3f]" />

      <ThemeToggle />

      <div className="flex flex-col items-center justify-center min-h-screen gap-mdl px-xlg text-center">
        <span className="text-[96px] font-black tracking-tight text-text-default">{c.code}</span>

        <h1 className="text-xl font-bold text-text-default">{c.title}</h1>

        <p className="text-text-light">{c.description}</p>

        <button
          onClick={reset}
          className="mt-sm text-xsm font-medium text-text-default underline underline-offset-4 hover:opacity-70 transition-opacity"
        >
          {c.retry}
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
