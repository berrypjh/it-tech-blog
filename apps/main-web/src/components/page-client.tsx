'use client';

import { BubbleButton } from '@berrypjh/react-ui';

import { useLocale } from '@it-tech-blog/preferences';
import { TOPICS } from './topics';
import ThemeToggle from './theme-toggle';

export default function PageClient() {
  const { locale } = useLocale();

  return (
    <div className="min-w-[500px] overflow-hidden">
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] dark:from-[#0a0520] dark:via-[#0d0a28] dark:to-[#1a0f3f]" />

      <ThemeToggle />

      <div className="relative max-w-[1440px] mx-auto flex flex-col items-center justify-center min-h-screen gap-8 px-6">
        {TOPICS.map(({ icon, label, size, delay, style, href }) => (
          <div key={label.en} className="absolute hidden lg:block" style={style}>
            <BubbleButton icon={icon} label={label[locale]} size={size} delay={delay} href={href} />
          </div>
        ))}

        <h1 className="text-4xl min-[500px]:text-6xl lg:text-8xl font-bold tracking-tight text-center cursor-default transition-colors duration-500 text-gray-900 dark:text-white">
          Interactive Tech Lab
        </h1>

        <p className="text-base min-[500px]:text-lg md:text-2xl text-center cursor-default text-gray-600 dark:text-white/70">
          {locale === 'ko'
            ? '복잡한 기술 개념을 예제와 실습형 콘텐츠로 쉽게 이해해봐요'
            : 'Explore complex tech concepts through interactive examples and hands-on content'}
        </p>

        <div className="lg:hidden grid grid-cols-3 gap-4 w-full max-w-sm sm:max-w-md">
          {TOPICS.map(({ icon, label, href }) => (
            <a
              key={label.en}
              href={href}
              className="flex flex-col items-center gap-2 p-4 rounded-xl text-gray-700 dark:text-white/80 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            >
              <span className="text-3xl">{icon}</span>
              <span className="text-sm font-medium text-center leading-tight">{label[locale]}</span>
            </a>
          ))}
        </div>

        {/* TODO: 검색 기능 추가 */}
        {/* <div className="w-full max-w-sm min-[500px]:max-w-xl md:max-w-2xl">
          <SearchField placeholder="Search topics..." fullWidth />
        </div> */}
      </div>
    </div>
  );
}
