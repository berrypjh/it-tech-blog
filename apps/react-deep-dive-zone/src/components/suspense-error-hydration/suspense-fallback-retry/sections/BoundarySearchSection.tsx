import { cn } from '@it-tech-blog/utils';

import type { SuspenseFallbackRetryContent } from '../content';
import {
  ArrowDownIcon,
  AtomIcon,
  BoxIcon,
  CheckCircleIcon,
  RadarIcon,
  ShieldCheckIcon,
  TargetIcon,
} from '../icons';

import { SectionHeader } from './_SectionHeader';

type Props = { content: SuspenseFallbackRetryContent['search'] };

export const BoundarySearchSection = ({ content }: Props) => (
  <section aria-labelledby="search-heading" className="flex flex-col gap-md">
    <SectionHeader id="search-heading" number={content.number} title={content.title} />

    <div className="grid grid-cols-1 gap-md lg:grid-cols-[minmax(0,3fr)_minmax(0,4fr)_minmax(0,3fr)] items-stretch">
      {/* description */}
      <article
        className={cn(
          'flex flex-col justify-center rounded-2xl border-2 p-md sm:p-lg',
          'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <RadarIcon aria-hidden="true" className="h-7 w-7 text-blue-500 dark:text-blue-300 mb-2" />
        <p className="text-md sm:text-lg font-bold leading-snug text-[var(--term-fg)] break-keep">
          {content.description}
        </p>
      </article>

      {/* diagram */}
      <article
        className={cn(
          'relative flex flex-col gap-3 rounded-2xl border-2 p-md sm:p-lg',
          'border-blue-200/70 bg-gradient-to-b from-blue-50/30 to-white',
          'dark:border-blue-800/60 dark:from-blue-950/20 dark:to-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        {/* App */}
        <div className="flex items-center justify-center gap-1.5 rounded-xl border-2 border-slate-300 bg-white px-3 py-2 dark:border-slate-600 dark:bg-slate-900">
          <AtomIcon className="h-3.5 w-3.5 text-slate-500" aria-hidden="true" />
          <span className="text-xsm font-mono font-bold text-slate-700 dark:text-slate-200">
            {content.tree.app}
          </span>
        </div>
        <ArrowDownIcon
          aria-hidden="true"
          className="h-4 w-4 mx-auto text-slate-400 dark:text-slate-500"
        />

        {/* Suspense - highlighted */}
        <div className="relative flex items-center justify-center gap-2 rounded-xl border-2 border-teal-400 bg-teal-50 px-4 py-3 shadow-[0_0_0_4px_rgba(20,184,166,0.15)] dark:border-teal-500 dark:bg-teal-950/40">
          <ShieldCheckIcon
            className="h-4 w-4 text-teal-600 dark:text-teal-300"
            aria-hidden="true"
          />
          <span className="text-sm font-mono font-bold text-teal-700 dark:text-teal-200">
            {content.tree.suspense}
          </span>
          <span className="absolute -right-1 -top-2 inline-flex items-center gap-1 rounded-full border border-teal-300 bg-white px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-teal-700 dark:border-teal-700 dark:bg-slate-900 dark:text-teal-200">
            <TargetIcon className="h-2.5 w-2.5" aria-hidden="true" />
            {content.tree.suspenseTag}
          </span>
        </div>

        {/* dotted upward indicator (decorative) */}
        <div className="relative my-1 flex justify-center">
          <span
            aria-hidden="true"
            className="block h-6 w-px border-l border-dashed border-rose-400"
          />
        </div>

        {/* intermediate */}
        <div className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-1.5 dark:border-slate-700 dark:bg-slate-900/50">
          <BoxIcon className="h-3 w-3 text-slate-400" aria-hidden="true" />
          <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 break-keep">
            {content.tree.intermediate}
          </span>
        </div>

        <ArrowDownIcon
          aria-hidden="true"
          className="h-4 w-4 mx-auto text-rose-400 dark:text-rose-500 rotate-180"
        />

        {/* Profile - throw site */}
        <div className="relative flex items-center justify-center gap-2 rounded-xl border-2 border-rose-300 bg-rose-50 px-4 py-3 dark:border-rose-700 dark:bg-rose-950/40">
          <BoxIcon className="h-4 w-4 text-rose-600 dark:text-rose-300" aria-hidden="true" />
          <span className="text-sm font-mono font-bold text-rose-700 dark:text-rose-200">
            {content.tree.profile}
          </span>
          <span className="absolute -right-1 -top-2 inline-flex items-center rounded-full border border-rose-300 bg-white px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-rose-700 dark:border-rose-700 dark:bg-slate-900 dark:text-rose-200">
            {content.tree.profileTag}
          </span>
        </div>
      </article>

      {/* rules */}
      <article
        className={cn(
          'flex flex-col gap-3 rounded-2xl border-2 p-md sm:p-lg',
          'border-teal-200/80 bg-teal-50/30 dark:border-teal-800/60 dark:bg-teal-950/20',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <h3 className="text-md font-bold text-teal-700 dark:text-teal-200 break-keep">
          {content.rulesTitle}
        </h3>
        <ul className="flex flex-col gap-2">
          {content.rules.map((rule) => (
            <li
              key={rule}
              className="flex items-start gap-2 text-xsm text-[var(--term-fg)] break-keep"
            >
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-0.5 h-4 w-4 shrink-0 text-teal-500 dark:text-teal-400"
              />
              <span>{rule}</span>
            </li>
          ))}
        </ul>
      </article>
    </div>
  </section>
);
