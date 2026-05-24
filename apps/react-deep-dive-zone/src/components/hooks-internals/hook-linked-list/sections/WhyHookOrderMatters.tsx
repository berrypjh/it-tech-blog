import Link from 'next/link';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../start/_shared/SectionHeader';
import type { HookLinkedListContent } from '../content';
import {
  AlertTriangleIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ListOrderedIcon,
  XCircleIcon,
} from '../icons';

type Props = { content: HookLinkedListContent['whyOrder'] };

export const WhyHookOrderMatters = ({ content }: Props) => (
  <section
    aria-labelledby="heading-why-order"
    className={cn(
      'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg lg:p-xl',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <SectionHeader
      id="why-order"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<ListOrderedIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-md lg:gap-lg">
      {/* Left: normal */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-2xl border-2 p-md sm:p-lg',
          'border-emerald-300/80 bg-emerald-50/60 dark:border-emerald-700/60 dark:bg-emerald-950/30',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-900 shadow-[0_2px_0_rgba(5,150,105,0.25)]"
          >
            <CheckCircleIcon className="h-5 w-5" />
          </span>
          <h3 className="text-sm sm:text-md font-bold text-emerald-800 dark:text-emerald-100 break-keep">
            {content.leftCard.title}
          </h3>
        </header>

        <ol className="flex flex-col gap-1.5">
          {content.leftCard.rows.map((row, i) => (
            <li
              key={row}
              className="flex items-start gap-2 rounded-lg border border-emerald-200/70 bg-white px-3 py-2 dark:border-emerald-800/60 dark:bg-emerald-950/20"
            >
              <span
                aria-hidden="true"
                className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white text-[10px] font-mono font-bold tabular-nums dark:bg-emerald-400 dark:text-slate-900"
              >
                {i + 1}
              </span>
              <code className="font-mono text-[11px] sm:text-xsm text-emerald-900 dark:text-emerald-100 break-all">
                {row}
              </code>
            </li>
          ))}
        </ol>

        <div className="flex flex-wrap items-center gap-1.5">
          {content.leftCard.diagram.map((node, i) => {
            const isLast = i === content.leftCard.diagram.length - 1;
            return (
              <span key={node} className="inline-flex items-center gap-1.5">
                <code className="inline-flex items-center rounded-lg border border-emerald-300/80 bg-emerald-100 px-2 py-1 font-mono text-[10px] font-bold text-emerald-800 dark:border-emerald-700/60 dark:bg-emerald-950/60 dark:text-emerald-100 break-all">
                  {node}
                </code>
                {!isLast && (
                  <ArrowRightIcon
                    aria-hidden="true"
                    className="h-3 w-3 text-emerald-700 dark:text-emerald-300"
                  />
                )}
              </span>
            );
          })}
        </div>
      </article>

      {/* Right: broken */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-2xl border-2 p-md sm:p-lg',
          'border-rose-300/80 bg-rose-50/60 dark:border-rose-700/60 dark:bg-rose-950/30',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-rose-500 text-white dark:bg-rose-400 dark:text-slate-900 shadow-[0_2px_0_rgba(225,29,72,0.25)]"
          >
            <XCircleIcon className="h-5 w-5" />
          </span>
          <h3 className="text-sm sm:text-md font-bold text-rose-800 dark:text-rose-100 break-keep">
            {content.rightCard.title}
          </h3>
        </header>

        <ol className="flex flex-col gap-1.5">
          {content.rightCard.rows.map((row, i) => (
            <li
              key={row}
              className="flex items-start gap-2 rounded-lg border border-rose-200/70 bg-white px-3 py-2 dark:border-rose-800/60 dark:bg-rose-950/20"
            >
              <span
                aria-hidden="true"
                className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-500 text-white text-[10px] font-mono font-bold tabular-nums dark:bg-rose-400 dark:text-slate-900"
              >
                {i + 1}
              </span>
              <code className="font-mono text-[11px] sm:text-xsm text-rose-900 dark:text-rose-100 break-all">
                {row}
              </code>
            </li>
          ))}
        </ol>

        <aside
          className={cn(
            'flex items-start gap-2 rounded-lg border-2 border-rose-400/80 bg-rose-100/70 p-2.5',
            'dark:border-rose-600/60 dark:bg-rose-950/50',
          )}
        >
          <AlertTriangleIcon
            aria-hidden="true"
            className="h-4 w-4 shrink-0 mt-0.5 text-rose-700 dark:text-rose-300"
          />
          <p className="text-[11px] sm:text-xsm font-bold text-rose-800 dark:text-rose-100 break-keep">
            {content.rightCard.warning}
          </p>
        </aside>
      </article>
    </div>

    {/* Warning banner */}
    <aside
      className={cn(
        'mt-md flex flex-col gap-md sm:flex-row sm:items-center sm:justify-between rounded-2xl border-2 p-md',
        'border-rose-400/80 bg-rose-50 dark:border-rose-600/60 dark:bg-rose-950/40',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <div className="flex items-start gap-3 min-w-0">
        <span
          aria-hidden="true"
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-rose-500 text-white dark:bg-rose-400 dark:text-slate-900"
        >
          <AlertTriangleIcon className="h-4 w-4" />
        </span>
        <p className="text-xsm sm:text-sm leading-relaxed text-rose-900 dark:text-rose-100 break-keep">
          {content.banner.text}
        </p>
      </div>

      <Link
        href={content.banner.ctaHref}
        className={cn(
          'group inline-flex items-center justify-center gap-2 shrink-0 rounded-xl border-2 px-4 py-2.5',
          'border-rose-400 bg-white text-rose-700 font-bold text-xsm sm:text-sm',
          'dark:border-rose-600/60 dark:bg-rose-950/30 dark:text-rose-200',
          'transition-all motion-safe:hover:-translate-y-0.5 hover:bg-rose-100/70 dark:hover:bg-rose-950/60',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
        )}
      >
        <span className="break-keep">{content.banner.ctaLabel}</span>
        <ArrowRightIcon
          aria-hidden="true"
          className="h-4 w-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none"
        />
      </Link>
    </aside>
  </section>
);
