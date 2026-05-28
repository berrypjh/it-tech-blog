import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../shared/TerminalPrompt';
import { AlternateLink } from '../components/AlternateLink';
import { FiberPairCard } from '../components/FiberPairCard';
import type { AlternateFiberContent } from '../content';
import { SparklesIcon } from '../icons';

type Props = { content: AlternateFiberContent['hero'] };

export const AlternateHero = ({ content }: Props) => (
  <section aria-labelledby="hero-heading" className="relative">
    <TerminalPrompt
      command="cat"
      path="packages/react-reconciler/src/ReactFiber.js"
      suffix={<span className="text-[var(--term-muted)]"> # createWorkInProgress</span>}
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
          <span className="block">{content.title.line1}</span>
          <span className="block">
            <code className="font-mono bg-gradient-to-r from-sky-600 to-emerald-500 bg-clip-text text-transparent dark:from-sky-300 dark:to-emerald-300">
              alternate
            </code>
            가 있을까?
          </span>
        </h1>

        <p className="text-sm sm:text-md leading-relaxed text-[var(--term-fg)] break-keep max-w-[60ch]">
          React는 기존 화면을 대표하는{' '}
          <code className="font-mono font-bold text-emerald-700 dark:text-emerald-300">Fiber</code>
          와 다음 화면을 계산 중인{' '}
          <code className="font-mono font-bold text-violet-700 dark:text-violet-300">Fiber</code>를
          짝처럼 연결해 관리합니다.
        </p>

        <ul className="grid grid-cols-2 gap-2 pt-1">
          <li
            className={cn(
              'flex flex-col gap-0.5 rounded-lg border px-sm py-2 text-center',
              'border-emerald-300/80 bg-emerald-50/50 dark:border-emerald-800/60 dark:bg-emerald-950/30',
            )}
          >
            <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-700 dark:text-emerald-300 font-bold">
              current
            </span>
            <code className="text-xsm font-mono font-bold text-emerald-800 dark:text-emerald-200">
              화면에 반영된 트리
            </code>
          </li>
          <li
            className={cn(
              'flex flex-col gap-0.5 rounded-lg border px-sm py-2 text-center',
              'border-violet-300/80 bg-violet-50/50 dark:border-violet-800/60 dark:bg-violet-950/30',
            )}
          >
            <span className="text-[10px] font-mono uppercase tracking-wider text-violet-700 dark:text-violet-300 font-bold">
              workInProgress
            </span>
            <code className="text-xsm font-mono font-bold text-violet-800 dark:text-violet-200">
              계산 중인 작업 트리
            </code>
          </li>
        </ul>
      </div>

      {/* Right: current ↔ workInProgress */}
      <div className="order-first lg:order-none min-w-0">
        <div
          className={cn(
            'relative rounded-3xl p-md sm:p-lg',
            'bg-gradient-to-br from-emerald-50/50 via-white to-violet-50/60',
            'dark:from-emerald-950/15 dark:via-[var(--term-bg)] dark:to-violet-950/30',
            'border border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <div
            className={cn(
              'grid items-stretch min-w-0',
              'grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)]',
              'gap-sm lg:gap-md',
            )}
          >
            <FiberPairCard
              variant="current"
              title={content.currentTitle}
              items={content.currentItems}
              compact
            />
            <AlternateLink
              forwardLabel={content.forwardLabel}
              backwardLabel={content.backwardLabel}
            />
            <FiberPairCard
              variant="workInProgress"
              title={content.workTitle}
              items={content.workItems}
              compact
            />
          </div>

          <p className="sr-only">
            React는 같은 노드에 대해 current Fiber와 workInProgress Fiber 두 가지를 동시에 가지며,
            alternate 포인터로 서로 양방향 연결합니다. current는 화면에 반영된 안정적인 트리이고,
            workInProgress는 다음 화면을 계산 중인 작업 트리입니다.
          </p>
        </div>
      </div>
    </div>
  </section>
);
