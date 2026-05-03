import Link from 'next/link';

import { AppShell } from '@/components/shell';
import { PageContainer } from '@/components/page';
import { getServerLocale } from '@it-tech-blog/preferences/server';

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
    <AppShell>
      <PageContainer>
        <div className="flex flex-col items-start gap-4 py-10">
          <span className="font-mono text-5xl font-black text-emerald-500">{c.code}</span>

          <h1 className="text-2xl font-bold text-foreground">{c.title}</h1>

          <p className="text-sm text-muted-foreground">{c.description}</p>

          <Link
            href="/intro"
            className="mt-2 text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
          >
            {c.back}
          </Link>
        </div>
      </PageContainer>
    </AppShell>
  );
};

export default NotFoundPage;
