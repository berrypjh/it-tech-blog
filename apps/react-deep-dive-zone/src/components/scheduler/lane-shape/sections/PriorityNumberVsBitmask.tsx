import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { LaneBitmaskContent } from '../content';
import { BinaryIcon, CheckCircleIcon, HashIcon, ScanSearchIcon } from '../icons';

type Props = { content: LaneBitmaskContent['compare'] };

export const PriorityNumberVsBitmask = ({ content }: Props) => (
  <section aria-labelledby="heading-compare">
    <NumberedSectionHeader
      id="compare"
      number={content.number}
      eyebrow={content.title}
      title={content.title}
      icon={<ScanSearchIcon className="h-5 w-5" />}
    />

    <div className="relative grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] gap-md items-stretch">
      {/* LEFT — number */}
      <article
        className={cn(
          'flex h-full flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
          'border-[var(--term-border)] bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-muted)]"
          >
            <HashIcon className="h-5 w-5" />
          </span>
          <div className="flex flex-col">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
              plain
            </span>
            <h3 className="text-md sm:text-lg font-bold leading-tight text-[var(--term-fg)] break-keep">
              {content.leftTitle}
            </h3>
          </div>
        </header>

        {/* visual hint: 1 2 3 numbers */}
        <ul aria-hidden="true" className="flex gap-2">
          {['1', '2', '3'].map((n) => (
            <li
              key={n}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] font-mono text-md font-bold text-[var(--term-muted)]"
            >
              {n}
            </li>
          ))}
        </ul>

        <ul className="flex flex-col gap-2">
          {content.leftPoints.map((p) => (
            <li
              key={p}
              className="flex items-start gap-2 text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep"
            >
              <span
                aria-hidden="true"
                className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--term-muted)]"
              />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </article>

      {/* VS badge */}
      <div aria-hidden="true" className="hidden lg:flex items-center justify-center self-center">
        <span
          className={cn(
            'inline-flex h-14 w-14 items-center justify-center rounded-full',
            'border-2 border-blue-300 bg-white text-blue-700 font-mono font-bold text-sm',
            'shadow-[0_3px_0_var(--term-border)]',
            'dark:border-blue-700/70 dark:bg-slate-950/40 dark:text-blue-200',
          )}
        >
          {content.vsLabel}
        </span>
      </div>
      <div className="lg:hidden flex items-center justify-center">
        <span
          aria-hidden="true"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-300 bg-white text-blue-700 font-mono font-bold text-xsm dark:border-blue-700/70 dark:bg-slate-950/40 dark:text-blue-200"
        >
          {content.vsLabel}
        </span>
      </div>

      {/* RIGHT — bitmask */}
      <article
        className={cn(
          'flex h-full flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
          'border-blue-300/90 bg-gradient-to-br from-blue-50/80 via-white to-cyan-50/40',
          'dark:border-blue-700/70 dark:from-blue-950/30 dark:via-[var(--term-bg)] dark:to-cyan-950/20',
          'shadow-[0_3px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/60"
          >
            <BinaryIcon className="h-5 w-5" />
          </span>
          <div className="flex flex-col">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
              react&apos;s choice
            </span>
            <h3 className="text-md sm:text-lg font-bold leading-tight text-[var(--term-fg)] break-keep">
              {content.rightTitle}
            </h3>
          </div>
        </header>

        {/* visual hint: small bit cells */}
        <ul aria-hidden="true" className="flex gap-1">
          {['0', '0', '1', '0', '1', '0', '0', '1'].map((b, i) => (
            <li
              key={i}
              className={cn(
                'inline-flex h-7 w-7 items-center justify-center rounded border font-mono text-[11px] font-bold',
                b === '1'
                  ? 'bg-blue-500 border-blue-500 text-white dark:bg-blue-400 dark:border-blue-400 dark:text-slate-900'
                  : 'bg-white text-[var(--term-dim)] border-[var(--term-border)] dark:bg-slate-950/40',
              )}
            >
              {b}
            </li>
          ))}
        </ul>

        <ul className="flex flex-col gap-2">
          {content.rightPoints.map((p) => (
            <li
              key={p}
              className="flex items-start gap-2 text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep"
            >
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-0.5 h-4 w-4 shrink-0 text-blue-600 dark:text-blue-300"
              />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </article>
    </div>
  </section>
);
