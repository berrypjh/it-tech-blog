import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../start/_shared/TerminalPrompt';
import { ExpansionDiagram } from '../components/ExpansionDiagram';
import type { FiberStoredInformationContent } from '../content';
import { SparklesIcon } from '../icons';

type Props = { content: FiberStoredInformationContent['hero'] };

export const FiberStoredInfoHero = ({ content }: Props) => (
  <section aria-labelledby="hero-heading" className="relative">
    <TerminalPrompt
      command="cat"
      path="packages/react-reconciler/src/ReactFiber.js"
      suffix={<span className="text-[var(--term-muted)]"> # FiberNode</span>}
    />

    <div className="mt-lg grid grid-cols-1 lg:grid-cols-[minmax(0,_0.78fr)_minmax(0,_1.22fr)] gap-xl lg:gap-2xl items-start">
      {/* Left: copy */}
      <div className="flex flex-col gap-md min-w-0">
        <div className="flex items-center gap-sm">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex items-center justify-center w-11 h-11 rounded-full',
              'bg-sky-600 text-white dark:bg-sky-500 dark:text-slate-950',
              'font-mono text-md font-extrabold tabular-nums',
              'shadow-[0_8px_22px_-8px_rgba(2,132,199,0.55)]',
            )}
          >
            {content.badge}
          </span>
          <span
            className={cn(
              'inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1',
              'text-xxsm font-bold uppercase tracking-wider',
              'border-sky-300/80 bg-sky-50 text-sky-700',
              'dark:border-sky-800/70 dark:bg-sky-950/60 dark:text-sky-200',
            )}
          >
            <SparklesIcon className="h-3.5 w-3.5" aria-hidden="true" />
            Fiber 트리 · 자료구조 챕터
          </span>
        </div>

        <h1
          id="hero-heading"
          className="text-3xl sm:text-[2.5rem] lg:text-[2.85rem] font-extrabold leading-[1.15] tracking-tight text-[var(--term-fg)] break-keep"
        >
          <span className="block">{content.title.line1}</span>
          <span className="block bg-gradient-to-r from-violet-600 to-sky-500 bg-clip-text text-transparent dark:from-violet-300 dark:to-sky-300">
            {content.title.line2}
          </span>
        </h1>

        <p className="text-sm sm:text-md leading-relaxed text-[var(--term-fg)] break-keep max-w-[60ch]">
          Element의{' '}
          <code className="font-mono font-bold text-emerald-700 dark:text-emerald-300">
            type, key, props
          </code>
          를 받아오지만, 실제 렌더링을 수행하기 위해{' '}
          <code className="font-mono font-bold text-violet-700 dark:text-violet-300">
            훨씬 많은 작업 정보
          </code>
          를 추가로 가집니다.
        </p>

        <ul className="grid grid-cols-2 gap-2 pt-1">
          <li
            className={cn(
              'flex flex-col gap-0.5 rounded-lg border px-sm py-2 text-center',
              'border-emerald-300/80 bg-emerald-50/50 dark:border-emerald-800/60 dark:bg-emerald-950/30',
            )}
          >
            <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-700 dark:text-emerald-300 font-bold">
              Element
            </span>
            <code className="text-xsm font-mono font-bold text-emerald-800 dark:text-emerald-200">
              {content.elementFields.length} fields
            </code>
          </li>
          <li
            className={cn(
              'flex flex-col gap-0.5 rounded-lg border px-sm py-2 text-center',
              'border-violet-300/80 bg-violet-50/50 dark:border-violet-800/60 dark:bg-violet-950/30',
            )}
          >
            <span className="text-[10px] font-mono uppercase tracking-wider text-violet-700 dark:text-violet-300 font-bold">
              Fiber
            </span>
            <code className="text-xsm font-mono font-bold text-violet-800 dark:text-violet-200">
              {content.fiberFields.length} fields
            </code>
          </li>
        </ul>
      </div>

      {/* Right: expansion diagram */}
      <div className="order-first lg:order-none min-w-0">
        <div
          className={cn(
            'relative rounded-3xl p-md sm:p-lg',
            'bg-gradient-to-br from-emerald-50/40 via-white to-violet-50/60',
            'dark:from-emerald-950/15 dark:via-[var(--term-bg)] dark:to-violet-950/25',
            'border border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <ExpansionDiagram
            elementTitle={content.elementTitle}
            elementFields={content.elementFields}
            fiberTitle={content.fiberTitle}
            fiberFields={content.fiberFields}
            size="sm"
          />
        </div>
      </div>
    </div>
  </section>
);
