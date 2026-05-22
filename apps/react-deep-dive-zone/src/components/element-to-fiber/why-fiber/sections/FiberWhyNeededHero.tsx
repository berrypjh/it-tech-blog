import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../start/_shared/TerminalPrompt';
import { HeroFlow } from '../components/HeroFlow';
import type { FiberWhyNeededContent } from '../content';
import { TrophyIcon } from '../icons';

type Props = { content: FiberWhyNeededContent['hero'] };

export const FiberWhyNeededHero = ({ content }: Props) => (
  <section aria-labelledby="hero-heading" className="relative">
    <TerminalPrompt
      command="cat"
      path="packages/react-reconciler/src/ReactFiber.js"
      suffix={<span className="text-[var(--term-muted)]"> # chapter wrap-up</span>}
    />

    <div className="mt-lg grid grid-cols-1 lg:grid-cols-[minmax(0,_0.78fr)_minmax(0,_1.22fr)] gap-xl lg:gap-2xl items-start">
      {/* Left: copy */}
      <div className="flex flex-col gap-md min-w-0">
        <span
          className={cn(
            'inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1',
            'text-xxsm font-bold uppercase tracking-wider',
            'border-sky-300/80 bg-sky-50 text-sky-700',
            'dark:border-sky-800/70 dark:bg-sky-950/60 dark:text-sky-200',
          )}
        >
          <TrophyIcon className="h-3.5 w-3.5" aria-hidden="true" />
          {content.badge}
        </span>

        <h1
          id="hero-heading"
          className="text-3xl sm:text-[2.5rem] lg:text-[2.85rem] font-extrabold leading-[1.15] tracking-tight text-[var(--term-fg)] break-keep"
        >
          <span className="block">{content.title.line1}</span>
          <span className="block bg-gradient-to-r from-sky-600 via-violet-500 to-emerald-500 bg-clip-text text-transparent dark:from-sky-300 dark:via-violet-300 dark:to-emerald-300">
            {content.title.line2}
          </span>
        </h1>

        <p className="text-sm sm:text-md leading-relaxed text-[var(--term-fg)] break-keep max-w-[60ch]">
          렌더링을 실제 작업으로 처리하려면{' '}
          <strong className="font-bold text-emerald-700 dark:text-emerald-300">트리 구조</strong>,{' '}
          <strong className="font-bold text-sky-700 dark:text-sky-300">업데이트 상태</strong>,{' '}
          <strong className="font-bold text-violet-700 dark:text-violet-300">우선순위</strong>, 현재
          화면과 다음 화면의 연결을 함께 관리할 내부 단위가 필요합니다.
        </p>
      </div>

      {/* Right: hero flow */}
      <div className="order-first lg:order-none min-w-0">
        <div
          className={cn(
            'relative rounded-3xl p-md sm:p-lg',
            'bg-gradient-to-br from-emerald-50/40 via-white to-sky-50/60',
            'dark:from-emerald-950/15 dark:via-[var(--term-bg)] dark:to-sky-950/30',
            'border border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <HeroFlow steps={content.flowSteps} />
        </div>
      </div>
    </div>
  </section>
);
