import { getServerLocale } from '@it-tech-blog/preferences/server';

import ThemeToggle from '@/components/theme-toggle';
import TopicBubbles from '@/components/topic-bubbles';
import TopicGrid from '@/components/topic-grid';
import { TOPICS } from '@/components/topics';

const Page = async () => {
  const locale = await getServerLocale();

  return (
    <div className="min-w-[500px] overflow-hidden">
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] dark:from-[#0a0520] dark:via-[#0d0a28] dark:to-[#1a0f3f]" />

      <ThemeToggle />

      <div className="relative max-w-[1440px] mx-auto flex flex-col items-center justify-center min-h-[max(100vh,700px)] gap-8 px-6">
        <TopicBubbles topics={TOPICS} locale={locale} />

        <h1 className="text-4xl min-[500px]:text-6xl lg:text-[96px] font-bold tracking-tight text-center cursor-default transition-colors duration-500 text-text-default">
          Interactive Tech Lab
        </h1>

        <p className="text-sm min-[500px]:text-md md:text-xl text-center cursor-default text-text-light">
          {locale === 'ko'
            ? '복잡한 기술 개념을 예제와 실습형 콘텐츠로 쉽게 이해해봐요'
            : 'Explore complex tech concepts through interactive examples and hands-on content'}
        </p>

        <TopicGrid topics={TOPICS} locale={locale} />
      </div>
    </div>
  );
};

export default Page;
