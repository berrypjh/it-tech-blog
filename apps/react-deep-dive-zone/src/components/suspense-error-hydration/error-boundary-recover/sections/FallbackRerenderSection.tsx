import { cn } from '@it-tech-blog/utils';

import type { ErrorBoundaryRecoverContent } from '../content';
import { ArrowRightIcon, ShieldAlertIcon, TriangleAlertIcon, UserIcon } from '../icons';

import { SectionHeader } from './_SectionHeader';

type Props = { content: ErrorBoundaryRecoverContent['fallback'] };

export const FallbackRerenderSection = ({ content }: Props) => (
  <section aria-labelledby="fallback-heading" className="flex flex-col gap-md">
    <SectionHeader id="fallback-heading" number={content.number} title={content.title} />

    <div className="grid grid-cols-1 gap-3 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] items-stretch">
      {/* Before */}
      <article
        className={cn(
          'flex flex-col gap-3 rounded-2xl border-2 p-md',
          'border-slate-200 bg-slate-50/60 dark:border-slate-700 dark:bg-slate-900/30',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-700 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200"
          >
            <UserIcon className="h-3.5 w-3.5" />
          </span>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
            {content.before.title}
          </span>
        </header>
        <h3 className="text-md font-bold text-[var(--term-fg)] break-keep">
          {content.before.heading}
        </h3>
        <p className="text-xsm text-[var(--term-muted)] break-keep">{content.before.body}</p>
        <div className="mt-auto space-y-1.5">
          <span
            aria-hidden="true"
            className="block h-3 w-3 rounded-full bg-slate-300 dark:bg-slate-600"
          />
          <span
            aria-hidden="true"
            className="block h-2 w-3/4 rounded bg-slate-200 dark:bg-slate-700"
          />
          <span
            aria-hidden="true"
            className="block h-2 w-2/3 rounded bg-slate-200 dark:bg-slate-700"
          />
          <span
            aria-hidden="true"
            className="block h-2 w-1/2 rounded bg-slate-200 dark:bg-slate-700"
          />
        </div>
      </article>

      <span
        aria-hidden="true"
        className="self-center inline-flex items-center justify-center text-blue-500 dark:text-blue-300"
      >
        <ArrowRightIcon className="hidden lg:block h-4 w-4" />
        <ArrowRightIcon className="lg:hidden h-4 w-4 rotate-90 mx-auto" />
      </span>

      {/* State transition */}
      <article
        className={cn(
          'flex flex-col gap-2 rounded-2xl border-2 p-md',
          'border-violet-200/80 bg-violet-50/40 dark:border-violet-800/60 dark:bg-violet-950/20',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <h3 className="text-sm font-bold text-violet-700 dark:text-violet-200 break-keep">
          {content.transition.title}
        </h3>
        <div
          className={cn(
            'rounded-lg border border-slate-800 bg-slate-950 p-2.5 font-mono text-[11px] leading-[1.65]',
          )}
        >
          <div className="text-emerald-300">{content.transition.block1Title}</div>
          <div className="text-slate-300">{content.transition.block1Body}</div>
          <div className="mt-1.5 text-cyan-200">{content.transition.block2Title}</div>
          <div className="text-slate-300">{content.transition.block2Body}</div>
        </div>
      </article>

      <span
        aria-hidden="true"
        className="self-center inline-flex items-center justify-center text-blue-500 dark:text-blue-300"
      >
        <ArrowRightIcon className="hidden lg:block h-4 w-4" />
        <ArrowRightIcon className="lg:hidden h-4 w-4 rotate-90 mx-auto" />
      </span>

      {/* After */}
      <article
        className={cn(
          'flex flex-col gap-3 rounded-2xl border-2 p-md',
          'border-rose-200/80 bg-rose-50/60 dark:border-rose-800/60 dark:bg-rose-950/30',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-rose-200 bg-rose-100 text-rose-700 dark:border-rose-800/60 dark:bg-rose-950/60 dark:text-rose-200"
          >
            <ShieldAlertIcon className="h-3.5 w-3.5" />
          </span>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-rose-700 dark:text-rose-200">
            {content.after.title}
          </span>
        </header>
        <h3 className="text-md font-bold text-rose-800 dark:text-rose-100 break-keep">
          {content.after.heading}
        </h3>
        <p className="text-xsm text-rose-700/80 dark:text-rose-200/80 break-keep">
          {content.after.body}
        </p>
        <div
          className={cn(
            'mt-auto flex items-center gap-2 rounded-xl border-2 p-3',
            'border-rose-300 bg-white dark:border-rose-700 dark:bg-slate-900',
          )}
        >
          <TriangleAlertIcon
            aria-hidden="true"
            className="h-5 w-5 shrink-0 text-rose-600 dark:text-rose-300"
          />
          <div className="flex flex-col gap-0.5 min-w-0">
            <span className="text-xsm font-bold text-rose-700 dark:text-rose-200 break-keep">
              문제가 발생했습니다
            </span>
            <span className="text-[10px] text-rose-700/80 dark:text-rose-200/80 break-keep">
              잠시 후 다시 시도해주세요.
            </span>
          </div>
        </div>
      </article>
    </div>
  </section>
);
