import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../start/_shared/TerminalPrompt';
import { KeyTrackingDiagram } from '../components/KeyTrackingDiagram';
import type { KeyFiberReuseContent } from '../content';
import { SparklesIcon } from '../icons';

type Props = { content: KeyFiberReuseContent['hero'] };

export const KeyFiberReuseHero = ({ content }: Props) => (
  <section aria-labelledby="hero-heading" className="relative">
    <TerminalPrompt
      command="cat"
      path="packages/react-reconciler/src/ReactChildFiber.js"
      suffix={<span className="text-[var(--term-muted)]"> # updateSlot — key match</span>}
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
          <SparklesIcon className="h-3.5 w-3.5" aria-hidden="true" />
          {content.badge}
        </span>

        <h1
          id="hero-heading"
          className="text-3xl sm:text-[2.5rem] lg:text-[2.85rem] font-extrabold leading-[1.15] tracking-tight text-[var(--term-fg)] break-keep"
        >
          <span className="block">
            <code className="font-mono text-sky-700 dark:text-sky-300">key</code>는 Fiber 재사용
          </span>
          <span className="block bg-gradient-to-r from-sky-600 to-sky-500 bg-clip-text text-transparent dark:from-sky-300 dark:to-sky-200">
            판단과 연결됩니다.
          </span>
        </h1>

        <p className="text-sm sm:text-md leading-relaxed text-[var(--term-fg)] break-keep max-w-[60ch]">
          같은 위치에 비슷한 Element가 있어도,{' '}
          <code className="font-mono font-bold text-sky-700 dark:text-sky-300">key</code>가 다르면
          React는 다른 대상으로 판단할 수 있습니다.
        </p>

        <ul className="grid grid-cols-2 gap-2 pt-1">
          <li
            className={cn(
              'flex flex-col gap-0.5 rounded-lg border px-sm py-2 text-center',
              'border-emerald-300/80 bg-emerald-50/50 dark:border-emerald-800/60 dark:bg-emerald-950/30',
            )}
          >
            <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-700 dark:text-emerald-300 font-bold">
              key 유지
            </span>
            <code className="text-xsm font-mono font-bold text-emerald-800 dark:text-emerald-200">
              기존 Fiber 재사용
            </code>
          </li>
          <li
            className={cn(
              'flex flex-col gap-0.5 rounded-lg border px-sm py-2 text-center',
              'border-violet-300/80 bg-violet-50/50 dark:border-violet-800/60 dark:bg-violet-950/30',
            )}
          >
            <span className="text-[10px] font-mono uppercase tracking-wider text-violet-700 dark:text-violet-300 font-bold">
              key 변경
            </span>
            <code className="text-xsm font-mono font-bold text-violet-800 dark:text-violet-200">
              새 Fiber 생성
            </code>
          </li>
        </ul>
      </div>

      {/* Right: key tracking diagram */}
      <div className="order-first lg:order-none min-w-0">
        <div
          className={cn(
            'relative rounded-3xl p-md sm:p-lg',
            'bg-gradient-to-br from-sky-50/70 via-white to-sky-50/40',
            'dark:from-sky-950/30 dark:via-[var(--term-bg)] dark:to-sky-950/15',
            'border border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <KeyTrackingDiagram
            beforeLabel={content.beforeLabel}
            afterLabel={content.afterLabel}
            beforeItems={content.beforeItems}
            afterItems={content.afterItems}
            centerLabel={content.centerLabel}
            resultTitle={content.resultTitle}
            resultItems={content.resultItems}
          />
        </div>
      </div>
    </div>
  </section>
);
