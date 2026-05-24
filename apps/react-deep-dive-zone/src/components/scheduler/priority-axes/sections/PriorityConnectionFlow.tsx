import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { ThreePriorityAxesContent } from '../content';
import { NetworkIcon, SparklesIcon } from '../icons';

type Props = { content: ThreePriorityAxesContent['connection'] };

const numberToneCycle = [
  'bg-blue-600 dark:bg-blue-500',
  'bg-blue-600 dark:bg-blue-500',
  'bg-teal-600 dark:bg-teal-500',
  'bg-teal-600 dark:bg-teal-500',
  'bg-violet-600 dark:bg-violet-500',
  'bg-violet-600 dark:bg-violet-500',
];

const highlightKeyword = (text: string, keywords: string[]) => {
  if (!keywords.length) return text;
  const pattern = new RegExp(
    `(${keywords.map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`,
    'g',
  );
  const parts = text.split(pattern);
  return parts.map((part, i) => {
    if (keywords.includes(part)) {
      return (
        <code
          key={i}
          className={cn(
            'mx-0.5 inline-flex items-center rounded-md border px-1.5 py-0.5 font-mono text-[11px] sm:text-xsm font-semibold',
            'border-blue-200/80 bg-blue-50 text-blue-800',
            'dark:border-blue-800/60 dark:bg-blue-950/40 dark:text-blue-200',
          )}
        >
          {part}
        </code>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
};

const BitmaskCells = ({ bits }: { bits: string }) => (
  <ol aria-hidden="true" className="flex items-center gap-1">
    {bits.split('').map((b, i) => (
      <li
        key={i}
        className={cn(
          'h-6 w-6 sm:h-7 sm:w-7 rounded border flex items-center justify-center',
          'font-mono text-[10px] sm:text-xsm tabular-nums',
          b === '1'
            ? 'border-teal-400 bg-teal-500 text-white dark:border-teal-500 dark:bg-teal-500'
            : 'border-teal-200 bg-white text-teal-300 dark:border-teal-800/60 dark:bg-slate-950/40 dark:text-teal-800',
        )}
      >
        {b}
      </li>
    ))}
  </ol>
);

export const PriorityConnectionFlow = ({ content }: Props) => (
  <section aria-labelledby="heading-connection">
    <NumberedSectionHeader
      id="connection"
      number={content.number}
      eyebrow={content.title}
      title={content.title}
      icon={<NetworkIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,4fr)_minmax(0,4fr)_minmax(0,4fr)] gap-md items-stretch">
      {/* LEFT: vertical flow */}
      <article
        aria-label="flow-steps"
        className={cn(
          'flex h-full flex-col gap-3 rounded-3xl border-2 p-md sm:p-lg',
          'border-[var(--term-border)] bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <h3 className="text-xsm sm:text-sm font-bold text-[var(--term-fg)] break-keep">
          {content.flow.title}
        </h3>
        <ol className="flex flex-col gap-1.5">
          {content.flow.steps.map((step, i) => {
            const isLast = i === content.flow.steps.length - 1;
            return (
              <li key={step.title} className="flex flex-col">
                <div
                  className={cn(
                    'flex items-start gap-3 rounded-xl border px-3 py-2.5',
                    'border-[var(--term-border)] bg-[var(--term-bg)] transition-colors',
                    'motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none',
                    'hover:border-blue-300/80 dark:hover:border-blue-700/60',
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full',
                      'text-[11px] font-mono font-bold tabular-nums text-white',
                      numberToneCycle[i] ?? numberToneCycle[0],
                    )}
                  >
                    {i + 1}
                  </span>
                  <div className="flex flex-col gap-0.5 min-w-0 flex-1">
                    <h4 className="text-xsm sm:text-sm font-bold leading-tight text-[var(--term-fg)] break-keep">
                      {step.title}
                    </h4>
                    <p className="text-[11px] leading-snug text-[var(--term-muted)] break-keep">
                      {step.description}
                    </p>
                  </div>
                </div>
                {!isLast && (
                  <span
                    aria-hidden="true"
                    className="ml-[1.05rem] my-0.5 inline-block w-px h-3 border-l border-dashed border-[var(--term-border)]"
                  />
                )}
              </li>
            );
          })}
        </ol>
      </article>

      {/* CENTER: explanation */}
      <article
        aria-label="flow-explanation"
        className={cn(
          'flex h-full flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
          'border-blue-200/80 bg-gradient-to-br from-blue-50/70 via-white to-violet-50/40',
          'dark:border-blue-800/60 dark:from-blue-950/30 dark:via-[var(--term-bg)] dark:to-violet-950/20',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-[0_3px_0_rgba(29,78,216,0.3)] dark:bg-blue-500"
          >
            <SparklesIcon className="h-5 w-5" strokeWidth={2.2} />
          </span>
          <p className="text-[10px] sm:text-xsm font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
            {content.explanation.title}
          </p>
        </header>

        <ul className="flex flex-col gap-2">
          {content.explanation.paragraphs.map((p) => (
            <li
              key={p}
              className="flex items-start gap-2 text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep"
            >
              <span
                aria-hidden="true"
                className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500 dark:bg-blue-400"
              />
              <span>{highlightKeyword(p, content.explanation.keywords)}</span>
            </li>
          ))}
        </ul>
      </article>

      {/* RIGHT: bitmask card */}
      <article
        aria-label="lane-bitmask"
        className={cn(
          'flex h-full flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
          'border-teal-200/80 bg-gradient-to-br from-teal-50/70 via-white to-cyan-50/40',
          'dark:border-teal-800/60 dark:from-teal-950/30 dark:via-[var(--term-bg)] dark:to-cyan-950/20',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center justify-between gap-2">
          <h3 className="text-xsm sm:text-sm font-bold leading-tight text-[var(--term-fg)] break-keep">
            {content.bitmask.title}
          </h3>
          <span
            aria-hidden="true"
            className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-teal-200/80 bg-teal-50 text-teal-700 dark:bg-teal-950/40 dark:border-teal-800/60 dark:text-teal-200"
          >
            <SparklesIcon className="h-3.5 w-3.5" />
          </span>
        </header>

        <ul className="flex flex-col gap-2 overflow-x-auto">
          {content.bitmask.rows.map((row) => (
            <li
              key={row.name}
              className={cn(
                'flex items-center justify-between gap-3 rounded-xl border-2 px-3 py-2',
                'border-teal-200/80 bg-white/70 dark:border-teal-800/60 dark:bg-slate-950/30',
              )}
            >
              <div className="flex flex-col">
                <code className="font-mono text-[11px] sm:text-xsm font-bold text-teal-700 dark:text-teal-300">
                  {row.name}
                </code>
                <span className="font-mono text-[10px] text-[var(--term-muted)]">
                  bits: {row.bits}
                </span>
              </div>
              <BitmaskCells bits={row.bits} />
            </li>
          ))}
        </ul>

        <aside
          className={cn(
            'mt-auto flex items-start gap-2 rounded-xl border-2 border-dashed px-md py-3',
            'border-teal-300/80 bg-teal-50/60 text-teal-800',
            'dark:border-teal-700/60 dark:bg-teal-950/30 dark:text-teal-100',
          )}
        >
          <span
            aria-hidden="true"
            className="mt-0.5 inline-block h-2 w-2 rounded-full bg-teal-500"
          />
          <p className="text-[11px] sm:text-xsm leading-relaxed break-keep">
            {content.bitmask.note}
          </p>
        </aside>
      </article>
    </div>
  </section>
);
