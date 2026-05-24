import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../getting-started/_shared/TerminalPrompt';
import { FlowArrow } from '../components/FlowArrow';
import { FunctionCard } from '../components/FunctionCard';
import { ObjectPreviewCard } from '../components/ObjectPreviewCard';
import type { CreateFiberFromElementContent } from '../content';
import { SparklesIcon } from '../icons';

type Props = { content: CreateFiberFromElementContent['hero'] };

export const CreateFiberHero = ({ content }: Props) => (
  <section aria-labelledby="hero-heading" className="relative">
    <TerminalPrompt command="cat" path="packages/react-reconciler/src/ReactFiber.js" />

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
          className="text-3xl sm:text-[2.5rem] lg:text-[3rem] font-extrabold leading-[1.1] tracking-tight text-[var(--term-fg)] break-keep"
        >
          <span className="block">{content.title.line1}</span>
          <span className="block bg-gradient-to-r from-sky-600 via-blue-500 to-teal-500 bg-clip-text text-transparent dark:from-sky-300 dark:via-blue-300 dark:to-teal-300">
            {content.title.line2}
          </span>
        </h1>

        <p className="text-sm sm:text-md leading-relaxed text-[var(--term-fg)] break-keep max-w-[60ch]">
          그 시작점이 바로{' '}
          <code className="font-mono font-bold text-sky-700 dark:text-sky-300">
            createFiberFromElement
          </code>
          입니다.
        </p>
        <p className="text-sm sm:text-md leading-relaxed text-[var(--term-muted)] break-keep max-w-[60ch]">
          이 함수는 Element에서{' '}
          <code className="font-mono font-bold text-[var(--term-fg)]">type</code>,{' '}
          <code className="font-mono font-bold text-[var(--term-fg)]">key</code>,{' '}
          <code className="font-mono font-bold text-[var(--term-fg)]">props</code>를 꺼내 실제 Fiber
          생성 흐름으로 넘깁니다.
        </p>
      </div>

      {/* Right: 3-step visual */}
      <div className="order-first lg:order-none min-w-0">
        <div
          className={cn(
            'relative rounded-3xl p-md sm:p-lg',
            'bg-gradient-to-br from-sky-50/80 via-white to-teal-50/80',
            'dark:from-sky-950/30 dark:via-[var(--term-bg)] dark:to-teal-950/30',
            'border border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <div
            className={cn(
              'grid items-stretch min-w-0',
              'grid-cols-1 lg:grid-cols-[minmax(0,0.95fr)_auto_minmax(0,1.15fr)_auto_minmax(0,1.1fr)]',
              'gap-sm lg:gap-md',
            )}
          >
            <ObjectPreviewCard
              variant="element"
              label={content.elementLabel}
              code={content.elementCode}
              badgeText="input"
            />
            <FlowArrow className="self-center" />
            <FunctionCard label={content.functionLabel} subtitle={content.functionSubtitle}>
              <ul className="flex flex-col gap-1.5 pt-1">
                {content.extractionChips.map((chip) => (
                  <li
                    key={chip.badge}
                    className={cn(
                      'flex items-center gap-2 rounded-lg border px-sm py-2',
                      'border-sky-200/80 bg-white',
                      'dark:border-sky-800/60 dark:bg-[var(--term-bg)]',
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        'inline-flex items-center justify-center w-6 h-6 rounded-md font-mono text-[11px] font-bold tabular-nums',
                        'bg-sky-600 text-white dark:bg-sky-500 dark:text-slate-950',
                      )}
                    >
                      {chip.badge}
                    </span>
                    <code className="font-mono text-xsm font-bold text-sky-800 dark:text-sky-200">
                      {chip.label}
                    </code>
                  </li>
                ))}
              </ul>
            </FunctionCard>
            <FlowArrow className="self-center" />
            <ObjectPreviewCard
              variant="fiber"
              label={content.fiberLabel}
              code={content.fiberCode}
              badgeText="output"
            />
          </div>

          <p className="sr-only">
            React Element는 type, key, props를 가진 작은 객체이고, createFiberFromElement 함수가 이
            값을 추출해 Fiber 객체로 확장합니다.
          </p>
        </div>
      </div>
    </div>
  </section>
);
