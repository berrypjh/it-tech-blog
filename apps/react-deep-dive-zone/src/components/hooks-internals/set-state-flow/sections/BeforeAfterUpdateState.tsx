import { cn } from '@it-tech-blog/utils';

import type { SetStateFlowContent, Tone } from '../content';
import { AlertTriangleIcon, ArrowDownIcon, ArrowRightIcon, PlayCircleIcon } from '../icons';

type Props = { content: SetStateFlowContent['beforeAfter'] };

const valueTone: Record<Tone, string> = {
  sky: 'text-sky-700 dark:text-sky-200',
  cyan: 'text-cyan-700 dark:text-cyan-200',
  teal: 'text-teal-700 dark:text-teal-200',
  emerald: 'text-emerald-700 dark:text-emerald-200',
  violet: 'text-violet-700 dark:text-violet-200',
  amber: 'text-amber-700 dark:text-amber-200',
  rose: 'text-rose-700 dark:text-rose-200',
  indigo: 'text-indigo-700 dark:text-indigo-200',
};

type ColumnProps = {
  title: string;
  items: { label: string; value: string; tone: Tone }[];
  variant: 'before' | 'after';
};

const ColumnCard = ({ title, items, variant }: ColumnProps) => (
  <article
    className={cn(
      'flex flex-col gap-md rounded-2xl border-2 p-md sm:p-lg',
      'shadow-[0_2px_0_var(--term-border)]',
      variant === 'before'
        ? 'border-[var(--term-border)] bg-[var(--term-bg)]'
        : 'border-emerald-300/70 bg-emerald-50/40 dark:border-emerald-800/60 dark:bg-emerald-950/20',
    )}
  >
    <header className="flex items-center gap-2">
      <span
        className={cn(
          'inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider',
          variant === 'before'
            ? 'border-[var(--term-border)] bg-[var(--term-border)]/20 text-[var(--term-muted)]'
            : 'border-emerald-300/80 bg-emerald-100 text-emerald-800 dark:border-emerald-700/60 dark:bg-emerald-950/60 dark:text-emerald-100',
        )}
      >
        {variant === 'before' ? 'Before' : 'After'}
      </span>
      <h3 className="text-xsm sm:text-sm font-bold text-[var(--term-fg)] break-keep">{title}</h3>
    </header>
    <ul className="flex flex-col gap-1.5">
      {items.map((item) => (
        <li
          key={item.label}
          className="flex items-center justify-between gap-2 rounded-lg border border-[var(--term-border)] bg-white px-3 py-2 dark:bg-slate-950/40"
        >
          <code className="font-mono text-[11px] sm:text-xsm text-[var(--term-muted)] break-all">
            {item.label}
          </code>
          <code
            className={cn(
              'font-mono text-[11px] sm:text-xsm font-bold break-all text-right',
              valueTone[item.tone],
            )}
          >
            {item.value}
          </code>
        </li>
      ))}
    </ul>
  </article>
);

export const BeforeAfterUpdateState = ({ content }: Props) => (
  <section
    aria-label="before-after"
    className={cn(
      'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg lg:p-xl',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] gap-md lg:gap-lg items-stretch">
      <ColumnCard title={content.beforeTitle} items={content.beforeItems} variant="before" />

      {/* Center */}
      <div aria-hidden="true" className="flex flex-col items-center justify-center gap-3 px-2">
        <span className="hidden lg:flex items-center text-[var(--term-muted)]">
          <ArrowRightIcon className="h-5 w-5" />
        </span>
        <span className="lg:hidden flex items-center text-[var(--term-muted)]">
          <ArrowDownIcon className="h-5 w-5" />
        </span>

        <span
          className={cn(
            'inline-flex items-center gap-1.5 rounded-full border-2 px-3 py-2',
            'border-blue-400 bg-blue-50 text-blue-700 font-mono text-xsm font-bold',
            'dark:border-blue-700/70 dark:bg-blue-950/40 dark:text-blue-200',
            'shadow-[0_2px_0_var(--term-border)] break-all text-center',
          )}
        >
          <PlayCircleIcon aria-hidden="true" className="h-3.5 w-3.5 shrink-0" />
          {content.centerCall}
        </span>

        <span
          className={cn(
            'inline-flex items-center gap-1.5 rounded-full border-2 px-3 py-1.5',
            'border-rose-400/80 bg-rose-50 text-rose-700 text-[11px] font-bold',
            'dark:border-rose-700/60 dark:bg-rose-950/40 dark:text-rose-200',
            'break-keep text-center',
          )}
        >
          <AlertTriangleIcon aria-hidden="true" className="h-3.5 w-3.5 shrink-0" />
          {content.warning}
        </span>

        <span className="hidden lg:flex items-center text-[var(--term-muted)]">
          <ArrowRightIcon className="h-5 w-5" />
        </span>
        <span className="lg:hidden flex items-center text-[var(--term-muted)]">
          <ArrowDownIcon className="h-5 w-5" />
        </span>
      </div>

      <ColumnCard title={content.afterTitle} items={content.afterItems} variant="after" />
    </div>
  </section>
);
